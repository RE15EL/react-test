import { useState, useEffect } from "react";
import { getCatUrl } from "../services/cats-url";

export function useCatImage({fact}) { //custom hook
    const [imageUrl, setImageUrl] = useState();
  
    useEffect(()=>{
      if (!fact) return;
      const firstWord = fact.split(' ',1).join();
      getCatUrl(firstWord).then(newImgUrl => setImageUrl(newImgUrl))
    }, [fact])
    return { imageUrl };
  }