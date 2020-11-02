<template>
  <Layout>
    <section>
      <p>"in his lifetime, a man will play many parts, divided into seven acts..."</p>
      <h2>ARX: 4 Stages of Life Across 25 Years</h2>
    </section>
    <nuxt-link to="/1994" class="section overview">
      <div class="set">
        <h3>1994 : 16 years</h3>
        <p>Credo / Posture / Boasts / Lake / Wild</p>
      </div>
    </nuxt-link>
    <nuxt-link to="/1999" class="section overview">
      <div class="set">
        <h3>1999 : 21 years</h3>
        <p>Car / Cypher / Basement / Radio / Temple</p>
      </div>
    </nuxt-link>
    <nuxt-link to="/2009" class="section overview">
      <div class="set">
        <h3>2009 : 31 years</h3>
        <p>Office / Revels / Regular / Last / Chapters</p>
      </div>
    </nuxt-link>
    <nuxt-link to="/2019" class="section overview">
      <div class="set">
        <h3>2019 : 41 years</h3>
        <p>Rain / Stressors / Arena / Beacon / Nos / Sol</p>
      </div>
    </nuxt-link>
    <section>
      <p>Dan Cruzat dba P1RK5, at the Odd Den</p>
      <p>Produced in 2018-2019<br>
      Recorded March-October 2020<br>
        Mixed July-October 2020<br>
      Mastered October 2020</p>
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
      //display: flex;
      //flex-direction: column;
      //align-items: flex-end;
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
      @include mFlipUp("large") {
        font-size: 150%;
      }
    }
  }
</style>
