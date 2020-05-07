<script>
  import Header from "../Components/Header.svelte";
  import ProductsPage from "../Views/ProductsPage.svelte";
  import CheckoutPage from "../Views/CheckoutPage.svelte";
  import { createEventDispatcher } from "svelte";

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

<Header />
<ProductsPage
  on:addCart={forward}
  on:clearCart={clearCart}
  {products}
  cart_items_count={cartItems.length} />
<CheckoutPage {cartItems} />
