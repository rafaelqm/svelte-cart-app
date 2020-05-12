<script>
  import { Button } from "sveltestrap";
  import Cart from "../Components/Cart.svelte";
  export let cartItems;
  export let customer;
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function clearCart() {
    dispatch("clearCart");
  }

  let result = null;
  let form_error = "";
  async function finishOrder() {
    form_error = "";
    if (customer.name == "" || customer.email == "") {
      form_error = "Fill your name and e-mail";
      return false;
    }

    const res = await fetch("https://httpbin.org/post", {
      method: "POST",
      body: JSON.stringify({
        customer,
        cartItems
      })
    });

    const json = await res.json();
    result = JSON.stringify(json);
    console.log("RESULT: ", result);
  }
</script>

<div class="container">
  <form
    action=""
    method="POST"
    target="_blank"
    novalidate
    on:submit|preventDefault={finishOrder}>
    <div class="row">
      <Cart on:clearCart={clearCart} items={cartItems} />
      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">Customer</h4>
        <div class="row" id="customerName">
          <div class="col-md-12 mb-3">
            <label for="firstName">
              Full name
              <span class="text-muted">(Required)</span>
            </label>

            <input
              type="text"
              class="form-control {customer.name == '' ? 'is-invalid' : ''}"
              id="firstName"
              placeholder=""
              bind:value={customer.name}
              required />
            <div
              class="invalid-feedback"
              style={customer.name == '' ? 'display:block' : ''}>
              Valid first name is required.
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="email">
            Email
            <span class="text-muted">(Required)</span>
          </label>
          <input
            type="email"
            class="form-control{customer.name == '' ? ' is-invalid' : ''}"
            id="email"
            bind:value={customer.email}
            required
            placeholder="you@example.com"
            style={customer.email == '' ? 'display:block' : ''} />
          <div class="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>

        <div class="mb-3">
          <label for="address">Address</label>
          <input
            type="text"
            class="form-control"
            id="address"
            bind:value={customer.address}
            placeholder="1234 Main St"
            required />
          <div class="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>

        <div class="mb-3">
          <label for="address2">
            Address 2
            <span class="text-muted">(Optional)</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="address2"
            bind:value={customer.address2}
            placeholder="Apartment or suite" />
        </div>

        <div class="row">
          <div class="col-md-5 mb-3">
            <label for="country">Country</label>
            <select
              bind:value={customer.country}
              class="custom-select d-block w-100"
              id="country"
              required>
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div class="invalid-feedback">Please select a valid country.</div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="state">State</label>
            <select
              bind:value={customer.state}
              class="custom-select d-block w-100"
              id="state"
              required>
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div class="invalid-feedback">Please provide a valid state.</div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="zip">Zip</label>
            <input
              type="text"
              class="form-control"
              id="zip"
              bind:value={customer.zip}
              placeholder=""
              required />
            <div class="invalid-feedback">Zip code required.</div>
          </div>
        </div>
        <hr class="mb-4" />
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            bind:value={customer.sameAddress}
            id="same-address" />
          <label class="custom-control-label" for="same-address">
            Shipping address is the same as my billing address
          </label>
        </div>

        <h4 class="mb-3">Payment</h4>

        <div class="d-block my-3">
          <div class="custom-control custom-radio">
            <input
              id="credit"
              name="paymentMethod"
              type="radio"
              class="custom-control-input"
              value="credit"
              bind:group={customer.paymentMethod}
              checked
              required />
            <label class="custom-control-label" for="credit">Credit card</label>
          </div>
          <div class="custom-control custom-radio">
            <input
              id="debit"
              name="paymentMethod"
              type="radio"
              value="debit"
              class="custom-control-input"
              bind:group={customer.paymentMethod}
              required />
            <label class="custom-control-label" for="debit">Debit card</label>
          </div>
          <div class="custom-control custom-radio">
            <input
              id="paypal"
              name="paymentMethod"
              type="radio"
              class="custom-control-input"
              value="paypal"
              bind:group={customer.paymentMethod}
              required />
            <label class="custom-control-label" for="paypal">PayPal</label>
          </div>
        </div>
        {#if customer.paymentMethod != 'paypal'}
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="cc-name">Name on card</label>
              <input
                type="text"
                class="form-control"
                id="cc-name"
                bind:value={customer.ccName}
                placeholder=""
                required />
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">Name on card is required</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="cc-number">Credit card number</label>
              <input
                type="text"
                class="form-control"
                id="cc-number"
                bind:value={customer.ccNumber}
                placeholder=""
                required />
              <div class="invalid-feedback">Credit card number is required</div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="cc-expiration">Expiration</label>
              <input
                type="text"
                class="form-control"
                id="cc-expiration"
                bind:value={customer.ccExpiration}
                placeholder=""
                required />
              <div class="invalid-feedback">Expiration date required</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="cc-cvv">CVV</label>
              <input
                type="text"
                class="form-control"
                id="cc-cvv"
                bind:value={customer.ccCvv}
                placeholder=""
                required />
              <div class="invalid-feedback">Security code required</div>
            </div>
          </div>
        {/if}
        <hr class="mb-4" />
        {#if form_error != ''}
          <div class="alert alert-danger" role="alert">{form_error}</div>
        {/if}
        <Button color="success" outline class="btn-lg btn-block" type="submit">
          Continue to checkout
        </Button>
      </div>
    </div>
  </form>
</div>
