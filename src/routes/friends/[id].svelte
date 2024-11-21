<script lang="ts">
    // SvelteKit provides `params` to access dynamic parts of the URL
    export let params;
  
    // `params.id` will hold the value from the URL (e.g., z6MkpGPeyE4C8o...)
    let friendId = params.id;
  
    // Simulate processing the friend ID (e.g., adding a friend)
    const addFriend = () => {
      console.log(`Adding friend with ID: ${friendId}`);
      // Here you can add code to call your backend or update the app state
    };
  
    // Automatically call the function when the component loads
    addFriend();
  </script>
  
  <h1>Adding Friend: {friendId}</h1>
  