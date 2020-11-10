<template>
  <Layout spec="gear" :sub="railLinks">
    <section>
      <h2>Software</h2>
      <p>ACID Pro: arrangement elements<br>
        Ableton: main production, MIDI brain, audio mix</p>
    </section>
    <section>
      <h2>Hardware</h2>
      <p>TR-Rack, Proteus 2K + Mo'Phatt, AN-200</p>
    </section>
    <section>
      <h2>Recording</h2>
      <p>All: Ableton > TASCAM Porta-05 > Scarlett 2i2</p>
      <p>Vocals: AXS1 > VLZ-12 > Scarlett 2i2</p>
    </section>
  </Layout>
</template>

<script>

import {railLinks99} from '@/pages/1999/index'

export default {
  head: {
    title: 'Gear : 1999 : ARX // P1RK5',
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
