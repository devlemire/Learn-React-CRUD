# Learn-React-CRUD
Learn CRUD endpoint calls with React

# Setting up webpack
1. I highly recommend you copy the package.json and webpack.config.js files and put them in a "resource" folder on your desktop. They are setup to be put into any new project
-- We are going to modify the package.json and webpack.config.js files so they are connected to this project's current file structure
2. In your package.json we have the option to edit the name, description, and author keys (It isn't necessary) They are located on lines 2, 4, and 9
-- However the webpack.config.js file changes ARE necessary. This file tells webpack where to output bundle.js and the entry point for webpack.
3. In your webpack.config.js change line 3 to match the location of your reactApp.js file. The file location is based off of webpack.config.js' location. ( './public/app/reactApp.js' )
4. In your webpack.config.js change line 7 to match the location of your scripts folder. The file location is based off of webpack.config.js location. ( './public/script' )


# Setting up your react app
1 - Every react app, at the bare minimum needs, React and ReactDOM imported. On the very first two lines of code import them.
~~~~
import React from 'react';
import ReactDOM from 'react-dom';
~~~~
2 - We're now ready to create our App using var.
~~~~
var App = React.createClass({

})
~~~~
3 - React apps need a render method that returns the html that gets put on the page. Create a render method for our app
~~~~
var App = React.createClass({
  render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    )
  }
})
~~~~
4 - To initialize our React application you have to use ReactDOM with the render method.  
~~~~
ReactDOM.render(<App />, document.getElementById('app'));
~~~~
5 - Now the basics of our react app are ready to go. Setup a basic html file and include at least one div in the body with the id of 'app'. We have to use 'app' because our initialize render method is looking for a document with element id of 'app' You can also change this to whatever you like. In addition include a script tag with a src attribute equal to the directory of where webpack will send bundle.js
~~~~
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React CRUD</title>
  </head>
  <body>
    <div id='app'></div>
    <script src="./script/bundle.js"></script>
  </body>
</html>
~~~~
6 - Remember to run webpack to see any react changes or run `webpack -w` so webpack will re-run when you edit the reactApp.js file
7 - Live-server or open your index.html and you should see Hello World on the page
