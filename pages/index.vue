<template>
  <Layout>
    <section>
      <p>"in his lifetime, a man will play many parts, divided into seven acts..."</p>
      <h2>4 Stages of Life Across 25 Years</h2>
    </section>
    <nuxt-link to="/1994" class="section overview">
      <div class="set">
        <h3>1994 : 16 years old</h3>
        <p>Credo / Posture / Boasts / Lake / Wild</p>
      </div>
    </nuxt-link>
    <nuxt-link to="/1999" class="section overview">
      <div class="set">
        <h3>1999 : 21 years old</h3>
        <p>Car / Cypher / Basement / Radio / Temple</p>
      </div>
    </nuxt-link>
    <nuxt-link to="/2009" class="section overview">
      <div class="set">
        <h3>2009 : 31 years old</h3>
        <p>Office / Revels / Regular / Last / Chapters</p>
      </div>
    </nuxt-link>
    <nuxt-link to="/2019" class="section overview">
      <div class="set">
        <h3>2019 : 41 years old</h3>
        <p>Rain / Stressors / Arena / Beacon / Nos / Sol</p>
      </div>
    </nuxt-link>
    <section>
      <p>with Dan Cruzat as P1RK5, at the Odd Den</p>
      <p>Beats from  2018-2019</p>
      <p>Written in 2019</p>
      <p>Recorded March-October 2020</p>
      <p>Mixed July-October 2020</p>
      <p>Finalized October-November 2020</p>
    </section>
    <section>
      <p>Grateful to the people I have known and the adventures we have shared</p>
      <p>Grateful for my family and the life we share now</p>
    </section>
    <section>
      <h2>Inspirations</h2>
      <p>The Ages of Man soliloquy from "As You Like It" by William Shakespeare</p>
      <p>The "Once Upon a Time" episode of The Prisoner</p>
      <p>"B Boy Bouillabaisse" by the Beastie Boys</p>
      <p>"Rhyme Time Travel" by the Arsonists</p>

    </section>
    <section>
      <p>ARX artwork by Sudi</p>
    </section>

  </Layout>
</template>

<script>
export default {
  head: {
    title: 'ARX // P1RK5',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'The interactive companion to ARX by P1RK5',
      }
    ],
  },
}
</script>

<style lang="scss">
  @import "../styles/global";
  .overview {
    .set {
      display: flex;
      flex-direction: column;
      *:first-child {
        margin: 0;
      }
      *:last-child {
        margin: 0.2rem 0 0;
      }
      + .set {
        margin-top: 0.8rem;
      }
      h2, h3, h4, h5 {

      }
      @include mFlipUp() {
        align-items: flex-end;
        justify-content: flex-start;
      }
      @include mFlipUp("large") {
        font-size: 150%;
      }
    }
  }
</style>
