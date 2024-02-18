import React from 'react';
import ChildFunc from './ChildFunc';

const ParentFun = () => {

    function Parent(){
       alert("Parent Function Called"); 
    }
  return (
    <div className="flex justify-center items-center h-screen">
      <ChildFunc data = {Parent} />
    </div>
  )
}

export default ParentFun
