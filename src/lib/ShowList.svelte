<script>
  import { onMount } from "svelte";

  export let selectedDate;
  let allShowData;
  let selectedDateShowData = [];
  onMount(async () => {
    await fetch(
      `https://raw.githubusercontent.com/JasonFritsche/showlist-austin-scraper/main/showdata.json`
    )
      .then((res) => {
        if (res && res.status === 200) return res.json();
      })
      .then((data) => {
        if (data && data.allShowData) {
          allShowData = data.allShowData;
        }
      });
  });

  $: if (!!selectedDate && allShowData) {
    const shortIsoDate = getShortIsoDate(selectedDate);
    const showDate = allShowData.find(
      (showData) => showData.isodate === shortIsoDate
    );
    selectedDateShowData = showDate.shows;
  }

  function getShortIsoDate(date) {
    return (
      date.getFullYear().toString() +
      (1 === (date.getMonth() + 1).toString().length ? "0" : "") +
      (date.getMonth() + 1).toString() +
      (1 === date.getDate().toString().length ? "0" : "") +
      date.getDate().toString()
    );
  }
</script>

<p>selected date: {selectedDate}</p>
<ul>
  {#each selectedDateShowData as show}
    <li>{show.description}</li>
  {/each}
</ul>
