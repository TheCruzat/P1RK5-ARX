<template>
  <Layout spec="tales" :sub="railLinks">
    <section>
      <h2>Office</h2>
      <p>A bleary morning, standing at a MAX station or Trimet stop, the caffeine doing its damnedest to pull my brain out of the remaining haze of The Night Before. This is normal, I work with many functional alcoholics and there is a culture of "putting a nip in your coffee". A flask at every desk. The vast oceans of liquor I saw consumed in corporate environments dwarfed the small wildfire of weed I'd seen burned in recording studios.</p>
    </section>
    <section>
      <h2>Revels</h2>
      <p>The culture of abundance requires almost continuous celebration, most commonly at lunches or happy hours. We become beloved regulars and heavy tippers, the Rialto, the Rock Bottom, the Virginia. Only two years previous, I had been scrounging for pennies and nickels, here I was leaving $10 tips on $15 tabs... "If you're tight with your money / don't loosen up..."</p>
    </section>
    <section>
      <h2>Regular</h2>
      <p>I had spent so long outside the glass box peering in, to finally be one of the ants bustling around in The Big Company took some adjustment. There was an arrogance about everything we did, a belief that we were part of some kind of elite class that was fundamentally changing the world with our browser garbage. I could never find the enthusiasm to wear their logo. Bad Salaryman.</p>
    </section>
    <section>
      <h2>Last</h2>
      <p>I originally wrote something for an old good friend who I have drifted from in life, a bittersweet recounting of our last walk together, the last of many. But then, at the end of 2019, his brother Ben died, and we found ourselves taking another walk around Judson to Hinman, sharing a joint and trying to make sense of a life ended too soon.</p>
      <p>Ben had also been a good friend for over 20 years, we had our ups and downs, we were on a down and had not spoken in a few years when he passed. The shadow that followed him for his entire life had ultimately swallowed him.</p>
      <p>But my last day with Ben was awesome. We met up for coffee, took his dog for a walk, I saw his apartment. No place of Ben's was ever complete without its Dubious Sex Lair, he had finally graduated to black velvet painting of Tiger Emerging From Lillies. What surprised me was Ben also becoming a massive Arduino nerd, with this new Mad Scientist corner with a table of half built gizmos, robot claws and LEDs.</p>
      <p>We walked for forever in a Chicago July to get to an open Brown line stop, took the El into Evanston. Stopped by his parents' house to borrow their van, I visited with the Mater Familias, then he came with me back to my parents' place. We loaded up the van with a bunch of old gear from the Double-P days, he had forgotten I made music and was surprised at the size of his haul. He told me he just liked pulling electronics apart and I believed him. I had to.</p>
      <p>The last time I saw Ben, he was driving away from my parents' house, up a tree lined lane towards the city.</p>
      <p>He was a beautiful human with a good heart, I try to remember him every day.<br>We miss you homey.</p>
    </section>
    <section>
      <h2>Chapters</h2>
      <p>There is a page in a book, one side of the page has the end of one chapter, the other side has the beginning of the next. You might not realize the chapter is over until you turn the page, but once you turn the page, you cannot go back. You are already in the new chapter, the story carries on.</p>
    </section>
    <section>
      <h2>plaza</h2>
      <p>No Fish Go Fish had these bomb little fish-shaped pastries in various flavors, pairing with great soups and chilis. They were a fixture on SE Hawthorne for more than ten years, when they finally got a second fish-mold-oven they had a cart downtown.</p>
      <p>They were a Pop and Pop operation, the husband on the downtown cart was a huge sci fi nerd and we talked about all the things we were excited about. After Tron 2 was announced he was buzzing, huge crush on Bruce Boxleitner. I don't know if I could have had that conversation in Chicago. Growth is good.</p>
    </section>
    <section>
      <h2>arcade</h2>
      <p>I have a whiskey flask and a packed bowl in my pocket, regularly going to the bathroom for spikes from both. I have more quarters than time and spend hours making my way around the arcade, loop after loop after loop. </p>
      <p>I rediscover the Cruisin World driving game, which I had played fanatically in early 1997. Tony and I were on it regular at Norris Center at Northwestern campus, usually following a few hours playing pool there using an old college ID. We even had little driving gloves we would wear. Then retiring to our usual manor, the IHOP at Howard and Western. RIP Tony, we miss you too.</p>
      <p>I had never had this community arcade experience as a kid, being an adult in this town means that growing up is optional. Ground Kontrol was that spot for me and a lot of other overgrown kids that were having their own do-overs.</p>
    </section>
    <section>
      <h2>shoes</h2>
      <p>Every day in the glass box, I am in the elevators at least a dozen times. I develop a fixation on men's business shoes, I had worn sneakers for years and was suddenly very self conscious about them. I start getting cheap knock-offs of that pristine business look, but they are from Ross and poorly made and fall apart quickly. I finally spend a modest amount on a good pair of leather work shoes, they serve me well. I still have them in the closet, if I ever need to return to the glass box. I'm very comfy in sneakers or boots.</p>
      <p>Be honest in your shoes and in your life, everyone can spot the cheap knockoff and it's never a good look. False flagging wasn't just for gangs.</p>
    </section>
  </Layout>
</template>

<script>

import {railLinks09} from '@/pages/2009/index'

export default {
  head: {
    title: 'Tales : 2009 : ARX // P1RK5',
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
