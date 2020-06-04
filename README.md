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

You can run the command "grunt process-html" to update the production files manually, but one of the advantages of this project is that you can run "grunt" to listen to the project and that every time changes are saved to the files development, run the command automatically and to tell the program to stop listening, press Ctrl + C.

Now we can do a couple of tests to see how it works (remember to listen to the project with the "grunt" command). Open the file "../example/pageTemplates/index.html" and add the following lines:

**File: ../example/pageTemplates/index.html**

~~~
<!DOCTYPE html>
<html lang="en">
  <head>
    <!--headHTML-->
  </head>
  <body>
    <!--bodyHTML-->
  </body>
</html>
~~~

As you can see we have common HTML tags except "<!-headHTML->" and "<!-bodyHTML->" which we will explain below. But first check the file "../example/web/index.html", if all goes well you will see the code copied from the template to the production file

Now the tags "<!-headHTML->" and "<!-bodyHTML->" tell the template that the tags are in the files "../example/pages/head.html" and "../example/pages/body.html" and to be added respectively. Knowing this, we will modify the following files:

**File: ../example/pages/head.html**

~~~
<title>My Page</title>
~~~

**File: ../example/pages/body.html**

~~~
<h1>Hello World!!!</h1>
~~~

If all goes well, the changes will be detected in the production file "../example/web/index.html".

With all of the above, we already know how this command works in general. Now we are going to create a new folder called "page2" in the directory "../example/pages/", for this we will stop "grunt" in the console using Ctrl+C and proceed to create the above mentioned folder and modify the file "../example/Gruntfile.js", adding a new line to the array "aRoutePy" like so:

~~~
...
var aRoutePy = [
    './pages/*',
    './pageTemplates/*',
    './pages/page2/*'
];
...
~~~

See how the line "'./pages/page2/*'" was added to the array "aRoutePy", what this does is tell the program that every time a change is made to the folder "page2" the command is executed "grunt process-html" and we must do this every time we create a new folder in the path" "../example/pages/"*.

If we run "grunt process-html" again, two new files will be automatically created inside the new folder that we will modify next, let's not forget to run the command "grunt" again so that we don't have to do it manually.

**File: ../example/pages/page2/head.html**

~~~
<title>This is my page number 2.</title>
<script>
	console.log('Hello World!!!');
</script>
~~~

**File: ../example/pages/page2/body.html**
~~~
<h1>Hello, this is my page number 2.</h1>
~~~

If everything goes well you can check the production path "../example/web/", where you can now find two pages with different contents.

Last but not least, we will create a new template. In the path "../example/pageTemplates/" we will add a new file called "temp2.html", which will be a new template and will contain the following tags:

File: ../example/pageTemplates/temp2.html

~~~
<!DOCTYPE html>
<html lang="en">
  <head>
    <!--headHTML-->
  </head>
  <body>
  	<div style="background-color: blue; color: white;">
  		<!--bodyHTML-->
  	</div>
  </body>
</html>
~~~

If you don't specify a template for each page you create, the program will default to being the template "../example/pageTemplates/index.html", but if you want the template "temp2.html" to be taken for page "page2" , the following should be added in the first line of the file "../example/pages/page2/head.html".

**File: ../example/pages/page2/head.html**

~~~
<!--Route: temp2.html-->
<title>This is my page number 2.</title>
<script>
	console.log('Hello World!!!');
</script>
~~~

See how the first line indicates "<!-Route: temp2.html->", which tells this page which template to use, which in this case is "temp2.html. If all goes well, we will have two pages using two different templates.