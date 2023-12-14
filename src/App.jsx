import { useState, useEffect, useRef } from "react";

import { FraseCard } from "./components/FraseCard";
import "./App.css";

function App() {
  const BASE_URL = "https://api.adviceslip.com/advice";

  // states of the data, and loading
  const [frase, setFrase] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // to cancel API requests
  const abortControllerRef = useRef(null);

  // Fetch API with async-await

  const fetchFrase = async () => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}`, {
        signal: abortControllerRef.current?.signal,
      });
      const data = await response.json();
      setFrase(data.slip);
    } catch (e) {
      // if the error is from a cancelled api request by the user, it will not show the error msj
      if (e.name === "AbortError") {
        console.log("Process aborted");
        return;
      }
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFrase();
  }, []);

  const handleClick = () => {
    fetchFrase();
  };

  if (error) {
    return (
      <div
        id="container"
        className="h-screen flex flex-col justify-center items-center bg-darkBlue"
      >
        <h2 className="text-neonGreen text-xs my-7 md:my-8 tracking-[3px] md:text-sm">
          Something went wrong...
        </h2>
        <p className="text-lightCyan text-2xl md:text-3xl md:leading-10">
          Please try again!
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        id="container"
        className="h-screen flex flex-col justify-center items-center bg-darkBlue"
      >
        <h2 className="text-neonGreen text-xs my-7 md:my-8 tracking-[3px] md:text-sm">
          Loading advice
        </h2>
        <p className="text-lightCyan text-2xl md:text-3xl md:leading-10">
          Loading...
        </p>
      </div>
    );
  } else {
    return (
      <>
        <div
          id="container"
          className="h-screen flex flex-col justify-center items-center bg-darkBlue"
        >
          <FraseCard frase={frase} handleClick={handleClick} />
        </div>
      </>
    );
  }
}

export default App;
