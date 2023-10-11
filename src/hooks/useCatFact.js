import { useState, useEffect } from "react";
import { getRandomfact } from "../services/facts";

export const useCatFact = () => {
    const [fact, setFact] = useState();
   
    const refreshfact = () => {
      getRandomfact().then(newfact => setFact(newfact));
    }
  
    useEffect( refreshfact, [] )
  
    return { fact, refreshfact };
  }