import previousmystery from '../../images/mystery-pictures/planet.jpg'
import previous from "../../images/mystery-pictures/previous.png"

const Previous = () => {
  const name = "Max";
  const link = "https://www.facebook.com/WonderDomePlanetariumUK/"
  const location ="Inflatable Planetarium"
  return (
    <div className="previous">
      <h1 className="picture-title">Previous Mystery</h1>
      <div className="previous-mystery">
      <h2>What was the Mystery?</h2> 
        <p className="mysteryname"> {location} </p>
         <p> <a className="previous-link" target="_blank" rel="noreferrer" href={link}> Click Here to find out more </a></p>
          <p> Chosen by: {name} </p>
        <img
          className="previous-picture"
          src={previousmystery}
          alt={location}
        />
               
      </div>
      <img
          className="previous-picture"
          src={previous}
          alt={location}
        />
    </div>
  );
};

export default Previous;
