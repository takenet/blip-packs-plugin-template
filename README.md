# Introduction
This project is an Architecture reference for Micro front-ends at Take platform. It will guide you into the journey to build new projects or adapt an existing one to a React Micro front-end.

# Project Stack

- **Main framework**: React;
- **Language**: Typescript;
- **Micro front-end strategy**: web components
- **Commit hooks**: Husky

# Development and Usage

1. Clone this repo;
2. Change the `applicationName` property at `constants.ts` file. (Exemple: `tenant-mfe`);
3. `npm install && npm start`

# Tests

Use the sufix `*.spec.ts` when writing unit test suites and `*.test.ts` when writing integration tests. Doing this, you'll be able to run then with separate scripts, such as:

- `npm run test:unit`  -> for unit tests
- `npm run test:unit`  -> for integration tests
- `npm run test:verbose`  -> for all tests, not suppressing logs
- `npm run test:coverage`  -> for all tests, with coverage report (available on **/coverage/Icov-report/index.html**)

# Using with BLiP Portal

1. `npm start`
2. Catch the localhost URL (default is `localhost:5000`), open `index.html` of BLiP Portal project and put a script reference between `<head>` tags, like this:
```
<head>
    <script src="http://localhost:5000/dist/main.js"></script>
</head>
```
3. Use the web component name defined at `constants.ts` (default is `<microfront-sample>`) to use the micro front-end.

# Passing properties

You can pass any properties to this project and retrieve them on `App.tsx` component. Let's say that you wanna pass the `user` property from Blip Portal to this micro frontend:

```tsx
// Blip Portal
<microfront-sample user="{{$ctrl.user}}"></microfront-sample>

// Micro Front-end (App.tsx)
interface AppProps {
  user: User;
}

export const App: React.FC<AppProps> = ({ user }) => { // user property received as param
  applyPolyfills().then(() => {
    defineCustomElements(window);
  });

  (...)
```

# TODOs
- [✅] Show code coverage
- [ ] Increase the code coverage to >=90%;
