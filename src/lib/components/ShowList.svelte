<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { getShortIsoDate } from "../functions/date";
  import ShowListItem from "./ShowListItem.svelte";

  const dispatch = createEventDispatcher();

  export let selectedDate;
  let allShowData;
  let selectedDateShowData = [];
  let selectedShow;

  function handleSelectedShow(show) {
    selectedShow = show;
  }

  $: dispatch("selectedShowChanged", {
    selectedShow,
  });

  $: dispatch("allShowDataChanged", {
    allShowData,
  });

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
    selectedDateShowData = showDate?.shows ?? [];
  }

</script>
{#if !selectedDateShowData.length}
<div>
  <h2>No shows found for this date</h2>
</div>
{:else}
<ul class="list">
  {#each selectedDateShowData as show, i}
    <li
      tabindex="-1"
      class="list__item"
      on:click={() => handleSelectedShow(show)}
      on:keypress={() => handleSelectedShow(show)}
    >
      <ShowListItem {show} />
    </li>
  {/each}
</ul>
{/if}


<style>
  .list {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
    overflow-y: scroll;
    width: 100%;
    border: 1px solid var(--app-contrast-secondary);
  }
  .list__item {
    width: 100%;
    padding: 1rem;
    margin: 1rem 1rem 0 1rem;
    border: 1px solid var(--app-contrast-secondary);
    border-radius: 6px;
  }

  li.list__item:focus {
    background-color: var(--app-tertiary);
    outline: none;
  }

</style>
