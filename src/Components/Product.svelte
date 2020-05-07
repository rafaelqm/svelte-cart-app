<script>
  import { createEventDispatcher } from "svelte";
  import { moneyToFloat, floatToMoney } from "../helpers.js";
  import {
    Button,
    Col,
    Row,
    Card,
    CardBody,
    CardHeader,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle
  } from "sveltestrap";
  export let product = {};

  const dispatchEvent = createEventDispatcher();
  function addToCart() {
    dispatchEvent("addCart", product.name);
  }
</script>

<Card class="mb-3">
  <CardImg src={product.image} />
  <CardBody>
    <CardSubtitle>{product.name}</CardSubtitle>
    <CardText>
      {product.description}
      <h3>{floatToMoney(product.price)}</h3>
      {#if product.stock < 5}
        <strong>¡Hurry up!</strong>
      {/if}
    </CardText>
    <Button color="primary" outline on:click={addToCart}>Add to Cart</Button>
  </CardBody>
</Card>
