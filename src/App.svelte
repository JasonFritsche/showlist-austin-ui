<script>
  import Calendar from "./lib/Calendar.svelte";
  import ShowList from "./lib/ShowList.svelte";

  function handleDateChanged(event) {
    selectedDate = event.detail.selectedDate;
  }

  let selectedDate;
</script>

<header class="app-header">
  <h1 class="app-header__title">Shows In Austin</h1>
</header>

<main>
  <Calendar on:dateChanged={handleDateChanged} />
  <ShowList {selectedDate} />
</main>

<style>
  .app-header__title {
    font-family: racing-sans-one, Arial;
    text-align: center;
    color: var(--text-primary);
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
