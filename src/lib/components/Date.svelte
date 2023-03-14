<script>
  import { createEventDispatcher } from "svelte";
  import { DatePicker } from "date-picker-svelte";

  let minDate = new Date();
  let selectedDate = minDate;

  const dispatch = createEventDispatcher();

  $: dispatch("dateChanged", {
    selectedDate,
  });
</script>

<div class="date-container">
  <div class="date-container__date-picker">
    <DatePicker bind:value={selectedDate} min={minDate} />
  </div>
</div>

<style>
  .date-container {
    display: flex;
    flex-direction: column;
  }
</style>
