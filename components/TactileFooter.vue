<template>
  <footer>
    <div class="wrapper">
      <ul>
        <li><a href="https://tactile.news/">Über tactile.news</a></li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.wrapper {
  margin: auto;
  padding: $spacing-small 0;
  max-width: $grid-max-width;
  text-align: center;
}

ul {
  list-style: none;
}

li {
  display: inline-block;
}

a {
  padding: $spacing-small;
  font-size: $font-size-small;
  color: $color-text-light;
  text-decoration: none;
}
</style>
