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
  <div class="date-container__left">
    <p class="date-container__left__formatted-date">
      <span class="date-container__left__formatted-date__day-name"
        >{formattedDate.dayName}</span
      >
      <span class="date-container__left__formatted-date__date"
        >{formattedDate.date}</span
      >
    </p>
  </div>
  <div class="date-container__right">
    <DatePicker bind:value={selectedDate} min={minDate} />
  </div>
</div>

<style>
  .date-container {
    display: flex;
    width: 100%;
  }
  .date-container div {
    flex: 1 1 auto;
  }
  .date-container__left__formatted-date {
    display: flex;
    flex-direction: column;
    width: fit-content;
  }
  .date-container__left__formatted-date__day-name {
    text-align: end;
  }
</style>
