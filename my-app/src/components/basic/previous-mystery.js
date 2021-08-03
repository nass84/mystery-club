import battingCage from '../../images/mystery-pictures/battingcages.jpg'


const Previous = () => {
  const name = "Gannon";
  const link = "https://www.thefloodgate.co.uk/"
  const location ="Bleachers Baseball - Batting Cage"
  return (
    <div className="previous">
      <h1 className="picture-title">Previous Mystery</h1>
      <div className="previous-mystery">
      <h2>What was the Mystery?</h2> 
        <p className="quote"> {location} </p>
         <p> Location: <a className="previous-link" href={link}> Flood Gate - Digbeth </a></p>
          <p> Chosen by: {name} </p>
        <img
          className="previous-picture"
          src={battingCage}
        />
               
      </div>
    </div>
  );
};

export default Previous;
