<script>
  import { createEventDispatcher } from "svelte";
  import { DatePicker } from "date-picker-svelte";
  import { formatDate } from "../functions/date";

  let minDate = new Date();
  let selectedDate = minDate;

  const dispatch = createEventDispatcher();

  $: dispatch("dateChanged", {
    selectedDate,
  });

  $: formattedDate = formatDate(selectedDate);
</script>

<div class="date-container">
  {#if selectedDate}
    <h2>{formattedDate?.dayName}, {formattedDate?.date}</h2>
  {/if}
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
