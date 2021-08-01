const Person = () => {
  const name = "Emelia";
  return (
    <div className="person">
      <h1> Mysteriousity of the month </h1>
     
      <p className="quote">
        {" "}
        {name} : "Well I’ve only been to a few, but probably either cinema or
        rage room as it’s where I met my boyfriend……🥰"
      </p>

      <img
        className="person-pic"
        src="https://lh5.googleusercontent.com/jTcvYFcC3pnLnwyykeB1IdwNhNZ2Ca7WwG4fg0TRcHy0Ap6B8FfSjHZVSbjEYRtHj2Cb6txHPxcUJqixQXj8=w1960-h10000-rw"
        alt="picture of Emelia"
      />

    </div>
  );
};

export default Person;
