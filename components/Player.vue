<template>
  <div class="player--base">
    <div v-bind:class="{ open: open }" class="player">
      <button class="player--cta" @click="open = !open">
        <img src="/cassette01.png" />
        <div>
          <span v-if="open">{{ labelOn }}</span>
          <span v-if="!open">{{ labelOff }}</span>
        </div>

        <!---->
      </button>
      <div class="player--frame">
        <iframe style="border: 0; width: 400px; height: 270px;" src="https://bandcamp.com/EmbeddedPlayer/album=2765602080/size=large/bgcol=333333/linkcol=3dc8ff/artwork=none/transparent=true/" seamless></iframe>
      </div>
    </div>
  </div>
</template>

<script>

function togglePlayer() {
  open = !open;
}

export default {
  // props: {
  //   open: Boolean
  // },
  data: function() {
    return {
      open: true,// open,
      labelOff: "show",
      labelOn: "hide",
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
      display: flex;
      justify-content: center;
      align-items: center;
      outline: none;
      border: none;
      padding: 0;
      cursor: pointer;
      font-size: 1.4rem; // var(--railSubSize); //
      font-family: "Nunito";
      text-transform: uppercase;
      text-shadow: 0 2px 2px rgba(0,0,0,0.5);
      font-weight: 100;
      // height: var(--railHeight);
      // margin: -20px 0 -60px;
      // transition: all 0.5s ease-in;
      // opacity: 0.8;

      $imgsz: var(--cassetteW); // 90px;

      img {
          width: calc(var(--cassetteW) * 2);
          height: var(--cassetteW);
          transition: all 0.5s ease-in;
          margin: 0 0 2rem -140px;
          object-fit: contain;
          position: relative;
          z-index: 1;
          transform: rotate(-20deg);
          .player.open & {
            transform: rotate(18deg);
            margin-left: -90px;
            margin-bottom: -40px;
          }

          @include mFlipDown() {
            margin: -2rem -30vw 0 0;
            transform: rotate(20deg);

            .player.open & {
              margin: -1.6rem -30vw 0 0;
              transform: rotate(-10deg);
            }

          }

      }

      > div {
        position: relative;
        z-index: 2;
        font-size: 0.8rem;
        letter-spacing: 0.05rem;
        background: var(--white);
        color: #004e98; // var(--spark); // rgba(0,0,0,0.6);
        text-shadow: none;
        font-weight: 400;
        font-family: "Rubik";
        transition: all 0.5s ease-in;
        margin-left: -30px;
        white-space: nowrap;
        padding: 2px 6px;

        span {
          display: block;
        }
      }

      .player.open & {
        //transition: all 0.3s ease-out;
        //height: auto;
        //margin: 0;

        >div {
          background: #004e98;
          color: var(--white);
          transition: all 0.3s ease-out;
        //  margin-left: -20px;
        }

        img {
          // max-width: 7rem;
          width: calc(var(--cassetteW) * 1.6);
          height: calc(var(--cassetteW) * 0.8);
          transition: all 0.3s ease-out;
          // margin-bottom: 0;
        }
      }

      @include mFlipDown() {
        width: 100%;
        height: $mcta;
        margin: 0;
        font-size: 1rem;
        font-weight: 400;

        > div {
          position: absolute;
          display: inline-block;
          width: auto;
          padding: 0 4px;
          margin: 0;
          right: calc(50% - 4vw);
          top: 8px; // calc(50% - 9px);
          .player.open & {
            right: calc(50% - 8vw);
          }
        }
      }

      @include mFlipUp() {
        position: absolute;
        left: 100%;
        bottom: 20px;
      }
    }

    &--frame {
      display: block;
      max-height: 0px;
      overflow: hidden;
      @include mFlipUp() {
        max-height: 290px;
        max-width: 0px;
        transition: max-width 0.5s ease-in;
      }
      @include mFlipDown() {
        transition: max-height 0.5s ease-in;
      }

      .player.open & {
        max-height: 290px;
        max-width: 400px;
        @include mFlipUp() {
          transition: all 0.3s ease-out;
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
        // opacity: 0.6;
      }
    }

    @include mFlipUp('medium') {
      bottom: 0; // auto; // -290px; // 20px; // calc(#{var(--railHeight)} - 2rem); // var(--railHeight); //
      top: auto; // 0; // 20px;
      left: 0; // 20px;
      width: auto;
      align-items: flex-start;
      padding: 0px;
      right: auto; // calc(50vw - 220px); // auto; // 23.5vw;
      line-height: 1;
      flex-direction: row-reverse;
      align-items: flex-end;
    }
  }

  iframe {
    margin-top: 0px;
    height: 0px;
    overflow: hidden;
    display: block;
    max-width: 100vw;
    @include mFlipUp() {
      // margin-top: 20px;
    }
  }
  button {
    font-size: 1rem;
    background: transparent;
    color: #fff;
  }
</style>
