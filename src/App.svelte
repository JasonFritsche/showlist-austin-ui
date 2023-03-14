<script>
  import Date from "./lib/components/Date.svelte";
  import ShowDetails from "./lib/components/ShowDetails.svelte";
  import ShowList from "./lib/components/ShowList.svelte";

  function handleDateChanged(event) {
    selectedDate = event.detail.selectedDate;
  }

  let selectedDate;
</script>

<header class="app-header">
  <h1 class="app-header__title">Shows In Austin</h1>
</header>

<main class="main">
  <Date on:dateChanged={handleDateChanged} />
  <div class="main__show-container">
    <div>
      <ShowList {selectedDate} />
    </div>
    <div>
      <ShowDetails />
    </div>
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
    grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  }
  .main__show-container {
    display: grid;
    align-items: start;
    grid-template-columns: repeat(auto-fit, minmax(450px, auto));
  }

  @media (max-width: 1150px) {
    .main__show-container > div:nth-child(1) {
      order: 1;
    }
  }
</style>
