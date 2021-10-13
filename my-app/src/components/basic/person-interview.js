import rageRoom from "../../images/mystery-pictures/rageroom.jpeg";

const Person = () => {
  const name = "Emelia";
  return (
    <div className="person">
      <h1> Member of the month </h1>
      <h2>
        {" "}
        How would you describe mystery club to someone who doesn't know about
        it?
      </h2>
      <p className="quote">
        {" "}
        {name} : "A club where someone picks a mystery adventure on a Sunday and
        we don’t find out until we get there. It’s ace! "
      </p>
      <img className="person-pic phone-picture" src={rageRoom} alt="Emelia" />
      <h2> What was your favourite mystery and why?</h2>
      <p className="quote">
        {" "}
        {name} : "Well I’ve only been to a few, but probably either cinema or
        rage room as it’s where I met my boyfriend……🥰"
      </p>
    </div>
  );
};

export default Person;
