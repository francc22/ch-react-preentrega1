import React, { useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Navbar from "./shared/navbar/Navbar";

function App() {
  const [message, setMessage] = useState<string>("");

  const sendProp = () => {
    setMessage("mensaje recibido del componente padre");
  };

  return (
    <>
      <Navbar />
      <div className="d-flex align-items-center m-5 justify-content-between column-gap-5">
        <div className="border p-5 border-danger">
          <p>Componente padre</p>
          <button className="btn btn-primary" onClick={sendProp}>
            Click aqui para enviar mensaje al componente hijo
          </button>
        </div>
        <Greeting message={message} />
      </div>
    </>
  );
}

export default App;
