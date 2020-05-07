<script>
  import { moneyToFloat, floatToMoney } from "../helpers.js";
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
</div>
