# Mitocommerce - Project Overview

This project is a modern E-commerce application built with **Angular 21**. It leverages the latest Angular features, including Standalone Components and Signals, and uses **Tailwind CSS 4** for styling.

## Project Structure

The codebase follows a modular architecture designed for scalability:

- **`src/app/core`**: Contains infrastructure-related code such as guards and interceptors that are singleton-like or global.
- **`src/app/modules`**: Contains feature-specific modules (e.g., `product`). Each module is organized into `components`, `interfaces`, `pages`, and `services`.
- **`src/app/shared`**: Houses reusable UI components, pipes, and directives. Organized under `ui/components`.
- **`public/`**: Stores static assets like fonts (Manrope, Poppins), icons (Material Design Icons, Remixicon, UIcons), and images.

## Main Technologies

- **Frontend Framework**: [Angular 21](https://angular.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with PostCSS.
- **Icons**: [Remixicon](https://remixicon.com/) (and others available in `public/font/icon`).
- **Test Runner**: [Vitest](https://vitest.dev/)
- **Linting & Formatting**: [ESLint](https://eslint.org/) (with `angular-eslint`) and [Prettier](https://prettier.io/).

## Building and Running

| Task                 | Command                       |
| :------------------- | :---------------------------- |
| Start Dev Server     | `npm start` or `ng serve`     |
| Build for Production | `npm run build` or `ng build` |
| Run Unit Tests       | `npm test` or `ng test`       |
| Lint Code            | `npm run lint` or `ng lint`   |
| Watch Build          | `npm run watch`               |

## Development Conventions

- **Angular Signals**: Use Signals for reactive state management where possible (e.g., `signal()`, `computed()`, `effect()`).
- **Standalone Components**: All components are standalone. Ensure they are imported directly where needed.
- **Naming Conventions**:
  - Components use `kebab-case` for selectors (e.g., `app-navbar`).
  - Directives use `camelCase` for selectors (prefix `app`).
  - Files are named using `.ts`, `.html`, and `.css` extensions.
- **Styling**: Prefer Tailwind utility classes. Component-specific styles can be added in the corresponding `.css` files.
- **Formatting**: Adhere to Prettier settings (100 print width, single quotes, 2-space indentation).
- **Testing**: Use Vitest for unit tests. Ensure new components or services have corresponding `.spec.ts` files.

You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.
- Do not write arrow functions in templates (they are not supported).

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection
