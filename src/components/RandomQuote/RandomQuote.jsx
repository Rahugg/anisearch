import React, { useState, useEffect } from "react";
import Quote from "./Quote";
import "./RandomQuote.css";
const RandomQuote = () => {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null,
  });

  const Activate = async () => {
    setQuote(
      await fetch("https://animechan.vercel.app/api/random").then((response) =>
        response.json()
      )
    );
  };

  return (
    <div className="App">
      <Quote quote={quote} />
      <button onclick={Activate}>Generate new Quote</button>
    </div>
  );
};
export default RandomQuote;
