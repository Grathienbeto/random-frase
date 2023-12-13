// import React, { useState, useEffect } from "react";

import { FraseCard } from "./components/FraseCard";
import "./App.css";

function App() {
  return (
    <div
      id="container"
      className="h-screen flex flex-col justify-center items-center bg-darkBlue"
    >
      <FraseCard />
    </div>
  );
}

export default App;
