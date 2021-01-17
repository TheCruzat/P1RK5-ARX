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
            'name': 'twitter:card',
            'content': 'summary_large_image',
          },
          {
            'name': 'twitter:site',
            'content': '@p1rk5',
          },
          {
            'name': 'twitter:creator',
            'content': '@_cruzat',
          },
          {
            'name': 'twitter:title',
            'content': 'ARX // P1RK5 // 25YRS',
          },
          {
            'name': 'twitter:description',
            'content': 'Snapshots from four points in the life of an oddball',
          },
          {
            'name': 'twitter:image',
            'content': 'https://arx.p1rk5.com/social.jpg',
          },
          {
            'property':  'og:title',
            'content':  `ARX // P1RK5 // 25YRS`,
          },
          {
            'property':  'og:description',
            'content': `Snapshots from four points in the life of an oddball`,
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
