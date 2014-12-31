[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

# grunt-react-templates

> [react templates](https://github.com/wix/react-templates) grunt task

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

### Installation
```shell
npm install grunt-react-templates --save-dev
```
### Usage

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-react-templates');
```

You can alias it to rt

```js
grunt.registerTask('rt', ['react-templates']);
```

### Configuration
In your project's Gruntfile, add a section named `reactTemplates` to the data object passed into `grunt.initConfig()`. The options (and defaults) are:

```js
grunt.initConfig({
  reactTemplates: {
    src: ['**/*.rt']
  }
})
```

### Options

#### src
Type: `Array`
Default value: `['**/*.rt']`

Glob pattern for files to be processed.

## License
Copyright (c) 2014 Wix. Licensed under the MIT license.

[npm-image]: https://img.shields.io/npm/v/grunt-react-templates.svg?style=flat-square
[npm-url]: https://npmjs.org/package/grunt-react-templates
[travis-image]: https://img.shields.io/travis/wix/grunt-react-templates/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/wix/grunt-react-templates
[coveralls-image]: https://img.shields.io/coveralls/wix/grunt-react-templates/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/wix/grunt-react-templates?branch=master
[downloads-image]: http://img.shields.io/npm/dm/grunt-react-templates.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/grunt-react-templates