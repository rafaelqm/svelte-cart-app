<script>
  import ContentBox from "../Components/ContentBox.svelte";
  import productsJson from "../product.js";
  import { onMount } from "svelte";

  let products;

  onMount(() => {
    products = productsJson;
  });
</script>

<ContentBox {products} />
