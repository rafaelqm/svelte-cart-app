<script>
  const logoUrl = "http://placehold.it/180x60";
  import { createEventDispatcher } from "svelte";

  const dispatchEvent = createEventDispatcher();
  function changePage(page) {
    dispatchEvent("changePage", page);
  }

  export let company_name = "My Company";
  let menuOptions = [
    {
      title: "Products",
      page: "products",
      url: "#",
      active: true
    },
    {
      title: "Cart",
      page: "checkout",
      url: "#cart",
      active: false
    }
  ];

  const setActivate = ({ title, page }) => {
    changePage(page);
    menuOptions = menuOptions.map(item => ({
      ...item,
      active: item.title === title
    }));
  };
</script>

<div
  class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3
  bg-white border-bottom shadow-sm">
  <h5 class="my-0 mr-md-auto font-weight-normal">
    <img src={logoUrl} alt={company_name} />
  </h5>
  <nav class="my-2 my-md-0 mr-md-3">
    {#each menuOptions as option}
      <a
        class="p-2 text-{option.active ? 'info' : 'dark'}"
        on:click={() => setActivate(option)}
        href={option.url}>
        {option.title}
      </a>
    {/each}
  </nav>
</div>
