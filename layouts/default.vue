<template>
  <ds-page ref="page">
    <template slot="brand">
      <ds-logo/>
    </template>
    <ds-menu
      slot="navbar"
      :routes="routes"
      navbar
      @navigate="$refs.page.closeDrawer()"/>
    <ds-menu
      slot="drawer"
      :routes="routes"
      @navigate="$refs.page.closeDrawer()"/>
    <ds-container>
      <ds-space margin-top="large">
        <nuxt/>
      </ds-space>
    </ds-container>
  </ds-page>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { name: 'Dashboard', path: '/' },
        {
          name: 'Editor'
        },
        { name: 'Review' }
      ]
    }
  }
}
</script>
