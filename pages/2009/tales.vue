<template>
  <Layout spec="tales" :sub="railLinks">
    <section>
      <h2>Office</h2>
      <p>A bleary eyed morning, standing at the MAX station or Trimet stop, the caffeine doing its best to pull my brain out of the stupor from last night. This is normal, I work with many functional alcoholics and there is a culture of "putting a nip in your coffee". A flask at every desk.</p>
      <p>The ocean of liquor I saw consumed in corporate environments dwarfed the small wildfire of weed I'd seen burned in recording studios.</p>
    </section>
    <section>
      <h2>Revels</h2>
      <p>The rigors of regular worklife and office culture demand adventures on the weekends. One of the great things about Portland is that you can drive for 30 minutes in any direction and are in some kind of de-urbanized nature. It is almost impossible to completely unplug but there are a couple of blissful weekends where it happens.</p>
    </section>
    <section>
      <h2>Regular</h2>
      <p>There is a definite sense that we are getting away with something. A self satisfied criminal swagger, or maybe we were still young enough to need to assign greater meaning to our actions. </p>
      <p>Every lunch break or happy hour is a celebration. Top shelf as a rule. Any restaurant without a bar wasn't worth our lunch money.</p>
    </section>
    <section>
      <h2>Last</h2>
      <p>There are some moments that crystallize and stay with you, haunt your thoughts. Some that fly right by, in the moment, and only later do you realize that that was the last time a certain thing happened.</p>
      <p>This was originally supposed to be for my friend ____, we took many many walks in our younger years. I was recalling our last walk... but then at the end of 2019, his brother died. I'm back in Evanston, and we are walking the loop around Judson again, sharing a joint and trying to make sense of things.</p>
    </section>
    <section>
      <h2>Chapters</h2>
      <p>There is a page in a book, one side of the page has the end of one chapter, the other side has the beginning of the next. You might not realize the chapter is over until you turn the page, but once you turn the page, you cannot go back. You are already in the new chapter.</p>
    </section>
    <section>
      <h2>kanye ascendant</h2>
      <p>There was enough arrogance and self satisfaction to go around. In a downtown where most buildings were four or five stories, we took our coffee breaks on a skydeck on 8.</p>
      <p></p>
    </section>
    <section>
      <h2>plaza</h2>
      <p>No Fish Go Fish had these bomb little fish-shaped pastries in various flavors, pairing with great soups and chilis. They were a fixture on SE Hawthorne for more than ten years, when they finally got a second fish-mold-oven they had a cart downtown.</p>
      <p>They were a Pop and Pop operation, the husband on the downtown cart was a huge sci fi nerd and we talked about all the things we were excited about. After Tron 2 was announced he was buzzing, huge crush on Bruce Boxleitner. I don't know if I could have had that conversation in Chicago.</p>
    </section>
    <section>
      <h2>arcade</h2>
      <p>I have a whiskey flask and a packed bowl in my pocket, regularly going to the bathroom for spikes from both. I have more quarters than time and spend hours making my way around the arcade, loop after loop after loop.</p>
      <p>I rediscover the Cruisin World driving game, which I had played fanatically in early 1997. </p>
    </section>
    <section>
      <h2>shoes</h2>
    </section>
  </Layout>
</template>

<script>

import {railLinks09} from '@/pages/2009/index'

export default {
  head: {
    title: 'Tales // 2009 // ARX // P1RK5',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Some stories behind the 2009 track of ARX by P1RK5',
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
