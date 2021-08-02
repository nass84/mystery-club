import './CSS/css/styles.css'
import Navbar from './components/basic/navbar';
import Previous from './components/basic/previous-mystery';
import Letters from './components/basic/mystery-letters';
import Person from './components/basic/person';
import Flower from './components/basic/flower';

function App() {
  const title = 'Mystery Club'
  const link = "https://www.facebook.com/media/set/?set=a.10161735825100151&type=3"
  return (
    <div className="App">
      <Letters />
      <Navbar />
    
      <div className="content">
      
      <Flower />
      <Person />
      <Previous />
      <Flower />
      </div>
    </div>
  );
}

export default App;
