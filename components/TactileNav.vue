<template>
  <nav>
    <ul>
      <li><nuxt-link to="/">Dashboard</nuxt-link></li>
      <li><nuxt-link to="/create">Neues Projekt</nuxt-link></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '~assets/styles/variables';
$link-padding: 0.25 * $spacing-unit;

nav {
  display: flex;
  align-items: center;
}

ul {
  margin-right: -1 * $link-padding;
  list-style: none;
}

li {
  display: inline-block;
}

a {
  display: inline-block;
  padding: $link-padding;
  color: $color-text;
  text-decoration: none;
}
</style>
