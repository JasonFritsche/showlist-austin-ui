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

<h1>Calendar</h1>
<DatePicker bind:value={selectedDate} min={minDate} />
