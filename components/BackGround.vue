<template>
  <div class="background">
    <b />
    <em />
    <Logo />
  </div>
</template>

<style lang="scss">
@import "../styles/global.scss";

  .background {
    position: fixed;
    z-index: -10;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    text-align: left;

    &:before {
      $disc2: 220vw; // 114vw;
      display: block;
      content: "";
      position: absolute;
      width: $disc2;
      height: $disc2;
      border-radius: 50%;
      // top: $disc2/2; // calc(50vh - #{$disc2/2});
      // left: $disc2/2; // calc(50vw - #{$disc2/2});
      background: url('/bgs/sudi01.jpg') 50% 50% no-repeat;
      background-size: cover;
      z-index: -1;
      animation: rotata 1200s linear infinite;
      @include mFlipDown() {
        @media (min-height: 80vw) {
          $disc2: 660vw; // 114vw;
          width: $disc2;
          height: $disc2;
          top: calc(50vh - #{$disc2/2});
          left: calc(50vw - #{$disc2/2});

        }
      }
      @include mFlipUp() {
        $disc2: 220vw; // 114vw;
        width: $disc2;
        height: $disc2;
        top: - $disc2/2; // calc(50vh - #{$disc2/2});
        left: - $disc2/2; // calc(50vw - #{$disc2/2});
        opacity: 0.2;
        // display: none;
      }
    }

    &:after {
      $disc: 210vw; // 114vw;
      display: block;
      content: "";
      position: absolute;
      width: $disc;
      height: $disc;
      border-radius: 50%;
      top: - $disc/2; // calc(50vh - #{$disc/2});
      left: - $disc/2; // calc(50vw - #{$disc/2});
      background: url('/bgs/sudi01.jpg') 50% 50% no-repeat;
      background-size: cover;
      animation: rotato 800s linear infinite;
      z-index: -3;
      @include mFlipDown("large") {
        @media (min-height: 120vw) {

          $disc3: 300vw; // 114vw;
          width: $disc3;
          height: $disc3;
          top: calc(50vh - #{$disc3/2});
          left: calc(50vw - #{$disc3/2});

        }
      }
    }
    @keyframes rotato {
      0% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(-180deg);
      }
    }
    @keyframes rotata {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes appear2 {
      0% {
        background-position: 82% 50%;
        height: 120vh;
        opacity: 0;
      }
    }

    img {
      position: absolute;
      bottom: 1rem; // calc(42px + 0.4rem);
      right: 1rem;
      z-index: -1;
      opacity: 0.8;
      height: auto;

      @include mFlipDown() {
        width: 3rem;
        bottom: auto; // calc(#{$mcta} + 1rem);
        top: calc(100vh - 5.3rem);
      }

      @include mFlipUp() {
        right: 1.6rem;
        bottom: 1.6rem;
      }
    }

    svg {
      max-width: 22vw; // 28vw; // 50vw; //30rem;
      height: auto;
      opacity: 1;
      bottom: 2rem;
      position: absolute;
      transform: rotate(-12deg);

      @include mFlipDown() {
        // display: none;
        max-width: 100vw;
        bottom: 33%;
      }

      @include mFlipUp('large') {
        max-width: 32vw;
      }

      @keyframes appear {
        0% {
          max-width: 19rem;
          opacity: 0;
        }
      }
      path {
        fill: var(--spark); //#52bdde; // rgba(255,255,255,0.25);
        @include mFlipDown() {
          fill: rgba(255,255,255,0.4);
        }
      }
    }

    b {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      width: 100%; height: 100%;
      background: var(--white);
      opacity: 0.3;
      display: none;
    }

    emu {
      $sz: 220vh;
      $szm: 50rem;
      display: block;
      width: $szm;
      height: $szm;
      background: rgba(255,255,255,0.1);
      border-radius: 50%;
      box-shadow: inset 0 0 80vh 0 rgba(255,255,255,0.7);

      @include mFlipDown() {
        display: none;
      }

      @include mFlipUp() {
        width: $sz;
        height: $sz;
        top: - $sz/2;
        right: - $sz/2;
        position: absolute;

      }

      @keyframes appear {
        0% {
          top: -68vh;
          left: -68vh;
          width: 136vh;
          height: 136vh;
          opacity: 0;
        }
      }
    }
  }
</style>
