import { apiCatsImg } from "../constants/constants"


export const getCatUrl = async (firstWord) => {
    const res = await fetch(`${apiCatsImg}${firstWord}`)
    return res.url;
}