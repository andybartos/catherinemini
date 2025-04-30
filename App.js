import React from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import './style.css';

const data = {
  across: {
    1: { clue: "The hairiest member of our family.", answer: "WALLY", row: 0, col: 0 },
    3: { clue: "Andy has a love hate relationship with this part of our house.", answer: "POOL", row: 2, col: 0 },
    4: { clue: "Andy wants to build these using bricks in our backyard.", answer: "STAIR", row: 4, col: 0 },
    6: { clue: "Andy’s favourite cooking aide.", answer: "WEBER", row: 6, col: 0 },
    7: { clue: "Catherine’s car abbrev. Also a fun dance.", answer: "DISCO", row: 8, col: 0 },
  },
  down: {
    1: { clue: "Fave destination of our honeymoon, Lake ____", answer: "COMO", row: 0, col: 0 },
    2: { clue: "The mountain upon which we live", answer: "ANNAN", row: 0, col: 2 },
    5: { clue: "Catherine has too many of these.", answer: "SHOES", row: 0, col: 4 },
    8: { clue: "One of the first trees we bought.", answer: "OLIVE", row: 0, col: 6 },
    9: { clue: "One of our favourite wines \" _____ T\".", answer: "SUPER", row: 0, col: 8 },
  },
};

function App() {
  return (
    <div className="container">
      <h1>🎉 Happy Birthday Catherine 🎉</h1>
      <div className="crossword-wrapper">
        <Crossword data={data} />
      </div>
    </div>
  );
}

export default App;
