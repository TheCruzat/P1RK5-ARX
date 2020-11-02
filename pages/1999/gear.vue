<template>
  <Layout spec="gear" :sub="railLinks">
    <section>
      <h2>Software</h2>
      <p>ACID Pro was used to create certain beat elements.<br>
        Ableton was used for primary production, MIDI brain + audio mix.</p>
    </section>
    <section>
      <h2>Hardware</h2>
      <p>TR-Rack, EMU Proteus 2K, EMU Mo'Phatt, Yamaha AN200.</p>
    </section>
    <section>
      <h2>Recording</h2>
      <p>All vocals were recorded with a Shure AXS1 running through a Mackie VLZ-12.</p>
    </section>
  </Layout>
</template>

<script>

import {railLinks99} from '@/pages/1999/index'

export default {
  head: {
    title: 'Gear // 1999 // ARX // P1RK5',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'The equipment used to record the 1999 track of ARX by P1RK5',
      }
    ],
  },
  data () {
    return {
      railLinks: railLinks99
    }
  }
}
</script>

<style lang="scss">
</style>
