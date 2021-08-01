const Previous = () => {
  const name = "Gannon";
  return (
    <div className="previous">
      <h1 className="picture-title">Previous Mystery</h1>
      <div className="previous-mystery">
        <p> {name}'s choice : Bleachers Baseball - Batting Cage</p>

        <a href="https://www.thefloodgate.co.uk"> 
        <img
          className="previous-picture"
          src="https://i.imgur.com/mnCwWtw.jpeg"
        />
                 </a>
      </div>
    </div>
  );
};

export default Previous;
