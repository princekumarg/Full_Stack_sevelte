<script>
   import Todo from "./lib/todo.svelte";
   const title="Todo";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main>
  <h1>{title}</h1>
  <form action="" method="">
    <input type="text" name="text" aria-label="Add to todo" placeholder="+ type to app"/>

  </form>
  <Todo/>
  <Todo/>
  <Todo/>
</main>

