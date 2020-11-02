<template>
  <div class="player--base">
    <div v-bind:class="{ open: open }" class="player">
      <button class="player--cta" @click="open = !open">
        <span v-if="open">[- {{ label }} -]</span>
        <span v-if="!open">[+ {{ label }} +]</span>
      </button>
      <div class="player--frame">
        <iframe style="border: 0; width: 400px; height: 270px;" src="https://bandcamp.com/EmbeddedPlayer/album=2765602080/size=large/bgcol=333333/linkcol=3dc8ff/artwork=none/transparent=true/" seamless></iframe>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      open: false,
      label: "listen",
    }
  }
};
</script>

<style lang="scss">
@import "../styles/global.scss";

.player {

    $mcta: 32px;

    border-bottom: 0;
    display: block;
    position: absolute;
    bottom: 0; // var(--railHeight); // calc(#{var(--railHeight)} - 42px); //
    left: 0; // calc(50% - 24rem);
    width: 100%;
    transition: background .5s ease-in;
    z-index: 5;

    &.open {
      transition: background 0.25s ease-out;
      background: rgba(13, 79, 115, 0.9);
      @include mFlipUp('medium') {

      }
    }

    &--base {
      @include mFlipUp() {

      }
    }

    &--cta {
      outline: none;
      border: none;
      padding: 0;
      cursor: pointer;

      @include mFlipDown() {
        display: block;
        width: 100%;
        height: $mcta;
      }
    }

    &--frame {
      display: block;
      max-height: 0px;
      overflow: hidden;
      @include mFlipUp() {
        max-width: 0px;
        transition: all 0.5s ease-in;
      }
      @include mFlipDown() {
        transition: max-height 0.5s ease-in;
      }

      .player.open & {
        max-height: 290px;
        max-width: 400px;
        @include mFlipUp() {
          transition: max-width 0.3s ease-out;
        }
        @include mFlipDown() {
          transition: max-height 0.3s ease-out;
        }
      }
    }

    display: flex;
    flex-direction: column;

    @include mFlipDown() {
      top: auto;
      bottom: 0;
      text-align: center;
      background: rgba(13, 79, 115, 0.6);
      align-items: center;

      button {
        opacity: 0.6;
      }
    }

    @include mFlipUp('medium') {
      bottom: auto; // -290px; // 20px; // calc(#{var(--railHeight)} - 2rem); // var(--railHeight); //
      top: 0; // 20px;
      left: 0; // 20px;
      width: auto;
      align-items: flex-start;
      padding: 20px;
      right: auto; // calc(50vw - 220px); // auto; // 23.5vw;
      line-height: 1;
    }
  }

  iframe {
    margin-top: 0px;
    height: 0px;
    overflow: hidden;
    display: block;
    max-width: 100vw;
    @include mFlipUp() {
      margin-top: 20px;
    }
  }
  button {
    font-size: 1rem;
    background: transparent;
    color: #fff;
  }
</style>
