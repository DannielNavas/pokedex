import { API_URL } from "../utils/constants";


export const getPokemonsApi = async (pokemon) => {
  try {
    const url = `${API_URL}pokemon?limit=20&offset=0`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};