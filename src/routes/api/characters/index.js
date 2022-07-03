/*sveltekit endpoint çalışma mantığı.
buradaki fonksiyon bütün karakterleri çekiyor.
localhost:3000/api/characters linkini kullanarak API'ı kontrol edebilirsiniz.
bu API'daki spesifik bir karakteri çekmek için ise [id].js'i kullanabilirsiniz.
*/

export async function get() {
	const url = 'https://rickandmortyapi.com/api/character?limit=20';
	const response = await fetch(url);
	const data = await response.json();
	const characters = data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://rickandmortyapi.com/api/character/avatar/${index + 1}.jpeg`
		};
	});
	return {
		status: 200,
		body: characters
	};
}
