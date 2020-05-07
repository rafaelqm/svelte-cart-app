<script>
  import Header from "../Components/Header.svelte";
  import ProductsPage from "../Views/ProductsPage.svelte";
  import CheckoutPage from "../Views/CheckoutPage.svelte";
  import { createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  let products_visible = true;
  let checkout_visible = false;

  function changePage(current_page) {
    console.log("current_page", current_page);
    if (current_page.detail == "products") {
      products_visible = true;
      checkout_visible = false;
    } else {
      products_visible = false;
      checkout_visible = true;
    }
  }

  const dispatch = createEventDispatcher();

  function forward(event) {
    dispatch("addCart", event.detail);
  }
  function clearCart() {
    dispatch("clearCart");
  }

  export let cartItems;
  export let products;
</script>

<Header on:changePage={changePage} />
{#if products_visible}
  <div id="productsPage" transition:fly={{ y: 100, duration: 500 }}>
    <ProductsPage
      on:addCart={forward}
      on:clearCart={clearCart}
      on:changePage={changePage}
      {products}
      cart_items_count={cartItems.length} />
  </div>
{/if}

{#if checkout_visible}
  <div id="checkoutPage" transition:fly={{ y: 100, duration: 500 }}>
    <CheckoutPage {cartItems} />
  </div>
{/if}
