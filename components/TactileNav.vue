<template>
  <nav>
    <ul>
      <li><nuxt-link to="/faq">Schnellstart</nuxt-link></li>
      <li><nuxt-link to="/">Dashboard</nuxt-link></li>


    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '~assets/styles/variables';
$link-padding-vertical: 0.25 * $spacing-unit;
$link-padding-horizontal: 0.45 * $spacing-unit;

nav {
  display: flex;
  align-items: center;
}

ul {
  margin-right: -$link-padding-horizontal;
  list-style: none;
}

li {
  display: inline-block;
}

a {
  display: inline-block;
  padding: $link-padding-vertical $link-padding-horizontal;
  color: $color-text;
  text-decoration: none;
}
</style>
