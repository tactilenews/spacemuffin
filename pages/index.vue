<template>
  <ds-container>
    <ds-card centered>
      <ds-space margin-top="large">
        <ds-text 
          size="large"
          color="softer">
          <ds-icon 
            style="font-size: 40px"
            name="inbox" /><br>
          Du hast noch keine Projekte
        </ds-text>
        <ds-button 
          icon="plus"
          path="/editor"
          primary>Projekt erstellen</ds-button>
      </ds-space>
    </ds-card>
  </ds-container>
</template>

<script>
export default {}
</script>

<style>
</style>
