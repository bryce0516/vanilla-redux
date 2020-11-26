import React, {useState,useEffect} from 'react'
import Heading from '../components/Heading'
import AboveGame from '../components/AboveGame'
import InGame from '../components/InGame'
import useLocalStorage from '../hooks/useLocalStoreage';
import '../css/index.css'
export default function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useLocalStorage('bestScore', 0)

  useEffect (() => {
    if(score > bestScore){
      setBestScore(score);
    }
  })
  return (
    <div className="container">
      <Heading score={score} bestScore={bestScore} />
      <AboveGame />
      <InGame setScore={setScore}/>
    </div>
  )
}
