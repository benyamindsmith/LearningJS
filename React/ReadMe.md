<img src = "https://quintagroup.com/cms/js/js-image/react.js-logo.png/@@images/image.png"/>

<!--
# React
-->

The following are codes that I wrote while learning React with [FreeCodeCamp's Full React Course 2020](https://www.youtube.com/watch?v=4UZrsTqkcW4). This is one of the more popular Javascript Frameworks, so I thought I would give it a shot.

## 1. Command Line Basics

Some basic commands to use in command line:

1. `pwd` - full path name to current working directory

2. `ls` - list of directories

3. `mkdir` - create directory/folder

4. `cd` - change directory

5. `cd ..` - navigate to parent/one level up

6. `clear` - clear console

## 2. NPM Basics

[folder](https://github.com/benyamindsmith/LearningJS/tree/main/React/NPM_Basics)

### 1 . `npm init`

Creates `package.json` (manifest) file, list dependencies (see [here](https://github.com/benyamindsmith/LearningJS/blob/main/React/NPM_Basics/package.json) to see example of the `package.json` file we created)

### 2. `npm install <package name> --save`

Install package locally (default) and add to package.json (see here to see the [`node_modules`](https://github.com/benyamindsmith/LearningJS/tree/main/React/NPM_Basics/node_modules/bootstrap) folder created).

When we start to use `Create-React-App` this file will be much bigger. If you are sharing this on github, usually you will just add `package.json` only and all you need to run is npm install to get all the package dependencies.

### 3. `npm install <package name> -g`

Install package globally (access anywhere) [`sudo`]

### 4. `npm install <package name> --save-dev`

Use only in development;

## 3. Create-React-App

While there are many ways to set up a React application, the easiest way would be using the `create-react-app` tool- which is built by Facebook developers and allows us to focus on just building our apps, instead of spending time on tinkering with configuration and build tools.

For more information on it check out the repository [here](https://github.com/facebook/create-react-app).

To emphasise, <u><b>You do not need to use this to create your apps to work with React</b></u>. You can build the whole setup yourself, but in the long run this tool will save alot of time and sanity.

The learning adventure begins in this [tutorial folder]()
