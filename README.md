**Excuses:** ___I apologize for the English used, my language is Spanish.___

# Processpy contribution to Grunt #

## Content ##

1. [Introduction.](#Introduction "Introduction")
2. [Dependencies.](#Dependencies "Dependencies")
3. [Getting started.](#GettingStarted "Getting started")
4. [The process html.](#TheProcessHtml "The process html")
5. [The process sql.](#TheProcessSql "The process sql")
6. [Replace text string.](#ReplaceTextString "Replace text string")

## Introduction <span name="Introduction"></span> ##

This project is Processpy's contribution to Grunt. Processpy aims to automate repetitive processes or patterns using the great Python programming language.

[Processpy project repository](https://github.com/andresg9108/processpy "Processpy project repository")

## Dependencies <span name="Dependencies"></span> ##

- Node.js (https://nodejs.org).
- Python (https://www.python.org): Download Python and add it to the path of your operating system.

## Getting started <span name="GettingStarted"></span> ##

We will start by executing the following command using the console of your operating system and on the folder that we want to use for our project, this creates a "package.json" file asking for information such as the name of the project, etc, etc.

~~~
npm init
~~~

Now we will modify the "package.json" file by changing all the content of the "scripts" as shown below.

**File: ./package.json**

```js
...
"scripts": {
  "start": "grunt",
  "html": "grunt process-html"
},
...
```

We will also add the following dependencies using the following commands on the same directory.

~~~
npm i grunt --save-dev
npm i matchdep --save-dev
npm i grunt-contrib-watch --save-dev
npm i grunt-contrib-processpy --save-dev
~~~

Or you can also use the following command which installs all these dependencies.

~~~
npm i grunt matchdep grunt-contrib-watch grunt-contrib-processpy --save-dev
~~~

We will create the file "Gruntfile.js" since this project uses Grunt to execute its processes. This file contains the following lines.

**File: ./Gruntfile.js**

```js
module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });
};
```

With this we have our project ready to work with "grunt-contrib-processpy".

## The process html <span name="TheProcessHtml"></span> ##

This command will allow you to create HTML files from others files.

We will start by modifying the "Gruntfile.js" file adding the following lines that create an array called "aRoutePy" that will contain the routes of the pages of our project.

```js
...
var aRoutePy = [
  './pages/*',
  './pageTemplates/*'
];
...
```

So our "Gruntfile.js" file would look like this.

**File: ./Gruntfile.js**

```js
module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var aRoutePy = [
    './pages/*',
    './pageTemplates/*'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });
};
```

We will also add a new task called "watch" that will contain the tasks that will be executed automatically as "task_py" and that includes the previously created arrangement, this will be done with the following lines.

```js
...
watch: {
  files: ['*.*'],
  options: {
    nospawn: true,
    livereload: {
      host: 'localhost',
      port: 35729
    }
  },
  task_py: {
    files: aRoutePy,
    tasks: ['process-html']
  }
}
...
```

And we will also add the default grunt task using the following line.

```js
...
grunt.registerTask('default', ['watch']);
...
```

So our "Gruntfile.js" file would look like this.

**File: ./Gruntfile.js**

```js
module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var aRoutePy = [
    './pages/*',
    './pageTemplates/*'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['*.*'],
      options: {
        nospawn: true,
        livereload: {
          host: 'localhost',
          port: 35729
        }
      },
      task_py: {
        files: aRoutePy,
        tasks: ['process-html']
      }
    }
  });

  grunt.registerTask('default', ['watch']);
};
```

Running the following command is equivalent to running processpy command #1. If you don't know what this command does, go to the following link that explains the html process of processpy very well.

~~~
npm run html
~~~

[Documentation of the html process](https://github.com/andresg9108/processpy/#TheProcessHtml "Documentation of the html process")

You can execute this command to update the production files manually, but one of the advantages of this project is that you can execute the following command so that every time a modification is detected in the routes that we put in the "aRoutePy" array, this executes the above command automatically.

~~~
npm start
~~~

It is important to remember that every time we add a new page within the "pages" directory we must also add this path in the "aRoutePy" array. In this way, if we want to add a new page called "page2" the array "aRoutePy" would look like this.

```js
...
var aRoutePy = [
  './pages/*',
  './pageTemplates/*',
  './pages/page2/*'
];
...
```

Also it is recommended to add the extension "Livereload" for "Google Chrome" or "Mozilla Firefox". This will tell these browsers to refresh the page the moment they detect a change, but always remember to run the "npm start" command and activate "Livereload" in your browser.

- [Extension for Google Chrome.](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=es "Extension for Google Chrome.")
- [Extension for Mozilla Firefox.](https://addons.mozilla.org/es/firefox/addon/livereload-web-extension "Extension for Mozilla Firefox.")

***THE DOCUMENTATION IS BEING REVIEWED FROM HERE***

## The process sql <span name="TheProcessSql"></span> ##

This command allows you to take all the ".sql" files in a folder and convert them into one file.

It is important to understand how the process sql of processpy  works to understand what is explained next.

[Documentation of the sql process](https://github.com/andresg9108/processpy#TheProcessSql "Documentation of the sql process")

We will start by modifying the file "Gruntfile.js" adding the following lines that create a task called "processpy" that contains a task called "sql", it receives an array containing json objects with the parameter "file" which is the final file that it contains all the lines of the other files and the "folder" which is the path of the ".sql" files.

~~~
...
processpy: {
  sql: [{
    file: './myfile.sql', 
    folder: './sql'
  }]
}
...
~~~

So our "Gruntfile.js" file would look like this.

**File: ./Gruntfile.js**

~~~
module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    processpy: {
      sql: [{
        file: './myfile.sql', 
        folder: './sql'
      }]
    }
  });
};
~~~

Running the following command is equivalent to running processpy command #2.

~~~
grunt process-sql
~~~

## Replace text string <span name="ReplaceTextString"></span> ##

This command will allow you to replace a text string in all files in a directory.

It is important to understand how the "replace text string" of processpy  works to understand what is explained next.

[Documentation of replace text string](https://github.com/andresg9108/processpy#ReplaceTextString "Documentation of replace text string")

We will start modifying the file "Gruntfile.js" adding the following lines that create a task called "processpy" that contains a task called "rts", it receives an array that contains json objects with the parameter "folder" which is the directory that contains the files that we want to modify, "search" which is the text string we want to modify and "replace" which is the new text string that will be added where the previous one was.

~~~
...
processpy: {
  rts: [{
    folder: './data',
    search: 'Old string',
    replace: 'New string'
  }]
}
...
~~~

So our "Gruntfile.js" file would look like this.

**File: ./Gruntfile.js**

~~~
module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    processpy: {
      rts: [{
        folder: './data',
        search: 'Old string',
        replace: 'New string'
      }]
    }
  });
};
~~~

Running the following command is equivalent to running processpy command #3.

~~~
grunt process-rts
~~~