import React, { useState } from "react";
import "./styles.css";

const AddSub = () => {
  const [myNum, setMyNum] = useState(0);

  return (
    <>
      <div className="center_div">
        <h1 className="abc">AddSubtractor</h1>
        <p>{myNum}</p>
        <div class="button2" onMouseEnter={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onMouseEnter={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default AddSub;
