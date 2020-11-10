<template>
  <Layout spec="tales" :sub="railLinks">
    <section>
      <h2>Rain</h2>
      <p>Graying Wolf sits on the porch, listening to the drops hit the street in the evening. A constant shimmering sound. Dissolve to white noise. Sometimes he picks and plucks at an acoustic guitar. A clear view back to the point where it all began, along with a dizzying recognition of the distance to travel. She left her tricycle on the lawn again, good thing it can get wet.</p>
    </section>
    <section>
      <h2>Grim</h2>
      <p>It is a difficult thing to put into words, the feeling of the divide in US society as of 2019. It is there, it is prominent, it is terrifying.</p>
      <p>So much of it is pufferfish antics. The appearance of Big And Tough.</p>
      <p>But some of it is very real.</p>
    </section>
    <section>
      <h2>Arena</h2>
      <p>A "leader" who only knows how to fight is not a leader. They will only ever seek conflict, they need it as the backdrop for their legend, something to look heroic standing in front of. But the emperor has no clothes, the President has no plan apart from keeping his face on TV as much as possible.</p>
      <p>The age of divisive rhetoric, dunks and hot takes centers on an unwinnable fight. Warring ideologies, mutually co-dependent, reliant on the other for their definition of self as the opposition. I am my enemy's enemy. Behold: checkmark</p>
    </section>
    <section>
      <h2>Beacon</h2>
      <p>There is much discussion about self care and self love, how to deal with depression or anxiety or the general painful feelings of the human heart, especially in such turbulence. I have always found comfort in writing strange words and making strange sounds.</p>
      <p>Every weekend, drop beacons. Paper airplanes made of sound, floating off.</p>
      <p>callsign P1RK5 aka Pirks da Pilot</p>
    </section>
    <section>
      <h2>Nos</h2>
      <p>All my life, as a Cruzat, I have always been alone. I have never known another, until her. How like me, and how like her mother. How uniquely her she is. My little apprentice, creeping around in my studio and opening every drawer, looking at every cable. Mi corazon. </p>
    </section>
    <section>
      <h2>Sol</h2>
      <p>I am 41 years old and I am exhausted. I see things moving in a very negative direction, faster and faster, and this trajectory would continue through 2020 and beyond. Tired of hypocrisy and corruption and feeling disappointment in my society. Tired of everything being pushed into the frame of an ideological culture war that was designed to be endless. The point is just to fight. No.</p>
      <p>We do what we can, we vote, stay active in our communities, talk to our neighbors. But it's not necessary to join a screaming throng of people that only contributes noise, they build nothing. Because at the end of that trail are a very small group of people who are, as always, cashing in on the vox populi. So you go scream into the cold void, I'm going to grill this chicken.</p>
    </section>
    <section>
      <h2>backroads</h2>
      <p>At the very bottom of Portland, along the eastern hills and broad boulevards, the narrow sidestreets and gravel roads that only suggest civilization, we find the hero of our story in his own Odd Den. He has come to realize that life is never a direct line from A to B, it is a jillion small connections, shining like a galaxy.</p>
      <p>My life has never been about the main road.</p>
    </section>
    <section>
      <h2>coffee</h2>
      <p>Some things will never change, and you will always find Dan Cruzat dropping into the local cafe for an Americano -- 2 shot black, 75% of the time over ice.</p>
      <p>In my youth, the cafe was the community, we all gathered there, always aware of the odd older gray wolf, showing deference to a regular's preferred seat.</p>
      <p>In 2020 we are taking our coffees to go, but I still go back to Speedboat. And some day, when we are past all this, I will be the old gray wolf at a table, reading a book and chuckling quietly at the sound of teenagers teenaging.</p>
    </section>
    <section>
      <p>in the end, as it was in the beginning</p>
    </section>
  </Layout>
</template>

<script>

import {railLinks19} from '@/pages/2019/index'

export default {
  head: {
    title: 'Tales : 2019 : ARX // P1RK5',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Some stories behind the 2019 track of ARX by P1RK5',
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
