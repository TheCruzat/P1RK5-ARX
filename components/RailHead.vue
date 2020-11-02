 <template>
   <div class="top-rail">
     <div class="years">

       <nuxt-link v-for="yr in yrs" :key="yr" v-if="spec" :to="'/'+yr+'/'+spec">{{ yr }}</nuxt-link>
       <nuxt-link v-for="yr in yrs" :key="yr" v-if="spec == undefined" :to="'/'+yr+'/'">{{ yr }}</nuxt-link>

     </div>
     <strong><nuxt-link to="/">ARX<span> // P1RK5</span></nuxt-link></strong>
   </div>
 </template>

 <script>
 export default {
   props: {
     spec: String,
   },
   data: function() {
     return {
       yrs: [
         '1994',
         '1999',
         '2009',
         '2019'
       ]
     }
   }
 }
 </script>

 <style scoped lang="scss">
  @import "../styles/global.scss";
  .top-rail {

    * {

    }

    @include railStyles();

    z-index: 2;
    .years {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;

      @include mFlipDown() {
        margin-top: 0.4rem;
        @include mobileSubRailStyles();
      }
      a {
        font-size: var(--railSubSize);

        font-weight: 100;
        margin-right: 1.2rem;
        &:nth-child(4) {
          @include mFlipDown() {
            margin-right: 0;
          }
        }
        @include mFlipUp() {
          margin-right: 4vw;
        }
        @include mFlipDown() {
          padding: 0.2rem 0;
        }
      }
    }
    @include mFlipDown() {
      flex-direction: column-reverse;
      justify-content: flex-start;
    }
    @include mFlipUp() {
      top: 0;
      justify-content: flex-end;

    }
    strong, strong a {
      font-weight: 100;
      line-height: 1;
      font-size: var(--railTitleSize);
      text-align: left;
      font-family: "Nunito";
      @include mFlipUp() {
        display: block;
        width: 15.8vw;

        span {
          display: none;
        }
      }
      @include mFlipUp('large') {
        width: 16.4vw;
      }
    }

    a {
      font-weight: 400;
    }

  }
 </style>

