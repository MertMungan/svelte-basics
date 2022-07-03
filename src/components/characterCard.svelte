<script>
    export let character;
</script>
<a href={`/character/${character.id}` }>
    <img src={character.image} alt={character.name}/>
    <h2>{character.id}. {character.name} </h2>
</a>
