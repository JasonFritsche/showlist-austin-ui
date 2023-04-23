<script>
  import Icon from "./Icon.svelte";

  export let selectedShow;
  export let allShowData;

  $: if (allShowData !== '') { 
     console.log('allShowData', allShowData)
   }; 
</script>

<div class="container flex">
  { #if !selectedShow && allShowData && allShowData?.length}
    <h2 class="container__venue__event flex">
      Select a show to see details
    </h2>
    {:else if !selectedShow && !allShowData?.length}
      <h2 class="container__venue__event flex">
        No shows found
      </h2>
  {/if}
  <div class="container__venue">
    {#if selectedShow?.description}
      <h2 class="container__venue__event flex">
        {#if selectedShow?.eventLink}
          <a
            class="anchor"
            href={selectedShow.eventLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {selectedShow?.description}
          </a>
        {:else}
          {selectedShow?.description}
        {/if}
      </h2>
    {/if}
    <h3 class="container__venue__title flex align-center">
      {#if selectedShow?.venue?.href}
        <Icon name="map-pin" strokeWidth="2" />
        <a
          class="anchor pad-left-4"
          href={selectedShow.venue.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {selectedShow?.venue?.title}
        </a>
      {:else if selectedShow?.venue?.title}
        <Icon name="map-pin" strokeWidth="2" />{selectedShow?.venue?.title}
      {/if}
    </h3>
    {#if selectedShow?.venue?.map}
      <h4 class="container__venue__map flex align-center">
        <Icon name="map" strokeWidth="2" />
        <a
          class="anchor pad-left-4"
          href={selectedShow.venue.map}
          target="_blank"
          rel="noopener noreferrer"
        >
          Directions
        </a>
      </h4>
    {/if}
  </div>
</div>

<style>
  .container {
    width: 100%;
    padding: 0 6px;
    height: 100%;
  }
  .container__venue {
    flex: 1;
    padding: 6px;
  }

  .container__venue__event {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .container__venue__title {
    font-size: 1.1rem;
    font-weight: 300;
  }

  .anchor {
    text-decoration: none;
    color: var(--text-primary);
    cursor: pointer;
  }

  .anchor:hover {
    color: var(--text-secondary);
  }
</style>
