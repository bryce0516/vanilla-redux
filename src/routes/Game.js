import React, {useState,useEffect} from 'react'
import Heading from '../components/Heading'
import AboveGame from '../components/AboveGame'
import InGame from '../components/InGame'
import useLocalStorage from '../hooks/useLocalStoreage';
import classNames from 'classnames/bind'
import indexCss from '../css/index.css'



export default function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useLocalStorage('bestScore', 0)
  
  const cn = classNames.bind(indexCss)
  useEffect (() => {
    if(score > bestScore){
      setBestScore(score);
    }
  })
  return (
    <div className="container">
      <Heading score={score} bestScore={bestScore} cn={cn} />
      <AboveGame cn={cn}  />
      <InGame setScore={setScore} cn={cn} />
    </div>
  )
}
