<script>
  import productsJson from "./product.js";
  import Pagelayout from "./Views/PageLayout.svelte";
  import { onMount } from "svelte";

  let title = "";
  let price = "";
  let description = "";
  let products = [];
  let cartItems = [];

  function setTitle(event) {
    title = event.target.value;
  }

  function addToCart(event) {
    console.log("Add to Cart", event);
    const title = event.detail;
    cartItems = cartItems.concat({
      ...products.find(prod => prod.name === title)
    });
    console.log(cartItems);
  }

  function clearCart() {
    cartItems = [];
  }

  onMount(() => {
    products = productsJson;
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
  <link
    href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/lux/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-oOs/gFavzADqv3i5nCM+9CzXe3e5vXLXZ5LZ7PplpsWpTCufB7kqkTlC9FtZ5nJo"
    crossorigin="anonymous" />
</svelte:head>

<Pagelayout
  {cartItems}
  {products}
  on:clearCart={clearCart}
  on:addCart={addToCart} />
