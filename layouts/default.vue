<template>
  <div>
    <nav>
      <img
        id="logo"
        src="~assets/img/tactilenews.svg"
        alt="tactile.news">
    </nav>
    <ul>
      <li>
        <a href="/">Dashboard</a>
      </li>
      <li>
        <a href="/create">Create</a>
      </li>
    </ul>
    <div style="padding: 3rem 2rem 5rem;">
      <nuxt/>
    </div>
  </div>
</template>

<script>
</script>

<style>
#logo {
  height: 50px;
}
</style>
