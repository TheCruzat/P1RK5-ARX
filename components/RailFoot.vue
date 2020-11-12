<template>
  <div class="bottom-rail">
    <div class="bottom-rail__panel"></div>
    <p>All Content Copyright &copy;{{ yr }} <credit>// site by <a href="//cruzat.media" target="_blank" class="sig">C<span>ruzat</span>.M<span>edia</span></a></credit></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const now = new Date();
const yr = now.getFullYear();

export default {

  data: function() {
    return {
      links: [],
      yr: yr,
    }
  }
}
</script>

<style lang="scss">

@import "../styles/global.scss";

$mcta: 32px;

.bottom-rail {
  @include railStyles();

  bottom: 0;
  justify-content: flex-start;
  flex-direction: row; // row-reverse;
  align-items: center;
  color: #fff!important;
  padding-top: $subRailHeight;
  z-index: 1;

  @include mFlipUp() {
    align-items: flex-end;
    justify-content: space-between;
  }

  @include mFlipDown() {
    // padding-bottom: 0.7rem;
    bottom: $mcta;
  }

  &__panel {
    @include mobileSubRailStyles();
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    @include mFlipUp() {
      display: none;
    }
  }

  * {
    // display: none!important;
  }

  p {
    font-size: 1rem;
    color: rgba(255,255,255,0.8); // color: rgba(0,0,0,0.2);

    @include mFlipDown() {
      line-height: 1.4;
      font-size: 0.8rem;
      padding-left: 12px; // 1rem;
    }
  }

  @keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  strong {
    font-weight: 400;
  }

  credit {
    @include mFlipDown('medium') {
      display: block;
    }
  }

  a {
    font-weight: 100;
    color: var(--white);
    opacity: 1;

    @include mFlipUp('medium') {
      display: inline-flex;
      align-items: flex-end;
      transition: color 0.2s;

      span {
        display: inline-block;
        max-width: 0;
        overflow: hidden;
        transition: max-width 0.2s;
      }

      &:hover {
        color: #fff;

        span {
          max-width: 2.4rem;
        }
      }

    }
  }

  svg {
    max-width: 50vw; //30rem;
    height: auto;
    opacity: 1;

    @keyframes appear {
      0% {
        max-width: 19rem;
        opacity: 0;
      }
    }
    path {
      fill: #fff;
    }
  }
}
</style>

