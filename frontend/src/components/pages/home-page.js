import Navbar from "../basic/navbar";
import Previous from "../basic/previous-mystery";
import Letters from "../basic/logo-letters";
import Person from "../basic/person-interview";
import Flower from "../basic/flower-picture";

const HomePage = () => {
  return (
    <div className="home-page">
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
};

export default HomePage;
