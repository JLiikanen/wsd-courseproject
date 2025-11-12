<script>
  import { PUBLIC_API_URL } from "$env/static/public";
  let todos = $state([]);

  const fetchTodos = async () => {
    const response = await fetch(`${PUBLIC_API_URL}/api/todos`);
    const data = await response.json();
    todos = data;
  };

  $effect(() => {
    fetchTodos();
  });



</script>



<h1>Welcome!</h1>

<h2>Communities</h2>
<!--
<Footer/>
-->