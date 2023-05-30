import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-3 mb-5">
        <div className="row">
          {notes.map(noteItem => (
            <Note
              key={noteItem.key}
              title={noteItem.title}
              content={noteItem.content}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
