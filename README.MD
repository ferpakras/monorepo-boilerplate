# Welcome to MonoRepo Boilerplate!

Hey, how u doin'?

This is a simple React Monorepo Boilerplate that will help you start your studies or even help you start your large and scalable React Project.

## How to run

Easy. Check it out:

1. First, **clone** this project
2. Open the project folder on terminal
3. And then run this complex below:

```sh
\$ yarn
```

Wait to complete, and run:

```sh
\$ yarn start:app1
```

WOW, your app is runnig with a component created and exported from your shared folder.

Done! Just open this folder on your favorite editor and go ahead.

## Getting Started

### Dev Dependencies (recommended)

- Yarn - 1.19+ (<https://yarnpkg.com/>)
- Node - 12 + (<https://nodejs.org/>)

### Lib & Framework

- React and React DOM - 17+ (<https://reactjs.org/>)
- Next - 10+ (<https://nextjs.org/>)

## Plugins on the road

To create this awesome boilerplate and make it easy to run, we've used some plugins to allow your components to work fine. Check these ones:

| Plugin                        | Package Name                  |
| ----------------------------- | ----------------------------- |
| babel core                    | @babel/core                   |
| babel preset-env              | @babel/preset-env             |
| babel jest                    | babel-jest                    |
| jest                          | jest                          |
| jest directory named resolved | jest-directory-named-resolver |
| jest                          | jest                          |
| dotenv                        | dotenv                        |
| next transpile modules        | next-transpile-modules        |

## Monorepo Structure

**NOTE: PAY ATTENTION OVER HERE**

✨This is absolutely weird and awesome✨

Follow the details about **where** you have to considering configure correctly your plugins dependencies.

First of all, keep in mind your monorepo is based in 3 partes, such as:

### /root structure

Your root folder and project configs file. Here is where you have your main package.json and this one is responsible for configure your workspaces. So make sure you have, mandatorily, these properties correctly configured. In this Monorepo Boilerplate case:

```
{
	'private': true,
	'workspaces':[
		'projects/*',
		'shared/*'
	]
}
```

Also, here is where you will configure your scripts and each project to run dev and build server, build, to test your files and check the coverage about these tests.

Make sure you have the babel presets correctly set on the /babel.config.json file.

---------------------------------------
### /projects\* structure

Here is where you will create your projects folder, for example, /app1, /app2, /app3...

Inside each one of these project folders, you have to config all of your dependencies and some monorepo configuration.

Take a look at 3 specific files:

#### next.config.js

Responsible to configure your next-transpile-module and tell him about the others repo it will be able to work with. If you have more than one shared folder, such as, components, store, utils, hooks, just add all of them into this array.

Look an example:

```
const  withTM = require("next-transpile-modules")([
"@monorepo/components",
"@monorepo/store",
"@monorepo/utils",
"@monorepo/hooks"
]);

module.exports = withTM({});
```

_NOTE: do not forget to use the same name you have set into your /shared/<folder_name>/ package.json file. Right?_

#### jest.config.js

Your test file configuration for this Monorepo Boilerplate. As we can see on the official documentation:

_Normally, Webpack looks for **index** file when the path passed to `require` points to a directory; which means there may have a lot of **index** files._

_This plugin makes it possible to control what file within directory will be treated as entry file._

Make sure your @REPO_NAME is correctly set here (line: 6).

#### babel-jest.upward.js

Here is the babel upward config. From the official doc, means:

_The different modes **define** different ways that **Babel** can process the "root" value to get the final project root. ... "**upward**" - Walks **upward** from the "root" directory, looking for a directory containing a **babel**._

And finally, configure your first project folder and just copy & paste this one to build another project if you will use the same structure.

---------------------------------------
### /shared\* structure

Almost the same as /projects structure, and at this moment here you won't need a next.config.js file, but you will need a .babelrc file with a rootMode configuration.

Here you will need **.babelrc** and **.babel-jest.upward.js** files.

Note that inside the /shared/components folder, the yarn workspaces didn't create a /node_modules folder, that's because all your dependencies can be used from root /node_modules folder.


---------------------------------------
That's it. Good luck and have some nice hour studying monorepo =)

Le me know if you have some cool thins to share about this structure, including improvements, Ci/CD on GitLab structure and more.

See ya!

| Collab                        | GitHub                  |
| ----------------------------- | ----------------------------- |
| Ferpa                    | /ferpakras                   |
| Cyrillo              | /githubdocyrillo             |
