<template>
  <Layout spec="tales" :sub="railLinks">
    <section>
      <h2>Car</h2>
      <p>We would each have our test mixes on us at all times, in anyone's car you would wrestle your way up to the stereo with the latest work.</p>
      <p>I was always most comfortable in this venue for sharing my music, riding around with a gang of homies and each of us sharing a few things with each other. I will one day drive a rental up Sheridan Road to HP, bumping my era's best.</p>
    </section>
    <section>
      <h2>Cypher</h2>
      <p>In 1999 I attended Columbia College in Chicago for audio engineering, I lasted a year before leaving for web design. But while I was there, in the time around classes, we would gather in clusters under the El tracks and go back and forth spitting our best 16s. Lyricism was everything, you had to bring visuals, storytelling, snaps, all of it fitting like a puzzle. Shoutout Black Neon, Musiq Soulchild + Power Culture 45.</p>
    </section>
    <section>
      <h2>Basement</h2>
      <p>Meeting other beatmakers and home engineers, seeing other setups, learning about different equipment. I remember Alex showing me his MPC 2000, playing each sound on its pad -- all one-shots. "Where's the loop?" He hits play and all the sounds find their slots, "...it's in the sequencer." "Woah..."</p>
      <p>The age of young chest thumping and bravado. Intensely aping our influences in trying to find our own distinctive sounds. Dr Octagon had many, many children.</p>
    </section>
    <section>
      <h2>Radio</h2>
      <p>I had worked a LOT in my car and been stuck with a ton of daytime radio, specifically Chicago's Lamestream Alternative, Q101. The sounds of hip hop had been creeping over for a while. Breakbeats, sampler filter tricks, full on rapping, scratching (or faux scratch effects), more and more these methods I had heard in hip hop for years were finding their way to the top of the charts.</p>
    </section>
    <section>
      <h2>Temple</h2>
      <p>Every cheap apartment hallway in Chicago is sort of same. There's an entryway with dirty old tile, a glass security door in the lobby that any crackhead can punch through. This leads to a creaky stairway with a 60 year old carpet that somehow smells like 200 years of shoe rubber. The door to your apartment has two deadbolts and a knob lock. One of the deadbolts doesn't work.</p>
    </section>
    <section>
      <h2>horchata y fumas</h2>
      <p>El Cid #2 became a regular spot for a variety of delicious standards and the best goddamn horchata on the planet. They also sold Parliament Lights in 2-packs and were cool about matches. Proximity to El Cid was one of the reasons we took the apartment on Whipple.</p>
      <p>Ghost in the Shell, Ninja Scroll, Appleseed, Aeon Flux, quesadillas with sour cream and beanie rice. Cold Coronas with lime. There was also a bodega on the corner that was good for daytime snacks, a gas station at Sacramento was the spot at night.</p>
      <p>One early night with HTML, I'm walking back to the crib with a bottle of Pepsi and a bag of chips. The Pepsi was a Phantom Menace promo, Natalie Portman in her princess mode glaring defiantly in judgement.</p>
    </section>
    <section>
      <h2>hunting globally</h2>
      <p>We were at MP3.com constantly looking for weird sounds and textures from fellow nerds and bedroom wizards. We searched for every beatmaker site we could find, early engines weren't half as effective as sites crosslinking.</p>
      <p>HUGE stockpiles of drum sounds and one-shot packs, root tones for samplers, vocal tidbits and loops, we went hunting for it all. And all of this was on top of our continued commitment to hunting through all media for "useful" sounds.</p>
    </section>
    <section>
      <h2>fear</h2>
      <p>At one point, there was the belief that every computer, everywhere, had the potential to malfunction within a 24 hour window, worldwide. The two digit difference between seeing a year as 99 or 1999, 00 or 1900/2000.</p>
      <p>It was called Y2k, and, in the end, it was <a href="https://www.youtube.com/watch?v=EEhEQEG43RU" target="_blank">Leonard Nimoy</a> who saved us.</p>
      <p>There was an emerging threat, a phantom menace, but it had nothing to do with the tech itself. The danger was in how we were using the tech, daily. Having it reach into and touch every corner of our lives and relationships. </p>
    </section>
  </Layout>
</template>

<script>

import {railLinks99} from '@/pages/1999/index'

export default {
  head: {
    title: 'Tales : 1999 : ARX // P1RK5',
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
