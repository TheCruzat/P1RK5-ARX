<template>
  <Layout spec="gear" :sub="railLinks">
    <section>
      <h2>Software</h2>
      <p>Ableton was used for primary production, MIDI brain + audio mix.</p>
    </section>
    <section>
      <h2>Hardware</h2>
      <p>Akai MPC-2500, Novation A-Station, Korg MS-2000R, Roland JP-8080.</p>
    </section>
    <section>
      <h2>Recording</h2>
      <p>All vocals were recorded with a R0DE NT1 through a Presonus Tube Pre.</p>
    </section>
  </Layout>
</template>

<script>

import {railLinks19} from '@/pages/2019/index'

export default {
  head: {
    title: 'Gear // 2019 // ARX // P1RK5',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'The equipment used to record the 2019 track of ARX by P1RK5',
      }
    ],
  },
  data () {
    return {
      railLinks: railLinks19
    }
  }
}
</script>

<style lang="scss">
</style>
