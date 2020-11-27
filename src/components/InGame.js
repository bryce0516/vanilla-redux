import React, { useState,useRef } from 'react';
import times from 'lodash/times';
import useMoveTile from '../hooks/useMoveTile';
import { getInitialTileList } from '../util/tile';
import { MAX_POS } from '../constant';
import Tile from './Tile';

export default function InGame({ setScore }) {
  const [tileList, setTileList] = useState(getInitialTileList);
  const gameRef = useRef();
  useMoveTile({ tileList, setTileList, setScore, gameRef });


  return (
    <div className="game-container" >
      <div className="grid-container" onClick={() => window.onscroll=function(){}} ref={gameRef}>
        {times(MAX_POS, y => (
          <div key={y} className="grid-row">
            {times(MAX_POS, x => (
              <div key={y * MAX_POS + x} className="grid-cell"></div>
            ))}
          </div>
        ))}
      </div>

      <div className="tile-container">
        {tileList.map(item => (
          <Tile key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
