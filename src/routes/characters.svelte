<!--[id].svelte içine yazacağımız bütün bilgileri dinamik sayfa yüklenirken değil de
API'dan bütün karakterler döndüğünde hazırlamak istersek aşağıdaki script context="module" kullanırız.
-->

<!-- <script context="module">
    export async function load({params}) {
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
    return {props: {characters: loadedCharacters}};
    }
</script> -->

<script>
    /*[id].svelte içine yazacağımız bütün bilgileri dinamik sayfa yüklenirken değil de
    API'dan bütün karakterler döndüğünde hazırlamak istersek script'i kullandıktan sonra
    export let character kullanıp import {characters} from "../stores/rmStore.js"; satırını silmemiz gerekiyor.
    */
    //export let character; 
    import {characters} from "../stores/rmStore.js"; // {} named export olduğunu belirtiyor, bunu koymazsak hata verir.
    //console.log($characters); dolar işareti ile characters değişkeninin datasına erişebiliyoruz. koymazsak {set: f, update: f, subscribe: f } döner.
    import CharacterCard from "../components/characterCard.svelte";

    let searchTerm = "";
    let filteredCharacter = [];

    $: { // bu syntaxi kullanarak içinde referanslanmış değişkendeki değişikliklere "tepki" verebiliriz. react'teki useEffect gibi
        //console.log(searchTerm); searchTerm değişkeninin değeri değiştiğinde bu fonksiyon çalışır. 
        if(searchTerm){
            /* // API'dan döndüğü versiyonu, dolar işareti yok çünkü artık writable store kullanmıyoruz.
            filteredCharacter = characters.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));*/
            filteredCharacter = $characters.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
        } else{
            /* // API'dan döndüğü versiyonu, dolar işareti yok çünkü artık writable store kullanmıyoruz.
            filteredCharacter = [...characters]*/ 
            filteredCharacter = [...$characters] //characters değişkeninin datasına erişmek için yine $ koyuyoruz.
        }
    }
</script>

<svelte:head>
	<title>Karakterler</title>
</svelte:head>

<h1>
    Rick and Morty Karakterleri
</h1>

<input type="text" placeholder="Jeez Rick, who are we looking for?" bind:value={searchTerm}/> 
{#each filteredCharacter as character} 
<CharacterCard character = {character} /> <!-- characters değişkenindeki dataları CharacterCard componentine props olarak gönderiyoruz -->
{/each}

