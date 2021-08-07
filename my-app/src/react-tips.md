## Inline Styling

```
<a href="www.twitter.com" style={
  color: "white",
  backgroundColor: "blue"
  borderRadius: "8px"
}> Twitter </a>
```

## Click Events

Can use onClick to invoke functions for us. 

We can pass in an argument by using an anonomous function. 

Event Parameter include an event object (e)
you can then use e.target

```
const Home = () => {

  const handleClick = (e) => {
    console.log('hello becki', e);
  }

  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('jon', e)}>Click me again</button>
    </div>
  );
}
 
export default Home;
```

## Using State

State is used when a value changes. When you have a value that changes you can set the inital state and use the useState hook to change the value. 

### To use useState

```
import { useState } from "react";

const Home = () => {
  // let name = 'mario';
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    // name = 'luigi';
    setName('luigi');
    setAge(30);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;
```

## useEffect

This runs code on every render unless you use dependencies. 

- Can be used to Fetch Data

### Dependency Array 

This tells React when to run the code

[] empty array will only run the function on first render

[ state ] if the name of the state changes it will run the function

```
import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  }, [name])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('luigi')}>change name</button>
    </div>
  );
}
 
export default Home;
```



## React Dev Tools

- Install extension React Developer Tools 

These give us extra features in the console so we can see things like the components and current state. 

Can be used for testing and debugging. 

## json Serve

Allows us to use fake Rest API to keep our data

- On root directory create new folder data
- Create new file called database.json
- Copy list information into folder
- Open new terminal + 
- npx json-server --watch data/database.json --port 8000



