<script>
  export let show;
</script>

<a class="item" href={show.eventLink} target="_blank" rel="noopener noreferrer">
  <h3 class="item__header">{show.description}</h3>

  {#if show.venue.title}
    <h4>{show.venue.title}</h4>
  {/if}
  {#if show.time}
    <h5>{show.time}</h5>
  {/if}
</a>

<style>
  .item {
    color: #c9c8c3;
  }
  .item__header {
    font-size: 0.9rem;
  }
</style>
