<script>
  import Date from "./lib/components/Date.svelte";
  import ShowDetails from "./lib/components/ShowDetails.svelte";
  import ShowList from "./lib/components/ShowList.svelte";
  import { formatDate } from "./lib/functions/date";

  function handleDateChanged(event) {
    selectedDate = event.detail.selectedDate;
  }

  function handleselectedShowChanged(event) {
    selectedShow = event.detail.selectedShow;
  }

  function handleAllShowDataChanged(event) {
    allShowData = event.detail.allShowData;
  }

  let selectedDate;
  let selectedShow;
  let allShowData;

  $: formattedDate = formatDate(selectedDate);
</script>

<header class="app-header">
  <h1 class="app-header__title">Shows In Austin</h1>
  {#if selectedDate && allShowData?.length}
  <h2 class="app-header__date">
    {formattedDate?.dayName}, {formattedDate?.date}
  </h2>
{/if}
</header>

<main class="main">
  <Date on:dateChanged={handleDateChanged} {allShowData} />
  <div class="main__show-container">
    <div class="main__show-container__showlist-wrap pad-left-4">
      <ShowList
        {selectedDate}
        on:selectedShowChanged={handleselectedShowChanged}
        on:allShowDataChanged={handleAllShowDataChanged}
      />
    </div>
      <ShowDetails {selectedShow} {allShowData}  />
  </div>
</main>

<style>
  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .app-header__title {
    font-size: 4rem;
    font-family: racing-sans-one, Arial;
    text-align: center;
    color: var(--text-primary);
  }
  .app-header__date {
    font-family: hind, sans-serif;
    font-size: 1.2rem;
    color: var(--text-primary);
  }
  .main {
   display: flex;
    gap: 1rem;
    flex: 1;
    overflow: hidden
  }

  .main__show-container {
    flex: 1;
  }

  .main__show-container__showlist-wrap {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 1rem 1rem 0;
  }
  
  @media (max-width: 991px) {
    .main {
      overflow: auto;
      gap: 2rem;
      flex-direction: column;
      flex: 1;
    }
    .app-header {
      flex-direction: column;
      gap: 1rem;
    }
  }

  @media (min-width: 992px) {
    .main {
      overflow: hidden; 
      flex-direction: row;
    }
  }

  @media (max-width: 1200px) {
    .main__show-container > div:nth-child(1) {
      order: 1;
    }
    .main__show-container {
      display: grid;
      align-items: start;
      grid-template-rows: auto;
      gap: 10px;
    }
  }

  @media (min-width: 1199px) {
    .main__show-container {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
  }
</style>
