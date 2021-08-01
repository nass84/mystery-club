const Previous = () => {
  const name = "Gannon";
  return (
    <div className="home">
      <h1 className="picture-title">Previous Mystery</h1>
      <div className="previous-mystery">
        <img
          className="previous-picture"
          src="https://i.imgur.com/mnCwWtw.jpeg"
        />

        <p> {name}'s choice : Bleachers Baseball - Batting Cage</p>
        <a href="https://www.thefloodgate.co.uk"> Flootgate - Digbeth</a>
      </div>
    </div>
  );
};

export default Previous;
