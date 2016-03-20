# CF-job-search

## Webpack instructions:

First, install dependencies with

    $ npm install

Next, install webpack and webpack-dev-server globally

    $ npm install -g webpack
    $ npm install -g webpack-dev-server

Then, build with

    $ webpack

You should now see a dist folder created in your project. This folder should contain two files: bundle.js and index.html.

Run dev-server using

    $ webpack-dev-server

Open your browser to localhost:8080. You will see the page you are working on. Any changes made to .js and .scss files will update immediately using webpack hot module replacement.

If you make a change to index.html, you will have to run `$ webpack` to build again.
