<template>
  <Layout spec="tales" :sub="railLinks">
    <section>
      <h2>Rain</h2>
      <p>Graying Wolf sits on the porch, listening to the drops hit the street in the evening, a constant shimmering sound. Dissolve to white noise. A clear view back to the point where it all began, along with a dizzying recognition of the distance to travel. She left her scootbike on the lawn again, good thing it can get wet.</p>
    </section>
    <section>
      <h2>Grim</h2>
      <p>It is a difficult thing to put into words, the feeling of the divide in US society as of 2019. It is there, it is prominent, it is terrifying.</p>
      <p>So much of it is pufferfish antics. The appearance of Big And Tough.</p>
    </section>
    <section>
      <h2>Arena</h2>
      <p>A "leader" who only knows how to fight is not a leader. They will only ever seek conflict, they need it as the backdrop for their legend, something to look heroic standing in front of. But the emperor has no clothes, the President has no plan apart from keeping his face on TV as much as possible.</p>
    </section>
    <section>
      <h2>Beacon</h2>
      <p>There is much discussion about self care and self love, how to deal with depression or anxiety or the general painful feelings of the human heart, especially in such turbulence. I have always found comfort in writing strange words and making strange sounds.</p>
      <p>Every weekend, drop beacons.</p>
      <p>The Flight of P1RK5</p>
    </section>
    <section>
      <h2>Nos</h2>
      <p>All my life, as a Cruzat, I have always been alone. I have never known another, until her. How like me, and how like her mother. How uniquely her she is. My little apprentice, creeping around in my studio and opening every drawer, looking at every cable. Mi corazon. </p>
    </section>
    <section>
      <h2>Sol</h2>
      <p>I am 41 years old and I am exhausted. I see things moving in a very negative direction, faster and faster, and this trajectory would continue through 2020. I am so tired of hypocrisy and corruption and feeling disappointment in my society. I am tired of everything being pushed into the frame of an ideological culture war that was designed to be unwinnable. The point is just to fight.</p>
    </section>
    <section>
      <h2>backroads</h2>
      <p>At the very bottom of Portland, along the eastern hills and broad boulevards, the narrow sidestreets and gravel roads that only suggest civilization, we find the hero of our story in his own Odd Den. He has come to realize that life is never a direct line from A to B, it is a jillion small connections, shining like a galaxy.</p>
      <p>My life has never been about the main road.</p>
    </section>
    <section>
      <h2>coffee</h2>
      <p>Some things will never change, and you will always find Dan Cruzat dropping into the local cafe for an Americano -- 2 shot black, 75% of the time over ice.</p>
      <p>In my youth, the cafe was the community, we all gathered there, always aware of the odd older gray wolf, showing deference to a regular's preferred seat. Now, I am the older wolf, and the communities are online. There are no more regulars in that same way, the world has changed and we have changed with it.</p>
    </section>
    <section>
      <p>...as it was in the beginning, so shall it end...</p>
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
