import React from "react";


export default function Heading({score, bestScore, cn}) {
  return (
    <div className="heading">
      <h1 className="title">2048</h1>
      <div className={cn("scores-container")}>
        <div className={cn("score-container")}>
          <p style={fontColor}>{score}</p>
        </div>
        <div className={cn("best-container")}>
          <p style={fontColor}>{bestScore}</p>
        </div>
      </div>
    </div>
  );
}


const fontColor = {
  margin: 10,
  color:'#776e65'
}