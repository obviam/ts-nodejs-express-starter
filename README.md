# Typescript starter for nodejs with express

## Prerequisites

* [nodejs](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)
  * `npm install -g typescript`

## Usage

Clone this repository and change the following in `package.json` file to suite your project:

```json
  "name": "ts-express-starter",
  "version": "0.0.1",
  "description": "nodejs express server configured with typescript",
```

### Project file structure

```
- src/
-   app.ts  # main file
- tsconfig.json
- package.json
- node_modules/
- dist/ # all of our built ts files get put here by the compiler
```

Write the sourcecode using typescript under the `src` directory.

## Install Dependencies

`npm install`

## Running the Development Server

`npm start watch`

The server will be listening on port `3000`. Any changes to the code-base will be picked up and the server will be restarted.

Open browser at [http://localhost:3000](http://localhost:3000)
