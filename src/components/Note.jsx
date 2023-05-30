import React from "react";

function Note(props) {
  return (
    <div className="col-lg-3 col-md-4">
      <div className="note">
        <h1>{props.title}</h1>
        <hr />
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Note;
