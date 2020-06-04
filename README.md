**Excuses:** ___I apologize for the English used, my language is Spanish.___

# Processpy contribution to Grunt #

## Content ##

1. [Introduction.](#Introduction "Introduction")
2. [Dependencies.](#Dependencies "Dependencies")
3. [The process html.](#TheProcessHtml "The process html")

<span id="Introduction"></span>
## Introduction ##

This project is Processpy's contribution to Grunt. Processpy aims to automate repetitive processes or patterns, using the great Python programming language.

[Processpy project repository](https://github.com/andresg9108/processpy "Processpy project repository")

<span id="Dependencies"></span>
## Dependencies ##

- Python (https://www.python.org): Download Python and add it to the path of your operating system.
- Node.js (https://nodejs.org).

<span id="TheProcessHtml"></span>
## The process html ##

This command will allow you to create HTML files from others files.

We will start by creating a folder called "example" in the path you want for this example project. Then we will execute the following command using the console of your operating system and standing in the "example" folder, this creates a "package.json" file asking you for information such as the name of the project, etc.

***npm init***

We will also add the following dependencies:

- ***npm i grunt -g***
- ***npm i grunt --save-dev***
- ***npm i matchdep --save-dev***
- ***npm i processpy --save-dev***
- ***npm i grunt-contrib-watch --save-dev***
- ***npm i grunt-contrib-processpy --save-dev***

We must also create the file "Gruntfile.js" inside the folder "example", which will contain the following lines.

~~~
module.exports = function(grunt) {
	
    var aRoutePy = [
        './pages/*',
        './pageTemplates/*'
    ];

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

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
    grunt.loadNpmTasks('grunt-contrib-processpy');
};
~~~

We are now ready to run the following command:

***grunt process-html***

If all goes well, this command should create a couple of files and folders over the current folder (example). Additionally we must create the folder "pageTemplates" inside "example" and a file "index.html" inside "pageTemplates". With this we already have the entire structure which is explained below.

- "../pages": This folder contains the files that correspond to each page.
- "../pageTemplates": This folder contains the templates that each of the pages will use.
- "../web": This folder contains the production files.