# Bone Template

__ The head bone is connected to the __
__ nav bone __
__ the nav bone is connected to the __
__ ... __

Use this as a jumping off point for making your own responsive, Skeleton aware
UI component. Code once, reuse reuse reuse.

## What do?

### Develop

    npm install
    gulp

Triggineg the default `gulp` task will cause gulp to run all the css in
the `src/` dir through some `postcss` processors and crap it out into `dev`.
It will also copy over `src/index.html`, whic you can use as a lab/sandbox for
your component.

Copying over some javascript is still on the todo list.

`gulp-connect` will then serve it at [localhost:3000](http://localhost:3000)
with `livereload` enabled, so go get a plugin for your browser if you want.

`livereload` will reload on changes to the contents `dev`, and `gulp` will rerun
the build process on changes to `src`.


### Ship

Invoking `gulp prod` from the command line will trigger the production build process:

1. Preprocess your Bone files with `postcss`
2. Minify
3. Rename to whatever is listed in your `package.json` file as the name
4. Crap out mini and non mini versions into dist

### Turn off livereload

    RELOAD=false gulp

### Serve it on a different port

    PORT=9001 gulp

This boilerplate should pull in the newest version of `normalize.css` and the
current stable relase of Skeleton.
