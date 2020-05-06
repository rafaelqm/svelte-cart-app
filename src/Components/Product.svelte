<script>
  import { cart } from "../Store/store.js";
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

  const setCart = () => cart.update(total => total + 1);
</script>

<Card class="mb-3">
  <CardImg src={product.image} />
  <CardBody>
    <CardSubtitle>{product.name}</CardSubtitle>
    <CardText>
      {product.description}
      <h3>{product.price}</h3>
      {#if product.stock < 5}
        <strong>¡Hurry up!</strong>
      {/if}
    </CardText>
    <Button color="primary" outline on:click={setCart}>Add to cart</Button>
  </CardBody>
</Card>
