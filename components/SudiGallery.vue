<template>
  <div>
    <button @click="showSudi = !showSudi" class="sudi"><img src="/sudi.png" alt="Sudi" /></button>
    <button @click="showSudi = !showSudi" v-if="showSudi" class="close">(x)</button>
    <div class="sudi-gallery" v-if="showSudi">
      <img src="/bgs/sudi01.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      showSudi: false,
    }
  }
}
</script>

<style lang="scss">

@import "../styles/global.scss";

  .sudi-gallery {
    position: fixed;
    z-index: 5;

    top: 0; left: 0;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    background: rgba(0,0,0,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadein 0.3s ease-out;

    $nmbr: 94;
    img {
      max-height: #{$nmbr}vh;
      max-width: #{$nmbr}vw;
      border: 1px solid rgba(255,255,255,0.6);
      animation: fadein 0.9s ease-in-out;
      // transform: rotate(-90deg);

      //@include mFlipDown() {
        //max-height: #{$nmbr}vh;
        //max-width: #{$nmbr}vw;
     // }
    }

    @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    @keyframes imagefade {
      from { opacity: 0; max-height: 89vw; max-width: 89vh; }
      to   { opacity: 1; max-height: #{$nmbr}vw; max-width: #{$nmbr}vh; }
    }
  }

  button {
    border: none;
    outline: none;
    right: 12px;
  }

  button.close {
    top: 12px;
    position: fixed;
    z-index: 6;
    font-size: 2rem;
    animation: fadein 0.4s ease-in;
    cursor: pointer;
    //border: 1px solid red;
    display: block;
    width: 60px;
    text-align: center;
  }
  button.sudi {
    position: fixed;
    height: auto;
    z-index: 31;
    cursor: pointer;
    margin: 0;
    padding: 0;

    @include mFlipDown() {
      bottom: calc(#{ $mcta} + 12px);
      // top: 90%; // calc(100vh - 2 * var(--railHeight) );
      right: 12px;
      max-width: 3.2rem;
      opacity: 0.7;
    }

    @include mFlipUp() {
      bottom: 20px;
      right: 20px;
      max-width: 3.8rem;
    }

    img {
      max-width: 100%;
    }
  }
</style>
