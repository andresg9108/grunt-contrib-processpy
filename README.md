**Excuses:** ___I apologize for the English used, my language is Spanish.___

# Processpy contribution to Grunt #

## Content ##

1. [Introduction.](#Introduction "Introduction")
2. [Dependencies.](#Dependencies "Dependencies")
3. [Starting.](#Starting "Starting")
4. [The process html.](#TheProcessHtml "The process html")
5. [The process sql.](#TheProcessSql "The process sql")
6. [Replace text string.](#ReplaceTextString "Replace text string")

<span id="Introduction"></span>
## Introduction ##

This project is Processpy's contribution to Grunt. Processpy aims to automate repetitive processes or patterns using the great Python programming language.

[Processpy project repository](https://github.com/andresg9108/processpy "Processpy project repository")

<span id="Dependencies"></span>
## Dependencies ##

- Node.js (https://nodejs.org).
- Python (https://www.python.org): Download Python and add it to the path of your operating system.
- Execute "npm i grunt -g" on the console of your operating system.

<span id="Starting"></span>
## Starting ##

We will start by executing the following command using the console of your operating system and on the folder that we want to use for our project, this creates a "package.json" file asking for information such as the name of the project, etc, etc.

~~~
npm init
~~~

We will also add the following dependencies using the following commands on the same directory.

~~~
npm i grunt --save-dev
npm i matchdep --save-dev
npm i grunt-contrib-watch --save-dev
npm i grunt-contrib-processpy --save-dev
~~~

We must also create the file "Gruntfile.js" on the same directory that will contain the following lines.

**File: ./Gruntfile.js**

~~~
module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });
};
~~~

With this we have our project ready to work with "grunt-contrib-processpy".

<span id="TheProcessHtml"></span>
## The process html ##

This command will allow you to create HTML files from others files.

We will start by modifying the "Gruntfile.js" file adding the following lines that create an array called "aRoutePy" that will contain the routes of the pages of our project.

~~~
...
var aRoutePy = [
  './pages/*',
  './pageTemplates/*'
];
...
~~~

So our "Gruntfile.js" file would look like this.

**File: ./Gruntfile.js**

~~~
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
~~~

We will also add a new task called "watch" that will contain the tasks that will be executed automatically as "task_py" and that includes the previously created arrangement, this will be done with the following lines.

~~~
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
~~~

And finally we will add the default grunt task using the following line.

~~~
...
grunt.registerTask('default', ['watch']);
...
~~~

So our "Gruntfile.js" file would look like this.

**File: ./Gruntfile.js**

~~~
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
~~~

Running the following command is equivalent to running processpy command #1. If you don't know what this command does, go to the following link that explains the html process of processpy very well.

~~~
grunt process-html
~~~

[Documentation of the html process](https://github.com/andresg9108/processpy/#TheProcessHtml "Documentation of the html process")

You can execute this command to update the production files manually, but one of the advantages of this project is that you can execute the following command so that every time a modification is detected in the routes that we put in the "aRoutePy" array, this executes the above command automatically.

~~~
grunt
~~~

It is important to remember that every time we add a new page within the "pages" directory we must also add this path in the "aRoutePy" array. In this way, if we want to add a new page called "page2" the array "aRoutePy" would look like this.

~~~
...
var aRoutePy = [
  './pages/*',
  './pageTemplates/*',
  './pages/page2/*'
];
...
~~~

Also it is recommended to add the extension "Livereload" for "Google Chrome" or "Mozilla Firefox". This will tell these browsers to refresh the page the moment they detect a change, but always remember to run the "grunt" command and activate "Livereload" in your browser.

- [Extension for Google Chrome.](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=es "Extension for Google Chrome.")
- [Extension for Mozilla Firefox.](https://addons.mozilla.org/es/firefox/addon/livereload-web-extension "Extension for Mozilla Firefox.")

<span id="TheProcessSql"></span>
## The process sql ##

This command allows you to take all the ".sql" files in a folder and convert them into one file.

***THE DOCUMENTATION IS BEING REVISED FROM HERE***

We must also create the file "Gruntfile.js" inside the folder "example", which will contain the following lines.

~~~
module.exports = function(grunt) {
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

We are now ready to run the following command:

***grunt process-sql***

If all goes well, you will have a file named "myfile.sql" in the path "../example/", which will contain all the lines of all the files that are in the "sql" folder.

<span id="ReplaceTextString"></span>
## Replace text string ##