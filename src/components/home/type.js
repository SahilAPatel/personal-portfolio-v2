import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "developing code",
          "playing videogames",
          "drinking coffee",
          "reading a book",
          "playing basketball",
          "doing leetcode",
          "listening to a podcast",
          "doing homework",
          "thinking about sushi",
          "listening to music",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
