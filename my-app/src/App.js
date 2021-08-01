import './CSS/App.css'
import './CSS/styles.css'
import Navbar from './components/basic/navbar';
import Home from './components/basic/home';

function App() {
  const title = 'Mystery Club'
  const link = "https://www.facebook.com/media/set/?set=a.10161735825100151&type=3"
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1 className="title"> {title} </h1>
        <a href={link} className="link">Facebook</a>
      <Home />
      </div>
    </div>
  );
}

export default App;
