# Bones

A skeleton Node + Typescript back end server built with MVC and OOP principles in mind.

## Usage

### Serving

Make sure you have the prerequisites prior to running the back end

```sh
npm run serve-dev
```

or
```sh
npm run build
npm run serve
```

### Development Workflow

Inspect the `Config/routes.ts` file in order to get a jist of how to add your own routes.  HTTP Controllers are stored within `Controllers/Http/` where all controllers should be extending the `AppController` class.

Webpack and Laravel Mix is used to compile front end assets.  The `src/*` files are compiled into `Views/public/`.  Run `npm run watch` or `npm run production` to compile assets.

## Main Dependencies 

### Prerequisites:

You are required to have these installed for this project.  You can easily install these all by running the following command

```sh
npm i -g typescript ts-node
```

 - [Typescript](https://www.typescriptlang.org/)
 - [ts-node](https://www.npmjs.com/package/ts-node)

### The following are installed via `npm install`:

- [Express](https://expressjs.com/) (Web Framework)
- [EJS](http://ejs.co/) (Templating Engine)
- [Socket.IO](https://socket.io/)
