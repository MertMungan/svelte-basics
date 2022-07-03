<script>
    export let todo; // props kabul ediyoruz diyoruz
    import { deleteTodo, toggleCompleted } from "../stores/todoStores.js";
</script>

<li>
    <input name="completed" type="checkbox" checked={todo.completed} onChange={() => toggleCompleted(todo.id)} />
    <span>{todo.text}</span>
    <button on:click={() => deleteTodo(todo.id)}>Sil</button>
</li>

