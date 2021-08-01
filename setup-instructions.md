# mystery-club

Practice using React and SASS

  
# How to set up React and Sass

## Step 1



[Set up React Ap](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)

- npx create-react-app my-app

- cd my-app

- npm start

  

## Create File Structure

  

- components

	- pages

	- basic

- CSS

	- Sass

- images

  

## Create Components

  

*Components should start with a capital letter*

  
- Remove code from App.Js
 

```

import './CSS/App.css'

function App() {

const title = 'Mystery Club'

return (

<div className="App">

<div className="content">

<h1> {title} </h1>

</div>

</div>

);

}

 
export default App;

  
  

```

  

- Create new file in basic Components folder

navbar.js

*Make sure you have extension - React Standard Style code snippets*

- type sfc tab and a stateless functional component will appear

  
```

const Navbar = () => {

return (

<nav className="navbar">

<h1>Mystery Club</h1>

<div className="links">

<a href="/">Home</a>

<a href="/create">New Mystery</a>

</div>

</nav>

);

}

export default Navbar;

```

  

import Navbar to App.js

  ```

import Navbar from './components/basic/navbar';

```

add to App.js

  

```

<Navbar />

```

Create another component in basic component folder

```

const Home = () => {

return (

<div className="home">

<h2>Homepage</h2>

</div>

);

}

export default Home;

```

import it to App.Js, as above

  

# Set Up Sass

  

- Download Prepros https://prepros.io/downloads

  

## Set Up Project

  

- Create styles.scss in CSS Sass Folder

  

- Drag project folder to Prepros

  

- Click on styles.scss in prepros with process automatically ticked

  

- Click Process File

Notification saying successful should pop up.
In VS code a new file should appear called styles.css

  

- Link this to app.js

```

import './CSS/styles.css'

```

- Add practice code to scss file

  

```

.title{

color:red;

}

```  

## CSS File Structure

### @import

  

You can add Variables, Mixins and main styles into different files by importing them

  

- Create new files in the SASS folder

	- variables.scss

	- mixins.scss

- Bring up prepros and remove the auto compile tick box so a new css folder isnt created. Leave the tick in main scss file.

  

- Copy mixins and variables into the new files.

 

- import files into styles.scss folder
  

```

@import 'variables';

@import 'mixins';

```

  

create variable in variables folder

  

```

$hotPink: #e42491;

```

  

use in styles.scss file to check it is working

```
.picture-title{
  color: $hotPink;
}
```

**You're done!**