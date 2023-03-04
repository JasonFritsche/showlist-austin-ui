<script>
  import { onMount } from "svelte";
  import { DateInput } from 'date-picker-svelte'

  let showData;
  let minDate = new Date;

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
<DateInput bind:value={minDate} min={minDate} format="MM dd yyyy"/>
