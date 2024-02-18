import React from "react";
import { useState } from "react";

const IsUserLogedIn = () => {
  const [loggedIn, SetloggedIn] = useState(1);

  // This not best way
  if (loggedIn) {
    return <h1>Welcome Imtiyaz</h1>;
  } else {
    return <h1>Welcome Mozakkir</h1>;
  }

  // Best Way For Condtion
  return (
    <>
      <div>
        <h1>Conditional Rendering</h1>
        {/* {loggedIn ? <h1>Welcome Imtiyuaz</h1> : <h1>Welcome Mozakkir</h1>} */}


        {/* For Multiple Conditioion means if , else if , else */}
        {/* {loggedIn == 1 ? (
          <h1>Welcome User 1</h1>
        ) : loggedIn == 2 ? (
          <h1>Welcome User 2</h1>
        ) : (
          <h1>Welcome User 3</h1>
        )} */}
      </div>
    </>
  );
};

export default IsUserLogedIn;
