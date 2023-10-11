import './App.css'
import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';

function App() {
  const { fact, refreshfact }= useCatFact();
  const {imageUrl} = useCatImage({fact});    

  const getNewFact = async () => { //get random fact every time button is clicked
    refreshfact();
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
