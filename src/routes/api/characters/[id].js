/*index.js'in içinden dönen tüm API'dan bir karakteri çekmek için ise [id].js'i kullanabilirsiniz.
localhost:3000/api/characters/[id] linkini kullanarak API'ı kontrol edebilirsiniz. 
örnek olarak localhost:3000/api/characters/1 Rick Sanchez hakkındaki bütün bilgileri çeker.
*/

export async function get({ params }) {
	let id = params.id;
	const url = `https://rickandmortyapi.com/api/character/${id}`;
	const response = await fetch(url);
	const character = await response.json();
	console.log(character);
	return {
		status: 200,
		body: character
	};
}
