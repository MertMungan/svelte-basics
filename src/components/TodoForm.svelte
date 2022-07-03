<script>
    let todo = '';
    import {addTodo} from "../stores/todoStores.js";


    const handleSubmit = () => {
        addTodo(todo);
        todo = '';
        console.log("Gönderiliyor");
    }
</script>

<form on:submit|preventDefault={handleSubmit}> <!--herhangi bir event handlerın yanına | koyarak event modifier ekleyebiliyoruz -->
    <div>
    <labeL for="todo"></labeL>
    <input type="text" name="todo" placeholder="Ne yapmak istiyorsun?" bind:value={todo}/> <!--hem todo input'u, hem input todo'yu güncelliyor-->
    <button type="submit" class="">Gönder</button>
</form>