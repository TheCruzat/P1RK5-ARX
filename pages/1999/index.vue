<template>
  <Layout :sub="railLinks">
    <section>
      <p>"...then the lover, sighing like furnace, with a woeful ballad..."</p>
    </section>
    <section>
      <p>I was 21 years old</p>
    </section>
    <section>
      <div class="set">
        <h2>Car / Cypher / Basement / Radio / Temple</h2>
      </div>
    </section>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'

export const railLinks99 = [
  {
    label: "lyrics",
    link: "/1999/lyrics",
  },
  {
    label: "tales",
    link: "/1999/tales",
  },
  {
    label: "gear",
    link: "/1999/gear",
  },
  {
    label: "[x]",
    link: "/1999",
  }
];

export default {
  head: {
    title: '1999 // ARX // P1RK5',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'The 1999 track of ARX by P1RK5',
      }
    ],
  },
  props: ['links'],
  data () {
    return {
      railLinks: railLinks99
    }
  }
}

</script>

<style lang="scss">
</style>
