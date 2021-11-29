import Navbar from "../basic/navbar";
import Previous from "../basic/previous-mystery";
import Letters from "../basic/logo-letters";
import Person from "../basic/person-interview";
import Flower from "../basic/flower-picture";

const HomePage = () => {
  async function handleClick(e) {
    e.preventDefault();

    // fetch json from api
    const response = await fetch("http://localhost:3004");
    const json = await response.json();
    console.log(json);
  }

  return (
    <div className="home-page">
      <Letters />
      <Navbar />
      <button onClick={handleClick}>Get Json</button>
      <div className="content">
        <Flower />
        <Person />
        <Previous />
        <Flower />
      </div>
    </div>
  );
};

export default HomePage;
