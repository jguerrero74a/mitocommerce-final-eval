# Mitocommerce - Project Overview

This project is a modern E-commerce application built with **Angular 21**, **NgRx Store**, and **Tailwind CSS 4**. It utilizes the latest Angular features like Signals, Standalone Components, and SSR Hydration to provide a performant and scalable shopping experience.

## Project Structure

The codebase is organized into a modular architecture:

- **`src/app/core`**: Infrastructure-related code (guards, interceptors, global services).
- **`src/app/modules`**: Feature-specific modules (e.g., `product`, `cart`, `category`).
  - Each module contains `components`, `interfaces`, `pages`, and `services`.
- **`src/app/shared`**: Reusable UI components (`ui/components`), pipes, directives, and shared services.
- **`src/app/store`**: Global state management using NgRx Store (Actions, Reducers, Selectors, Effects).
- **`public/`**: Static assets including fonts (**Manrope**, **Poppins**), icons (**Remixicon**, **Material Design Icons**, **UIcons**), and images.

## Main Technologies

- **Frontend**: [Angular 21](https://angular.dev/)
- **State Management**: [NgRx Store & Effects](https://ngrx.io/) for global state, and [Angular Signals](https://angular.dev/guide/signals) for local/reactive state.
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with PostCSS.
- **SSR & Hydration**: Angular SSR enabled with `provideClientHydration(withEventReplay())`.
- **Test Runner**: [Vitest](https://vitest.dev/)
- **Formatting & Linting**: ESLint and Prettier.

## Building and Running

| Task                 | Command                          |
| :------------------- | :------------------------------- |
| Start Dev Server     | `npm start` or `ng serve`        |
| Build for Production | `npm run build` or `ng build`    |
| Run Unit Tests       | `npm test` or `ng test`          |
| Lint Code            | `npm run lint` or `ng lint`      |
| Run SSR Server       | `npm run serve:ssr:mitocommerce` |

## Session Rules & Persistence

- **Cart State**: Managed globally via NgRx and persisted in `localStorage` using NgRx Effects.
- **Hydration Safety**: Client-specific logic (e.g., loading data from `localStorage`) must be wrapped in `afterNextRender` to ensure compatibility with SSR.
- **State Flow**: Components dispatch actions to the Store; state changes are reflected via Signal-based selectors or `toSignal`.

## Development Conventions

- **Angular Signals**: Mandatory for local state management (`signal()`, `computed()`, `effect()`, `toSignal()`).
- **Standalone Components**: All components are standalone. No `standalone: true` is required in the `@Component` decorator as it is the default in Angular v20+.
- **Component Communication**: Use `input()` and `output()` functions instead of `@Input()` and `@Output()` decorators.
- **Change Detection**: Always set `changeDetection: ChangeDetectionStrategy.OnPush`.
- **Native Control Flow**: Use `@if`, `@for`, and `@switch` in templates instead of structural directives.
- **Images**: Use `NgOptimizedImage` (`ngSrc`) for all static image assets.
- **Styling**: Prefer Tailwind CSS 4 utility classes. Component-specific styles should be minimal and scoped to the `.css` file.
- **Naming**:
  - Files: `kebab-case` (e.g., `product-card.ts`, `cart.reducer.ts`).
  - Selectors: `app-` prefix for components, `app` prefix (camelCase) for directives.

## AI Assistant Guidelines

You are an expert in TypeScript, Angular 21, and scalable web development. You write functional, maintainable, and accessible code following these standards:

- **Strict Typing**: Ensure strict type checking. Use `unknown` instead of `any`.
- **Injection**: Use the `inject()` function for dependency injection.
- **Reactive Patterns**: Prefer Reactive forms and Signal-based data flow.
- **Performance**: Optimize templates and use `computed()` for derived state to avoid unnecessary re-computations.
- **Accessibility**: All components MUST meet WCAG AA standards and pass AXE checks.

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
