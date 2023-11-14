import { API_URL } from "../utils/constants";


export const getPokemonsApi = async (endpointUrl) => {
  try {
    const url = `${API_URL}pokemon?limit=20&offset=0`;
    const response = await fetch(endpointUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};


export const getPokemonDetailsByUrlApi = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const getPokemonDetailsApi = async (id) => {
  try {
    const url = `${API_URL}pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
