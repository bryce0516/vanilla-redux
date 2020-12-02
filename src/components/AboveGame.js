import React from "react";

export default function AboveGame({cn}) {

  return (
    <div className={cn("above-game")}>
      <p className={cn("game-intro")}>
        Join the tiles, get to <strong>2048!</strong>
      </p>
      <a className={cn("restart-button")} href="/Game">
        New Game
      </a>
    </div>
  );
}
