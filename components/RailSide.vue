<template>
  <div class="side-rail">
    <nuxt-link v-for="nav in sub" :key="nav.label" :to="nav.link">{{ nav.label }}</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    sub: Array
  }
})
</script>

<style scoped lang="scss">
@import "../styles/global.scss";
.side-rail {

  display: flex;
  font-size: var(--railSubSize);

  @include mFlipDown() {
    @include mobileSubRailStyles();
    position: fixed;
    bottom: calc(var(--railHeight) - #{$subRailHeight} + #{$mcta}); // calc(var(--railHeight) - 2.2rem);
    left: 0px;
    right: 0px;
    background: transparent;
    justify-content: center;
    align-items: center;
    // padding: 0.4rem;
    // border-top: 1px solid rgba(255,255,255,0.2);

  }

  @include mFlipDown('small') {
    // bottom: calc(var(--railHeight) + .4rem);
  }

  @include mFlipUp() {
    width: 17.4vw;
    flex-direction: column;
    align-content: flex-end;
    justify-content: flex-start;
    // height: 44vh;
    height: auto;
    border: 0px solid #fff;
    position: absolute;
    z-index: 1;
    top: 28vh;
    bottom: var(--railHeight);
    right: 0;

  }

  @include railLinks();

    a {
      // font-size: 50%;
      text-transform: lowercase;
      text-align: left;
      // color: var(--dim);

      + a {
        @include mFlipUp() {
          margin-top: 4vh;
          &:last-child {
            // margin-top: 12vh;
            position: absolute;
            bottom: 3px;
            left: 0;
            &.nuxt-link-exact-active {
              display: none;
            }
          }
        }
        @include mFlipDown() {
          margin-left: 1rem;
        }
      }

      &:last-child {
        color: rgba(255,255,255,0.5);
      }
    }


}
</style>
