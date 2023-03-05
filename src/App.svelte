<script>
  import Calendar from "./lib/Calendar.svelte";
  import ShowList from "./lib/ShowList.svelte";

  function handleDateChanged(event) {
    console.log("event", event);
    selectedDate = event.detail.selectedDate;
  }

  let selectedDate;
</script>

<header>Shows In Austin</header>

<main>
  <div>
    <Calendar on:dateChanged={handleDateChanged} />
  </div>
  <div>
    <ShowList {selectedDate} />
  </div>
</main>

<style>
  main {
    display: flex;
  }
</style>
