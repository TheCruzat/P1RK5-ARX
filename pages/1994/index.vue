<template>
    <Layout :sub="railLinks94">
      <section>
        <p>"...and the whining schoolboy, with his satchel and shining morning face..."</p>
      </section>
      <section>
        <p>I was 16 years old</p>
      </section>
      <section>
        <div class="set">
          <h2>Credo / Posture / Boasts / Lake / Wild</h2>
        </div>
      </section>
    </Layout>
</template>

<script>
import Vue from 'vue'

export const railLinks94 = [
  {
    label: "lyrics",
    link: "/1994/lyrics",
  },
  {
    label: "tales",
    link: "/1994/tales",
  },
  {
    label: "gear",
    link: "/1994/gear",
  },
  {
    label: "(x)",
    link: "/1994",
  }
];
export default {
  head: {
    title: '1994 // ARX // P1RK5',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'The 1994 track of ARX by P1RK5',
      }
    ],
  },
  props: ['links'],
  data () {
    return {
      railLinks94: railLinks94
    }
  }
}
</script>

<style lang="scss">
</style>
