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
## React Dev Tools

- Install extension React Developer Tools 

These give us extra features in the console so we can see things like the components and current state. 

Can be used for testing and debugging. 




