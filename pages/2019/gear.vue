<template>
  <Layout spec="gear" :sub="railLinks">
    <section>
      <h2>Software</h2>
      <p>Ableton: main production, MIDI brain, audio mix</p>
    </section>
    <section>
      <h2>Hardware</h2>
      <p>MPC 2500, A Station, MS-2000R, JP-8080, Micro Granny, PO-33, J Bass (de Mejico), SG Special</p>
    </section>
    <section>
      <h2>Recording</h2>
      <p>Vocals: NT1 > Tube Pre > Scarlett 2i2</p>
      <p>Bass: Moogerfooger Drive > Scarlett 2i2</p>
    </section>
  </Layout>
</template>

<script>

import {railLinks19} from '@/pages/2019/index'

export default {
  head: {
    title: 'Gear : 2019 : ARX // P1RK5',
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
