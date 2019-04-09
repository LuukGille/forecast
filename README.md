# Forecast Application

### This project is created for CodePamoja .
*created by Luuk Gille*

## Table of Contents


- [How to run the Project](#how-to-run-the-project)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm run build](#npm-run-build)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
- [Using CSS](#using-css)
- [Adding Components](#adding-components)
- [Fetching Data](#fetching-data)
- [Questions or Feedback?](#questions-or-feedback)

## How to run the Project

- first you need to clone the project [here](https://github.com/LuukGille/forecast)

- run `npm install` 

- run `npm start`

## How to run the Project for Production?

- run `npm run build`

## Folder Structure

```
App
├── README.md
├── src
│   ├── assets
│   │   └── favicon.ico
│   ├── components
│   │   ├── index.js
│   │   ├── navigation.scss
│   │   └── navigation.test.js
│   ├── images
│   │   └── intro.jpg
│   ├── index.html
│   └── app.js
├── test
│   ├── navigation.test.js
│   └── setup.js
├── webpack.config.js
├── node_modules
│   └── [...]
├── index.js
└── package.json
```

Out of the box, we get:

- Automatic transpilation and bundling (with webpack and babel)
- Hot code reloading


## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `.dist` folder.<br>
It correctly bundles the React and styling in production mode and optimizes the build for the best performance.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm test`

Will run all your test files.
You could run for example `run test navigation.test.js --watch` for a 
specifically page, this will now run the `navigation` test. 

## Using CSS

For this application we are using scss with BEM classes for nesting. For React you will style at the style file in your component folder `<style>`

```scss
<style>
	html, body {
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: Arial, Helvetica, sans-serif;
		color: #555555;
	}

	.navigation {
		display: flex;
		position: absolute;
		width: 100%;
		height: 75px;

		&__image {
			z-index: -1;
			height: 100vh;
			object-fit: cover;

			&--home {
				background-image: url("example1.jpg");
			}
			&--about {
				background-image: url("example2.jpg");
			}
		}
	}
</style>
```

## Adding Components

We recommend keeping React components in `./components` and they should look like:

### `./components/index.js`

```jsx

```

## Fetching Data

You can fetch data in `pages` components using `getInitialProps` like this:

### `./pages/home.js`

```jsx

```


## Questions or Feedback?

If you are having issues or feedback, please let me know. 
You can mail me anytime `lgille@competa.com`
