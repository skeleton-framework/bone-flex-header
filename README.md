# Bone Template

    The head bone is connected to the
    Nav bone
    The nav bone is connected to the
    ...

Use this as a starting point for making your own responsive, Skeleton aware UI component. Code once, reuse reuse reuse.

### Develop

#### Install Development Dependencies
`npm install --global gulp` 
This is optional, as npm can build your bone for you.

In the project root folder run `npm install` to install the local dependencies.

#### gulp:
* `gulp dev` - Creates a development build of your bone.
* `gulp watch` - Watches the source files and runs `gulp dev` on file change.
* `gulp dist` - Creates the production ready, minified and non-minified versions of your bone.

#### npm:
* `npm run dev` - Same as `gulp dev`.
* `npm run watch` - Same as `gulp watch`.
* `npm run dist` - Smae ass `gulp dist`.

The default `gulp` task will run all the css in the `src` dir through some `postcss` processors and compile it into `dev`.
It will also copy over `src/test.html`, which you can use as a lab/sandbox for

`gulp-connect` will then serve it at [localhost:3000](http://localhost:3000).

#### Turn on livereload

    RELOAD=true gulp

#### Serve it on a different port
    
    PORT=9001 gulp
    
#### Use livereolad and a different port

    RELOAD=true PORT=9001 gulp
    
`gulp-connect` will then serve your bone with `livereload` enabled, so go get a plugin for your browser if you want.

`livereload` will reload on changes to the contents `dev`, and `gulp` will rerun the build process on changes to `src`.

### Ship

Invoking `gulp dist` from the command line will trigger the production build process:

1. Preprocess your Bone files with `postcss`
2. Minify
3. Rename to whatever is listed in your `package.json` file as the name
4. Crap out mini and non mini versions into dist
