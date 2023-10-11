import './App.css'
import { useState } from 'react'
import { useEffect } from 'react';
import { getRandomfact } from './services/facts';
import { getCatUrl } from './services/cats-url';


function App() {
  const [fact, setFact]=useState();
  const [imgUrl, setImgUrl]=useState();

  useEffect(() =>{
    getRandomfact().then(newfact => setFact(newfact));
  }, [])

  useEffect(()=>{
    if (!fact) return;
    const firstWord = fact.split(' ',1).join();
    getCatUrl(firstWord).then(imgUrl => setImgUrl(imgUrl))
  }, [fact])

  const getNewFact = async () => {
    getRandomfact().then(newfact => setFact(newfact));
  }

  return (
    <>
      <h1>App de gatitos</h1>
      <button onClick={getNewFact}>New fact</button>
      <main>
        <section className='img-container'>
          {imgUrl && <img className='img-cat' src={imgUrl} alt='cat' />}
        </section>
        <section className='desc-container'>
          {fact && <p>{fact}</p>}
        </section>
      </main>
    </>
  )
}

export default App
