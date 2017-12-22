# Skeleton Project

## Overview

Skeleton project used to test concepts / ideas.  MVC folder structure.

## What's included?

This project includes:
* [Express](https://expressjs.com), used as the base framework
* [ejs](http://ejs.co/), a view engine which uses javascript
* [Mongoose](http://mongoosejs.com/), a MongoDB ODM
* [SocketIO](https://socket.io), for websockets

## Quick Start

Database connection details can be configured in `app/config/database.js` however no database is required.

### Front end playground

In `app/views/layout.ejs` you can add your `</style>` and `</script>`s.  

[jQuery](https://jquery.com), [Bootstrap](https://v4-alpha.getbootstrap.com) and [FontAwesome](http://fontawesome.io) CDN links as well as [SocketIO](https://socket.io/docs/client-api/) have already been included and you may remove them if you wish to not use them.

`app/views/index.ejs` Comes with some sample page content to quickly test styling and such.  

If you wish to add more pages, copy and paste `exports.testPage` from `app/controllers/PagesController.js` and change `testPage` as well as `index`.  

`'index'` refers to the name of the file inside `app/views/` which will be a file that you need to create.  Anything you write in there will be inserted into the `<body></body>` tags so you will not need to re-include all your stylesheets etc.  

Afterwards go into `app/config/routes.js` and insert a new route like so: `app.get('/yourUrl', PagesController.testPage);` (Change `testPage` for that shiny new function you created in the `PagesController`.

Once `layout.ejs` and `index.ejs` have been edited to your liking, simply run `npm install && node app`.  [Nodemon](https://nodemon.io) is recommended.

### WebSockets playground

Everything is setup [OOTB](http://lmgtfy.com/?q=Out+of+the+box) for a single page web app with SocketIO already hooked up.  Write your backend code in `app/controllers/SocketController.js` and client code in `public/js/script.js`

## TODO

* Consider using parceljs/gulp/webpack
* Write sample content for index.ejs
