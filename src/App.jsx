import './App.css'
import { useState } from 'react'
import { useEffect } from 'react';
import { getRandomfact } from './services/facts';
import { useCatImage } from './hooks/useCatImage';

function App() {
  const [fact, setFact]=useState();
  const {imageUrl} = useCatImage({fact});

  useEffect(() =>{ //get random fact every time the component is rendered
    getRandomfact().then(newfact => setFact(newfact));
  }, [])  

  const getNewFact = async () => { //get random fact every time button is clicked
    getRandomfact().then(newfact => setFact(newfact));
  }

  return (
    <>
      <h1>App de gatitos</h1>
      <button onClick={getNewFact}>New fact</button>
      <main>
        <section className='img-container'>
          {imageUrl && <img className='img-cat' src={imageUrl} alt='cat' />}
        </section>
        <section className='desc-container'>
          {fact && <p>{fact}</p>}
        </section>
      </main>
    </>
  )
}

export default App
