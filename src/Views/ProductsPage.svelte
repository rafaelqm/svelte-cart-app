<script>
  import ContentBox from "../Components/ContentBox.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function forward(event) {
    dispatch("addCart", event.detail);
  }
  function clearCart() {
    dispatch("clearCart");
  }
  export let products;
  export let cart_items_count;
</script>

<ContentBox
  on:addCart={forward}
  on:clearCart={clearCart}
  {products}
  {cart_items_count} />
