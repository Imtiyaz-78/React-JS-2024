function Event() {
  let data = "Imtiyaz";

  function updateData() {
    alert("Imtiyaz is Front End Developer");
  }

  return (
    <div className="App">
      <h1>{data} </h1>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default Event;
