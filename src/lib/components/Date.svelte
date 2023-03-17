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
    <h2 class="date-container__date">
      {formattedDate?.dayName}, {formattedDate?.date}
    </h2>
  {/if}
  <div class="date-container__date-picker">
    <DatePicker bind:value={selectedDate} min={minDate} />
  </div>
</div>

<style>
  .date-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin: 0 6px 0 6px;
    padding-top: 1rem;
    border: 1px solid var(--app-contrast-secondary);
    border-radius: 6px;
    gap: 1rem;
  }

  .date-container__date {
    font-family: hind, sans-serif;
    font-size: 1.2rem;
    color: var(--text-primary);
  }

  .date-container__date-picker {
    -webkit-box-shadow: -3px 0px 13px -7px rgba(163, 163, 163, 0.58);
    -moz-box-shadow: -3px 0px 13px -7px rgba(163, 163, 163, 0.58);
    box-shadow: -3px 0px 13px -7px rgba(163, 163, 163, 0.58);
  }
</style>
