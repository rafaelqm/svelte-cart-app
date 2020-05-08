<script>
  import { moneyToFloat, floatToMoney } from "../helpers.js";
  import { Button } from "sveltestrap";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function clearCart() {
    dispatch("clearCart");
  }

  export let items;
  $: cartTotal = items.reduce((sum, curValue) => {
    return sum + curValue.price;
  }, 0);
</script>

<div class="col-md-4 order-md-2 mb-4">
  <h4 class="d-flex justify-content-between align-items-center mb-3">
    <span class="text-muted">Your cart</span>
    <span class="badge badge-secondary badge-pill">{items.length}</span>
  </h4>
  <ul class="list-group mb-3">
    {#if items.length === 0}
      <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 class="my-0">No items</h6>
          <small class="text-muted">-</small>
        </div>
      </li>
    {:else}
      {#each items as item}
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">{item.name}</h6>
            <small class="text-muted">{item.description}</small>
          </div>
          <span class="text-muted">{floatToMoney(item.price)}</span>
        </li>
      {/each}
      <li class="list-group-item d-flex justify-content-between">
        <span>Total</span>
        <strong>{floatToMoney(cartTotal)}</strong>
      </li>
    {/if}
  </ul>

  <Button type="button" color="danger" outline on:click={clearCart}>
    <svg
      class="bi bi-trash"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0
        01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001
        0V6z" />
      <path
        fill-rule="evenodd"
        d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0
        01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011
        1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882
        4H4.118zM2.5 3V2h11v1h-11z"
        clip-rule="evenodd" />
    </svg>
    Clear cart
  </Button>
</div>
