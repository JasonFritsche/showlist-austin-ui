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
<ul class="list">
  <li class="list__item">Sorry, couldn't find any shows for this month...</li>
</ul>
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
    flex-wrap: wrap;
    align-items: center;
    height: 90vh;
    overflow: hidden;
    overflow-y: scroll;
    max-width: 99vw;
  }
  .list__item {
    width: 100%;
    padding: 1rem;
    border-left: 6px solid var(--app-contrast-secondary);
    border-right: 6px solid var(--app-contrast-secondary);
    border-bottom: 6px solid var(--app-contrast-secondary);
  }

  li.list__item:focus {
    background-color: var(--app-tertiary);
    outline: none;
  }

  .list__item:first-child {
    border-top: 6px solid var(--app-contrast-secondary);
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }

  .list__item:last-child {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  @media(max-width: 622px) {
    .list {width: 100%; padding-right: 0;}
  }

  @media (min-width: 623px) and (max-width: 991px) {
    .list {width: 100%; padding-right: 1rem;}
  }

  @media (min-width: 992px) {
    .list {width: 50vw;}
  }
</style>
