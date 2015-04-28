[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

# grunt-react-templates

> [react templates](https://github.com/wix/react-templates) grunt task

This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-react-templates --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-react-templates');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.2](https://github.com/gruntjs/grunt-contrib-coffee/tree/grunt-0.3-stable).*


## React Templates task
_Run this task with the `grunt reactTemplates` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### defines
Type: `Object`
Default: null

Key-value object or required modules. By default generated the following code 

```js
define([
    'react/addons',
    'lodash'
], function (React, _) {
	...
	// Generated React.js code 
	...
});
```

### Usage Examples

```js
reactTemplates: {
  compile: {
    files: {
      'path/to/result.js': 'path/to/source.rt', // 1:1 compile
      'path/to/another.js': ['path/to/sources/*.rt', 'path/to/more/*.rt'] // compile and concat into single file
    }
  },
  glob_to_multiple: {
		expand: true,
		flatten: true,
		cwd: 'path/to',
		src: ['*.rt'],
		dest: 'path/to/dest/',
		ext: '.js'
	}
```

For more examples on how to use the `expand` API to manipulate the default dynamic path construction in the `glob_to_multiple` examples, see "[Building the files object dynamically](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically)" in the grunt wiki entry [Configuring Tasks](http://gruntjs.com/configuring-tasks).

## License
Copyright (c) 2015 Wix. Licensed under the MIT license.

[npm-image]: https://img.shields.io/npm/v/grunt-react-templates.svg?style=flat-square
[npm-url]: https://npmjs.org/package/grunt-react-templates
[travis-image]: https://img.shields.io/travis/wix/grunt-react-templates/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/wix/grunt-react-templates
[coveralls-image]: https://img.shields.io/coveralls/wix/grunt-react-templates/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/wix/grunt-react-templates?branch=master
[downloads-image]: http://img.shields.io/npm/dm/grunt-react-templates.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/grunt-react-templates