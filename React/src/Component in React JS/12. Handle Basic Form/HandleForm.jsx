import { useState } from "react";

const HandleForm = () => {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [getTermAndCondi, setTermAndCondi] = useState(false);


  const getFormData = (e) => {
    console.log(name, getTermAndCondi, interest);
    e.preventDefault();
  };



  return (
    <div className="border-2 border-sky-500 w-80 flex justify-center mt-10  ">
      <form onSubmit={getFormData} >
        <h1 className="text-3xl text-green-600">Handle Form in React</h1> <br />
        <input
          className="border-2 border-sky-500"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        <select onChange={(e) => setInterest(e.target.value)} className="border-2 border-sky-500">
          <option selected>Select Language Options</option>
          <option>HTML</option>
          <option>CSS</option>
          <option>JavaScript</option>
          <option>React JS</option>
          <option>BootStrap</option>
          <option>Material UI</option>
          <option>Tailwind CSS UI</option>
          
        </select>
        <br />
        <br />

        <input type="checkbox" onChange={(e) => setTermAndCondi(e.target.checked)} />
        <span>Accept Terms and conditions</span>
        <br />
        <br />
        <button className="border-2 border-sky-500 bg-green-500 " type="submit">
          Submit
        </button>
        <button className="border-2 border-sky-500 ml-5 bg-green-500">Clear</button>
      </form>
    </div>
  );
};

export default HandleForm;
