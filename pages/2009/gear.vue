<template>
  <Layout spec="gear" :sub="railLinks">
    <section>
      <h2>Software</h2>
      <p>ACID Pro was used to create certain beat elements.<br>
        Ableton was used for primary production, MIDI brain + audio mix.</p>
    </section>
    <section>
      <h2>Hardware</h2>
      <p>MPC-2500, EMU Proteus 2K, Ensoniq ASR-10, Yamaha SU700</p>
    </section>
    <section>
      <h2>Recording</h2>
      <p>All vocals were recorded with a Shure SM57 running direct into the 2i2.</p>
    </section>
  </Layout>
</template>

<script>

import {railLinks09} from '@/pages/2009/index'

export default {
  head: {
    title: 'Gear // 2009 // ARX // P1RK5',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'The equipment used to record the 2009 track of ARX by P1RK5',
      }
    ],
  },
  data () {
    return {
      railLinks: railLinks09
    }
  }
}
</script>

<style lang="scss">
</style>
