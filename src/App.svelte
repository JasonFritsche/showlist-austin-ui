<script>
  import Date from "./lib/components/Date.svelte";
  import ShowDetails from "./lib/components/ShowDetails.svelte";
  import ShowList from "./lib/components/ShowList.svelte";

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
</script>

<header class="app-header">
  <h1 class="app-header__title">Shows In Austin</h1>
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
      <ShowDetails {selectedShow} />
  </div>
</main>

<style>
  .app-header__title {
    font-family: racing-sans-one, Arial;
    text-align: center;
    color: var(--text-primary);
  }
  .main {
    display: grid;
    align-items: start;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    padding-bottom: 1rem;
  }

  .main__show-container__showlist-wrap {
    display: flex;
    align-items: center;
    max-width: 97vw;
  }
  
  @media (max-width: 991px) {
    .main {
      overflow: auto;
      gap: 2rem;
    }
  }

  @media (min-width: 992px) {
    .main {overflow: hidden;}
  }

  @media (max-width: 1200px) {
    .main__show-container > div:nth-child(1) {
      order: 1;
    }
    .main__show-container {
      display: grid;
      align-items: start;
      grid-template-rows: auto;
    }
  }

  @media (min-width: 1199px) {
    .main__show-container {
      display: grid;
      align-items: start;
      grid-template-columns: 3fr 2fr;
    }
  }
</style>
