<template>
  <div>
    <Nuxt />
    <BackGround />
    <Player />
    <SudiGallery />
  </div>
</template>

<style lang="scss">
  @import "../styles/global.scss";
</style>

<script lang="ts">
  export default {
    head () {
      return {
        meta: [
          {
            'property':  'og:title',
            'content':  `ARX // P1RK5`,
          },
          {
            'property':  'og:description',
            'content': `The interactive companion to ARX by P1RK5`,
          },
          {
            'property':  'og:image',
            'content': `./social.png`
          }
        ]
      }
    }
  }
</script>
