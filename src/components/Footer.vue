<template>
  <div class="footer">
    <div class="footer__content">
      Powered by <a href="https://github.com/vito2005">@alexbuki</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer {
    position: relative;
    margin-top: 1rem;
  }
  .footer__content {
    position: absolute;
    right: 0;
    margin: 0.3rem 1rem;
    font-family: "Oak Bold",sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: .7em;
    letter-spacing: .1em;
    color: var(--text-grey);
  }
  .footer__content a {
    text-decoration: none;
  }
</style>
