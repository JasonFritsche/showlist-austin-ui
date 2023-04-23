<script>
  import { createEventDispatcher } from "svelte";
  import { DatePicker } from "date-picker-svelte";
  import { getDateFromShortIsoDate } from "../functions/date";

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

  $: if (allShowData) {
     findLastDateWithShows();
   }; 
</script>

<div class="date-container">
  <div class="date-container__date-picker border-gradient border-gradient-pink-to-blue">
    <DatePicker bind:value={selectedDate} min={minDate} max={maxDate} />
  </div>
</div>

<style>
  .date-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 6px 0 6px;
    gap: 1rem;
  }

  .date-container__date-picker {
    display: grid;
    /* border: 6px solid var(--app-contrast-secondary);
    border-radius: 6px; */
    /* -webkit-box-shadow: -3px 0px 13px -7px rgba(163, 163, 163, 0.58);
    -moz-box-shadow: -3px 0px 13px -7px rgba(163, 163, 163, 0.58);
    box-shadow: -3px 0px 13px -7px rgba(163, 163, 163, 0.58); */
  }
</style>
