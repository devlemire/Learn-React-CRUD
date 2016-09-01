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
1 . Every react app, at the bare minimum needs, React and ReactDOM imported. On the very first two lines of code import them.
~~~~
import React from 'react';
import ReactDOM from 'react-dom';
~~~~
2 . We're now ready to create our App using var.
~~~~
var App = React.createClass({

})
~~~~
3 . React apps need a render method that return the html that gets put on the page. Create a render method for our app
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
