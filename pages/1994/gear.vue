<template>
  <Layout spec="gear" :sub="railLinks">
    <section>
      <h2>Software</h2>
      <p>Ableton was used for creating various beat elements and combining different takes from the 4 track.</p>
    </section>
    <section>
      <h2>Main Hardware</h2>
      <p>BOSS SP-202, Roland SP-404, Akai MPC 60, Fender J Bass (de Mejico)</p>
    </section>
    <section>
      <h2>Effects</h2>
      <p>Moog Minifooger Delay, BOSS FDR-1 '65, Realistic EQ</p>
    </section>
    <section>
      <h2>Recording</h2>
      <p>All performances were recorded on a TASCAM Porta-05 with TDK-SA90 cassettes, then tracked into Ableton via Scarlett 2i2.</p>
      <p>All vocals were recorded with a Shure 588SA.</p>
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
