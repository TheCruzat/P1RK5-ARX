<template>
  <Layout spec="gear" :sub="railLinks">
    <section>
      <h2>Software</h2>
      <p>Ableton: main production, arrangement elements for samplers, audio mix</p>
    </section>
    <section>
      <h2>Hardware</h2>
      <p>SP-202, SP-404, MPC 60, J Bass (de Mejico), Minifooger Delay, FDR-1 '65, Realistic EQ</p>
    </section>
    <section>
      <h2>Recording</h2>
      <p>All: TASCAM Porta-05 > Scarlett 2i2</p>
      <p>Beats: SP-404+SP-202 > Porta-05 w/ MD Delay, REQ</p>
      <p>Vocals: 588SA > Porta-05 w/ MF Delay, FDR</p>
    </section>
  </Layout>
</template>

<script>

import {railLinks94} from '@/pages/1994/index'

export default {
  head: {
    title: 'Gear : 1994 : ARX // P1RK5',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'The equipment used to record the 1994 track of ARX by P1RK5',
      }
    ],
  },
  data () {
    return {
      railLinks: railLinks94
    }
  }
}
</script>

<style lang="scss">
</style>
