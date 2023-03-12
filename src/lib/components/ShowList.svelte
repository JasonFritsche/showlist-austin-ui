<script>
  import { onMount } from "svelte";
  import ShowListItem from "./ShowListItem.svelte";

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

<div>
  <ul class="list">
    {#each selectedDateShowData as show}
      <li class="list__item"><ShowListItem {show} /></li>
    {/each}
  </ul>
</div>

<style>
  .list {
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }
  .list__item {
    width: 100%;
    padding: 1rem;
    border: 1px solid #c9c8c3;
    border-radius: 1rem;
  }
</style>
