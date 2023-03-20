<script>
  export let show;
</script>

<div class="item">
  <h3 class="item__header">{show.description}</h3>

  {#if show.venue.title}
    <h4>{show.venue.title}</h4>
  {/if}
  {#if show.time}
    <h5>{show.time}</h5>
  {/if}
</div>

<style>
  .item {
    color: var(--app-contrast-primary);
  }
  .item:hover {
    cursor: pointer;
  }
  .item__header {
    font-size: 0.9rem;
  }
</style>
