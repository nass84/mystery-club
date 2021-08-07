import { useState } from "react";
import battingcages from "../../images/mystery-pictures/battingcages.jpg";
import rageroom from "../../images/mystery-pictures/rageroom.jpeg";
import tap from "../../images/mystery-pictures/tap.jpg";
import Letters from "../basic/logo-letters";
import Navbar from "../basic/navbar";
import golf from "../../images/mystery-pictures/golf.jpg";
import caravan from "../../images/mystery-pictures/caravan.jpg";
import Flower from "../basic/flower-picture";
import craft from "../../images/mystery-pictures/craft.jpg"
import space from "../../images/mystery-pictures/space.jpg"
import comic from "../../images/mystery-pictures/comic.jpg"
import pinball from "../../images/mystery-pictures/pinball.jpg"
import painting from "../../images/mystery-pictures/painting.jpg"
import weston from "../../images/mystery-pictures/weston.jpg"
import inflatable from "../../images/mystery-pictures/inflatable.jpg"
import scooter from "../../images/mystery-pictures/scooter.jpg"
import sail from "../../images/mystery-pictures/sail.jpg"
import flight from "../../images/mystery-pictures/flight.jpg"
import cat from "../../images/mystery-pictures/cat.jpg"
import strong from "../../images/mystery-pictures/strong.jpg"
import fetish from "../../images/mystery-pictures/fetish.jpg"
import crochet from "../../images/mystery-pictures/crochet.jpg"
import coffin from "../../images/mystery-pictures/coffin.jpg"
import joker from "../../images/mystery-pictures/joker.jpg"
import dog from "../../images/mystery-pictures/dog.jpg"
import horror from "../../images/mystery-pictures/horror.jpg"
import stevie from "../../images/mystery-pictures/stevie.jpg"
import poe from "../../images/mystery-pictures/poe.jpg"
import medieval from "../../images/mystery-pictures/medieval.jpg"
import curl from "../../images/mystery-pictures/curl.jpg"
import wrestling from "../../images/mystery-pictures/wrestling.jpg"
import tube from "../../images/mystery-pictures/tube.jpg"
import shuffle from "../../images/mystery-pictures/shuffle.jpg"
import circus from '../../images/mystery-pictures/circus.jpg'
import sew from "../../images/mystery-pictures/sew.jpg"
import kart from "../../images/mystery-pictures/kart.jpg"
import cirque from "../../images/mystery-pictures/CIRQUE.jpg"
import line from "../../images/mystery-pictures/line.png"
import chair from "../../images/mystery-pictures/chair.jpg"
import corona from "../../images/mystery-pictures/CORONA.png"
import zoom from "../../images/mystery-pictures/zoom.jpg"
import monkey from "../../images/mystery-pictures/monkey.jpg"
import voi from "../../images/mystery-pictures/voi.jpg"
import task from "../../images/mystery-pictures/task.jpg"
import art from "../../images/mystery-pictures/art.jpg"
import escape from "../../images/mystery-pictures/escape.png"
import friend from "../../images/mystery-pictures/friend.jpg"

const PreviousMysteries = () => {
  const [mystery, setMystery] = useState([
    {
      title: "Tap Dancing",
      location: "The Blue Orange Theatre",
      link: "https://www.list.co.uk/place/84420-the-blue-orange-theatre-birmingham/",
      name: "Becki",
      picture: tap,
      date: "February 2019",
      id: 1,
    },
    {
      title: "Mini Golf",
      location: "Mr Mulligans",
      link: "https://www.facebook.com/mrmulligansbirmingham/",
      name: "Az",
      picture: golf,
      date: "February 2019",
      id: 2,
    },
    {
      title: "Camping Show",
      location: "NEC",
      link: "https://www.thenec.co.uk/whats-on/caravan-camping-and-motorhome-show/",
      name: "Becki",
      picture: caravan,
      date: "February 2019",
      id: 3,
    },
    {
      title: "Craft Market",
      location: "MAC",
      link: "https://macbirmingham.co.uk/visit/shop",
      name: "Az",
      picture: craft,
      date: "March 2019",
      id: 4,
    },
    {
      title: "Space Museum",
      location: "National Space Centre",
      link: "https://spacecentre.co.uk/visit/",
      name: "Becki",
      picture: space,
      date: "March 2019",
      id: 5,
    },
    {
      title: "Comic Con",
      location: "NEC",
      link: "    https://www.facebook.com/BirminghamComicCon",
      name: "Az",
      picture: comic,
      date: "March 2019",
      id: 6,
    },
    {
      title: "Pinball",
      location: "Electric Circus",
      link: "https://www.facebook.com/electriccircusarcade/",
      name: "Becki",
      picture: pinball,
      date: "March 2019",
      id: 7,
    },
    {
      title: "Painting",
      location: "Art Night",
      link: "https://www.artnight.co.uk/birmingham/",
      name: "Az",
      picture: painting,
      date: "April 2019",
      id: 8,
    },
    {
      title: "Mystery Coach",
      location: "Weston Super Mare",
      link: "https://www.visit-westonsupermare.com/",
      name: "Becki",
      picture: weston,
      date: "April 2019",
      id: 9,
    },
    {
      title: "Bouncing",
      location: "Inflatable World",
      link: "https://www.inflatablezone.co.uk//",
      name: "Az",
      picture: inflatable,
      date: "April 2019",
      id: 10,
    },
    {
      title: "Scooters",
      location: "Creation Skate Park",
      link: "http://www.creationskatepark.co.uk/",
      name: "Becki",
      picture: scooter,
      date: "May 2019",
      id: 11,
    },
    {
      title: "Sailing",
      location: "Edgaston Reservoir",
      link: "https://midlandsailing.club/",
      name: "Max",
      picture: sail,
      date: "June 2019",
      id: 12,
    },
    {
      title: "Darts",
      location: "Flight Club",
      link: "https://flightclubdarts.com/birmingham/",
      name: "Raych",
      picture: flight,
      date: "July 2019",
      id: 13,
    },
    {
      title: "Cats",
      location: "Kitty Cafe",
      link: "https://www.kittycafe.co.uk/",
      name: "Az",
      picture: cat,
      date: "August 2019",
      id: 14,
    },
    {
      title: "Strong Person",
      location: "Kings Norton",
      link: "https://cleanandpressed.co.uk/",
      name: "Az",
      picture: strong,
      date: "August 2019",
      id: 15,
    },
    {
      title: "Fetish Picnic",
      location: "Birmingham Bazaar",
      link: "https://www.brumbazaar.co.uk/",
      name: "Becki who didn't attend",
      picture: fetish,
      date: "September 2019",
      id: 16,
    },
    {
      title: "Crochet",
      location: "Mindful Crafts",
      link: "https://www.mindfulcrafts.co.uk/",
      name: "Becki",
      picture: crochet,
      date: "September 2019",
      id: 17,
    },
    {
      title: "Coffin Museum",
      location: "The Coffin Works",
      link: "http://www.coffinworks.org/",
      name: "Agata",
      picture: coffin,
      date: "October 2019",
      id: 18,
    },
    {
      title: "Cinema - Joker",
      location: "Star City",
      link: "https://starcitycentre.co.uk/",
      name: "Cannon",
      picture: joker,
      date: "October 2019",
      id: 19,
    },
    {
      title: "Dogbeth Dining",
      location: "Digbeth Dining Club",
      link: "https://digbethdiningclub.com/",
      name: "Gemma",
      picture: dog,
      date: "October 2019",
      id: 20,
    },
    {
      title: "Scare Maze",
      location: "Walsall",
      link: "https://walsallscaremaze.co.uk/",
      name: "Becki",
      picture: horror,
      date: "October 2019",
      id: 21,
    },
    {
      title: "Edar Allan Poe ",
      location: "Don't go in the Cellar",
      link: "https://www.facebook.com/CellarTheatre/",
      name: "Gemma",
      picture: poe,
      date: "October 2019",
      id: 22,
    },
    {
      title: "Stevie Wonder",
      location: "The lounge",
      link: "https://www.facebook.com/theloungeatboldmere/",
      name: "Becki",
      picture: stevie,
      date: "November 2019",
      id: 23,
    },
    {
      title: "Medieval Fayre",
      location: "Ludlow",
      link: "https://www.ludlowmedievalchristmas.co.uk/",
      name: "Jon",
      picture: medieval,
      date: "November 2019",
      id: 23,
    },
    {
      title: "Curling",
      location: "Floodgate",
      link: "https://www.thefloodgate.co.uk/",
      name: "Max",
      picture: curl,
      date: "December 2019",
      id: 24,
    },
    {
      title: "Wrestling",
      location: "Cadbury Club",
      link: "https://www.facebook.com/KamikazeProUK/",
      name: "Max",
      picture: wrestling,
      date: "December 2019",
      id: 25,
    },

    {
      title: "Tubing",
      location: "Ackers",
      link: "https://www.ackers-adventure.co.uk/activities/tubing/",
      name: "Becki",
      picture: tube,
      date: "December 2019",
      id: 26,
    },
    {
      title: "Shuffleboard",
      location: "Lane 7",
      link: "https://lane7.co.uk/birmingham/",
      name: "Becki",
      picture: shuffle,
      date: "December 2019",
      id: 26,
    },
 
    {
      title: "Berlin Circus",
      location: "NEC",
      link: "https://www.circusberlin.co.uk/",
      name: "Becki",
      picture: circus,
      date: "December 2019",
      id: 28,
    },
    {
      title: "Sewing",
      location: "Sew Confident",
      link: "https://www.sewconfident.co.uk/birmingham-classes/",
      name: "Max",
      picture: sew,
      date: "January 2020",
      id: 29,
    },
    {
      title: "Go Karting",
      location: "Full Throttle Raceway",
      link: "https://www.fullthrottleraceway.co.uk/",
      name: "Becki",
      picture: kart,
      date: "January 2020",
      id: 30,
    },
    {
      title: "VR",
      location: "Cirque Du Soleil",
      link: "https://www.cirquedusoleil.com/",
      name: "Becki",
      picture: cirque,
      date: "February 2020",
      id: 31,
    },
    {
      title: "Line Dancing",
      location: "Nantwich",
      link: "https://www.nantwichtowncouncil.gov.uk/ac-fusion-dance/",
      name: "cannon",
      picture: line,
      date: "February 2020",
      id: 32,
    },
    {
      title: "Rage Room",
      location: "Grange Live",
      link: "https://secretbirmingham.com/birmingham-rage-room/",
      name: "Emelia",
      picture: rageroom,
      date: "February 2020",
      id: 33,
    },
    {
      title: "Chair Shopping",
      location: "NEC",
      link: "https://www.thenec.co.uk/whats-on/caravan-camping-and-motorhome-show/",
      name: "Becki",
      picture: chair,
      date: "February 2020",
      id: 34,
    },
    {
      title: "Monkeys",
      location: "Monkey Forest",
      link: "https://monkey-forest.com/",
      name: "Max",
      picture: monkey,
      date: "March 2020",
      id: 35,
    },
    {
      title: "PANDEMIC",
      location: "INSIDE",
      link: "https://www.thenec.co.uk/whats-on/caravan-camping-and-motorhome-show/",
      name: "Boris",
      picture: corona,
      date: " March 2020",
      id: 36,
    },
    {
      title: "James Cook",
      location: "BG Smackdown",
      link: "http://www.boardgamesmackdown.com/",
      name: "Becki",
      picture: zoom,
      date: "June 2020",
      id: 37,
    },
    {
      title: "Scooters",
      location: "Voi",
      link: "https://www.voiscooters.com/",
      name: "Becki",
      picture: voi,
      date: "September 2020",
      id: 38,
    },
    {
      title: "Taskmaster",
      location: "zoom",
      link: "https://taskmasterstore.com/products/taskmaster-board-game",
      name: "Becki",
      picture: task,
      date: "November 2020",
      id: 39,
    },
    {
      title: "Painting",
      location: "zoom",
      link: "https://www.youtube.com/watch?v=lr16SCym_6k",
      name: "Max",
      picture: art,
      date: "November 2020",
      id: 40,
    },
    {
      title: "Escape",
      location: "zoom",
      link: "https://livevideoescaperooms.com/uk/room-escape-southend/rudolphs-great-escape",
      name: "Gemma",
      picture: escape,
      date: "December 2020",
      id: 41,
    },
    {
      title: "Bracelets",
      location: "zoom",
      link: "https://www.amazon.co.uk/Embroidery-Pack%EF%BC%8CAUERVO-Threads%EF%BC%8CFriendship-Bracelets-Floss%EF%BC%8CCrafts/dp/B07R4RKT72/ref=sr_1_5?crid=S6IBJU7WIWIL&dchild=1&keywords=embroidery%2Bthread&qid=1614347798&sprefix=embroi%2Caps%2C169&sr=8-5&th=1",
      name: "Max",
      picture: friend,
      date: "March 2021",
      id: 42,
    },
    {
      title: "Batting Cages",
      location: "Bleachers Baseball",
      link: "https://www.thefloodgate.co.uk/",
      name: "Gannon",
      picture: battingcages,
      date: "July 2021",
      id: 43,
    },
    
 
  ]);

  return (
    <div>
      <Letters />
      <Navbar />
      <div className="previous-mysteries">
        {mystery.map((mystery) => (
          <div className="mystery-preview" key={mystery.id}>
              <h2 className="mystery-title">{mystery.title}
            
              </h2>
            
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
            <div className="previous-flower">
            <Flower/>
            </div>
          </div>
        
        ))}
      </div>
     
    </div>
  );
};

export default PreviousMysteries;
