import { writable } from 'svelte/store';

export const characters = writable([]);

const fetchChars = async () => {
	const url = 'https://rickandmortyapi.com/api/character?limit=20';
	const response = await fetch(url);
	const data = await response.json();
	const loadedCharacters = data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://rickandmortyapi.com/api/character/avatar/${index + 1}.jpeg`
		};
	});
	characters.set(loadedCharacters); // set() methodu ile store'a veri eklendi */
};

fetchChars();
