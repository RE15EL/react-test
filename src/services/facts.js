import { apiCatsDesc } from "../constants/constants";

export const getRandomfact = async () => {
    const res = await fetch(apiCatsDesc);
    const data = await res.json();
    return data.fact;
}