<script>
  import { onMount } from "svelte";

  let showData;

  onMount(async () => {
    await fetch(`https://raw.githubusercontent.com/JasonFritsche/showlist-austin-scraper/main/showdata.json`)
      .then(r => r.json())
      .then(data => {
        console.log('data',data)
        showData = data;
      });
  })

</script>

<h1>Calendar</h1>
