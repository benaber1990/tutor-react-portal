import React, { useState } from "react";

function UploadYourWork() {
  const [submit, setSubmit] = useState(false);

  function submitWorkHandler() {
    setSubmit((prevState) => !prevState);
  }

  return (
    <div className="UploadWorkCard">
      <p>Hello World</p>
      <p>Upload Your Work Here</p>
      <button onClick={submitWorkHandler}>Upload Here</button>
      {submit ? <p>True</p> : null}
    </div>
  );
}

export default UploadYourWork;
