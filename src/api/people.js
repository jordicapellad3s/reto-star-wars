export async function getPeople(page) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    if (!response.ok) {
      throw new Error("Network Error");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getCharacter(id = 1) {
  const response = await fetch(`https://swapi.dev/api/people/${id}/`);
  const data = await response.json();
  return data;
}

export async function searchCharacter(name) {
  const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
  const data = await response.json();
  return data;
}

export class NetworkError extends Error {
  constructor() {
    super("Network Error");
  }
}
