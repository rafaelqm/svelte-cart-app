<script>
  import Product from "./Product.svelte";
  import { Button } from "sveltestrap";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function forward(event) {
    dispatch("addCart", event.detail);
  }
  function clearCart() {
    dispatch("clearCart");
  }

  export let products = [];

  export let cart_items_count;

  // cart.subscribe(c => {
  //   cart_items_count = c;
  // });

  // const removeItem = () => cart.update(c => c - 1);
</script>

<div class="container">
  <div class="text-right">
    {#if cart_items_count > 0}
      <a href="#" type="button" class="btn btn-outline-primary">
        <svg
          class="bi bi-bag-fill"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 4h14v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm7-2.5A2.5 2.5 0 005.5
            4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z" />
        </svg>
        Cart
        <span class="badge badge-light">{cart_items_count}</span>
        <span class="sr-only">items</span>
      </a>
      <Button type="button" color="danger" outline on:click={clearCart}>
        <svg
          class="bi bi-trash"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5
            0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1
            0v6a.5.5 0 001 0V6z" />
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
    {:else}
      <a href="#" type="button" class="btn btn-outline-secondary">
        <svg
          class="bi bi-bag"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2
            0 002-2V4H1z"
            clip-rule="evenodd" />
          <path
            d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z" />
        </svg>
        Empty cart
        <span class="badge badge-secondary">0</span>
      </a>
    {/if}
  </div>
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 class="display-4">Products</h1>
    <p class="lead">Choose the products.</p>
  </div>
  <div class="card-deck mb-3 text-center">
    {#each products as product}
      <Product on:addCart={forward} {product} />
    {/each}
  </div>
</div>
