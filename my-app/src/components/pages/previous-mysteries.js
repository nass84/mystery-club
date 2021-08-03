import { useState } from "react";
import battingcages from "../../images/mystery-pictures/battingcages.jpg";
import rageroom from "../../images/mystery-pictures/rageroom.jpeg";
import tap from "../../images/mystery-pictures/tap.jpg";
import Letters from "../basic/logo-letters";
import Navbar from "../basic/navbar";
import golf from "../../images/mystery-pictures/golf.jpg";
import caravan from "../../images/mystery-pictures/caravan.jpg";

const PreviousMysteries = () => {
  const [mystery, setMystery] = useState([
    {
      title: "Tap Dancing",
      location: "The Blue Orange Theatre",
      link: "https://www.list.co.uk/place/84420-the-blue-orange-theatre-birmingham/",
      name: "Becki",
      picture: tap,
      date: "Feb 2019",
      id: 1,
    },
    {
      title: "Mini Golf",
      location: "Mr Mulligans",
      link: "https://www.facebook.com/mrmulligansbirmingham/",
      name: "Az",
      picture: golf,
      date: "Feb 2019",
      id: 2,
    },
    {
      title: "Camping Show",
      location: "NEC",
      link: "https://www.thenec.co.uk/whats-on/caravan-camping-and-motorhome-show/",
      name: "Becki",
      picture: caravan,
      date: "Feb 2019",
      id: 2,
    },

    {
      title: "Batting Cages",
      location: "Bleachers Baseball",
      link: "https://www.thefloodgate.co.uk/",
      name: "Gannon",
      picture: battingcages,
      date: "July 2021",
      id: 99,
    },
    {
      title: "Rage Room",
      location: "Grange Live",
      link: "https://secretbirmingham.com/birmingham-rage-room/",
      name: "Emelia",
      picture: rageroom,
      date: "Feb 2020",
      id: 100,
    },
  ]);

  return (
    <div>
      <Letters />
      <Navbar />
      <div className="previous-mysteries">
        {mystery.map((mystery) => (
          <div className="mystery-preview" key={mystery.id}>
              <h2 className="mystery-title">{mystery.title}</h2>
          
            <div className="mystery-text">
              <p className="mystery-location">{mystery.location}</p>

              <p className="mystery-date"> Date: {mystery.date}</p>
              <p className="mystery-chosenby"> Chosen by {mystery.name}</p>
            </div>
            <a className="mystery-link" href={mystery.link} target="_blank">

            <img
              className="mystery-image"
              src={mystery.picture}
              alt={mystery.name}
            />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousMysteries;
