<template>
  <Layout :sub="railLinks">
    <section>
      <p>"...then the soldier, full of strange oaths and bearded like the pard..."</p>
    </section>
    <section>
      <p>I was 31 years old</p>
    </section>
    <section>
      <div class="set">
        <h2>Office / Revels / Regular / Last / Chapters</h2>
      </div>
    </section>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'

export const railLinks09 = [
  {
    label: "lyrics",
    link: "/2009/lyrics",
  },
  {
    label: "tales",
    link: "/2009/tales",
  },
  {
    label: "gear",
    link: "/2009/gear",
  },
  {
    label: "[x]",
    link: "/2009",
  }
];

export default {
  head: {
    title: '2009 // ARX // P1RK5',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'The 2009 track of ARX by P1RK5',
      }
    ],
  },
  props: ['links'],
  data () {
    return {
      railLinks: railLinks09
    }
  }
}
</script>

<style lang="scss">
</style>
