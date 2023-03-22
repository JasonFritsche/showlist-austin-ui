<script>
  import { createEventDispatcher } from "svelte";
  import { DatePicker } from "date-picker-svelte";
  import { formatDate, getDateFromShortIsoDate } from "../functions/date";

  let minDate = new Date();
  let selectedDate = minDate;
  let maxDate;

  export let allShowData;

  const dispatch = createEventDispatcher();

  function findLastDateWithShows() {
    const lastDateWithShows = allShowData[allShowData.length - 1].isodate;
    maxDate = getDateFromShortIsoDate(lastDateWithShows);
  }

  $: dispatch("dateChanged", {
    selectedDate,
  });

  $: formattedDate = formatDate(selectedDate);

  $: if (allShowData) {
     findLastDateWithShows();
   }; 
</script>

<div class="date-container">
  {#if selectedDate && maxDate && allShowData.length}
    <h2 class="date-container__date">
      {formattedDate?.dayName}, {formattedDate?.date}
    </h2>
  {/if}
  <div class="date-container__date-picker">
    <DatePicker bind:value={selectedDate} min={minDate} max={maxDate} />
  </div>
</div>

<style>
  .date-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 6px 0 6px;
    padding-top: 1rem;
    gap: 1rem;
    max-width: 97vw;
  }

  .date-container__date {
    font-family: hind, sans-serif;
    font-size: 1.2rem;
    color: var(--text-primary);
  }

  .date-container__date-picker {
    display: grid;
    -webkit-box-shadow: -3px 0px 13px -7px rgba(163, 163, 163, 0.58);
    -moz-box-shadow: -3px 0px 13px -7px rgba(163, 163, 163, 0.58);
    box-shadow: -3px 0px 13px -7px rgba(163, 163, 163, 0.58);
  }
</style>
