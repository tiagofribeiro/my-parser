# my-parser 

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

Custom parser that changes layout based on user input.  
Created using [Nearley 2.20](https://nearley.js.org/docs).

<br>

## Scripts
First, install dependencies using `npm` or `yarn`.  
<br>
- `client:dev` - Runs the frontend using webpack dev server at `localhost:8080`;
- `client:build` - Builds the frontend using webpack and outputs it to `dist`;
- `server:dev` - Uses <i>nodemon</i> e <i>ts-node</i> to run the backend in development mode;
- `server:build` - Compiles the Typescript backend code and outputs it to `dist`;
- `server:prod` - Runs the compiled backend JS code in `dist` using node;

<br>

- `dev` - Runs both front and backend in dev mode;
- `build` - Builds both front and backend and outputs to `dist`;
- `start` - Builds both front and backend and runs the server in production mode.

<br>

## Build your grammar
Create a `.ne` file using a grammar based on [Backus-Naur Form](http://hardmath123.github.io/earley.html).  


> Add `@preprocessor typescript` at the top of the grammar to compile to TypeScript.  

<br>

Use the `npx nearleyc <grammar_file>.ne -o <path>/<output_file>.ts` command to generate a Typescript file.