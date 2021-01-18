<template>
  <div>
    <RailHead :spec="spec" />
    <RailFoot />
    <RailSide v-if="sub" :sub="sub" />
    <div class="content">
      <div class="container">
        <slot />
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
      sub: Array,
      spec: String
  }
});
</script>

<style lang="scss">
  @import "../styles/global.scss";
 .content {
   position: absolute;
   top: var(--railHeight);
   bottom: calc(var(--railHeight) + #{$mcta});
   display: block;
   justify-content: center;
   flex-direction: column;
   left: 0; right: 0;
   overflow-y: scroll;

   @include mFlipUp() {
     bottom: calc(var(--railHeight) * .8);
     border-bottom: 1px solid rgba(255,255,255,0.05);
     border-top: 1px solid rgba(255,255,255,0.1);
   }

   @include mFlipDown() {
      background: rgba(13, 79, 115, 0.6);
   }
 }
 .container {
   font-size: 100%;
   display: block;
   max-width: 48rem;
   margin-left: auto;
   margin-right: auto;
   position: relative;
   padding: 8vh 12px;
   min-height: calc(#{ var(--railHeight)} * 2);

   @include mFlipUp() {
     padding: 9vh 20px;
     width: 56vw; // 65.2vw;
     max-width: 48rem;
     display: table;
   }
 }
</style>
