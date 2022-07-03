<script>
    import TodoForm from '../components/TodoForm.svelte';
    import Todo from '../components/Todo.svelte';
    import {todos} from '../stores/todoStores.js';
</script>

<h1>
    Yapılacaklar
</h1>

<TodoForm />

{#each $todos as todo} <!--$ işaretiyle writable'ın içindeki dataya erişebiliyoruz-->
    <Todo todo={todo} index={todo.id} /> <!--componente props aktarma-->
{/each}