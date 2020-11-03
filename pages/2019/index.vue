<template>
  <Layout :sub="railLinks">
    <section>
      <p>"...and then the justice, in fair round belly, with good capon lin’d..."</p>
    </section>
    <section>
      <p>I was 41 years old</p>
    </section>
    <section>
      <div class="set">
        <h2>Rain / Grim / Arena / Beacon / Nos / Sol</h2>
      </div>
    </section>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'

export const railLinks19 = [
  {
    label: "lyrics",
    link: "/2019/lyrics",
  },
  {
    label: "tales",
    link: "/2019/tales",
  },
  {
    label: "gear",
    link: "/2019/gear",
  },
  {
    label: "(x)",
    link: "/2019",
  }
];

export default {
  head: {
    title: '2019 // ARX // P1RK5',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'The 2019 track of ARX by P1RK5',
      }
    ],
  },
  props: ['links'],
  data () {
    return {
      railLinks: railLinks19
    }
  }
}
</script>

<style lang="scss">
</style>
