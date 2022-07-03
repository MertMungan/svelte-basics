<!--
[id].svelte her karakter için ayrı sayfa yapmak yerine tek bir dinamik sayfa yapmamızı sağlıyor, 
dinamikliği [] ile yapıyoruz.
-->
<!--
server side rendering yapacağız,
böylelikle sayfa yüklenmeden önce sayfanın kendisi karakterler hakkındaki bütün bilgilere sahip olacak
bunu da script context= "module" ile yapıyoruz.
-->

<script context="module">
export async function load({params}) {
            let id = params.id;
            const url = `https://rickandmortyapi.com/api/character/${id}`;
            const response = await fetch(url);
            const character = await response.json();
            console.log(character)
            return { props: { character }}
        }
    </script>

<script>
    export let character;
</script>

<img src={character.image} alt={character.name} style="height:300px;width:300px;">
<p>
    {character.name}
<br/>
    {character.origin.name}
</p>
