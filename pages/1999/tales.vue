<template>
  <Layout spec="tales" :sub="railLinks">
    <section>
      <h2>Car</h2>
      <p>We would each have our test mixes on us at all times, in anyone's car you would wrestle your way up to the stereo with your burned disc of your latest endeavors.</p>
      <p>I was always most comfortable in this venue for sharing my music, riding around with a gang of homies and each of us sharing a few things with each other.</p>
    </section>
    <section>
      <h2>Cypher</h2>
      <p>In 1999 I attended Columbia College in Chicago for audio engineering, I lasted a year before leaving for web design. But while I was there, in the time around classes we would gather in clusters under the El tracks and go back and forth spitting our best 16s. Shoutout Musiq Soulchild + Power Culture 45.</p>
    </section>
    <section>
      <h2>Basement</h2>
      <p>Meeting other beatmakers and home engineers, seeing other setups, learning about other kinds of equipment. Still a year away from setting foot in a proper studio for the first time to work on my own music.</p>
      <p>The age of young chest thumping and bravado. Intensely aping our influences in trying to find our own distinctive sounds.</p>
    </section>
    <section>
      <h2>Radio</h2>
      <p>I had worked a LOT in my car and been stuck with a lot of daytime radio, specifically Chicago's Lamestream Alternative, Q101. I had heard the sounds of hip hop creeping over for years. Breakbeats, sampler filter tricks, full on rapping, scratching (or faux scratch effects), more and more these methods I had heard in hip hop for years were finding their way to the top of the charts.</p>
    </section>
    <section>
      <h2>Temple</h2>
      <p>Every cheap apartment hallway in Chicago is sort of same. There's an entryway with dirty old tile, a glass security door in the lobby that any crackhead can punch through. This leads to a creaky stairway with a 60 year old carpet that somehow smells like 200 years of shoe rubber. The door to your apartment has two deadbolts and a knob lock. One of the deadbolts doesn't work and you were never given a key.</p>
    </section>
    <section>
      <h2>horchata</h2>
    </section>
    <section>
      <p>El Cid #2 became a regular spot for a variety of delicious standards and the best goddamn horchata on the planet. They also sold Parliament Lights in 2-packs and were cool about matches. Proximity to El Cid was one of the reasons we took the apartment on Whipple.</p>
    </section>
    <section>
      <p>Ghost in the Shell, Ninja Scroll, Appleseed, Aeon Flux, quesadillas with sour cream and beanie rice. Cold Coronas with lime. There was also a bodega on the corner that was good for daytime snacks, a gas station at Sacramento was good for night time snacks.</p>
    </section>
    <section>
      <h2>hunting globally</h2>
    </section>
    <section>
      <p>We were at MP3.com looking for weird sounds and textures from fellow nerds</p>
      <p>HUGE stockpiles of drum sounds and one-shot packs</p>
    </section>
  </Layout>
</template>

<script>

import {railLinks99} from '@/pages/1999/index'

export default {
  head: {
    title: 'Tales // 1999 // ARX // P1RK5',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Some stories behind the 1999 track of ARX by P1RK5',
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
