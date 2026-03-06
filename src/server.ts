import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import { environment } from './environments/environment';
import { ChatMessage } from './app/shared/interfaces/ChatMessage';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

app.use(express.json());

const ai = genkit({
  plugins: [
    googleAI({
      apiKey: environment.apiKeyGoogle,
    }),
  ],
});
/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

// Endpoints
app.post('/api/chat-bot', async (req, res) => {
  const { message } = req.body;

  const systemPrompt = `
    Nosotros somos Mitocommerce, una empresa que vende productos orgánicos como plátanos, 
    manzanas, naranjas, peras y uvas, entre muchas otras. Da respuestas en español.
  Eres un asistente virtual de un ecommerce. Tu objetivo es ayudar a los clientes con:
  -  Preguntas sobre productos
  -  Procesamiento de pedidos
  -  Devoluciones y cambios
  -  Preguntas generales sobre la tienda
  `;

  try {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      prompt: message,
      system: systemPrompt,
      config: {
        temperature: 0.7,
      },
    });

    const chatMessage: ChatMessage = {
      id: Date.now().toString(),
      content: response.text,
      sender: 'bot',
      timestamp: new Date(),
    };
    res.json({ ...chatMessage });
  } catch (error) {
    console.error('Error generating response:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
