<template>
    <q-page>
        <q-carousel
            arrows
            animated
            v-model="slide"
            height="550px"
            >
            <q-carousel-slide name="first" img-src="~assets/selected/slider1.jpg" class="column no-wrap flex-center">
              <SliderComponent/>
            </q-carousel-slide>
        </q-carousel>
        <div class="q-pa-md">
            <div class="q-px-lg">
                <schedule></schedule>
            </div>
        </div>
    </q-page>
</template>

<style  scoped>
  h4 {
      display: inline-block;
      border: 0 solid #e91e63;
      color: #c2185b;
      border-top-width: 3px;
      border-left-width: 10px;
      padding: 4px;
      font-weight: 700;
  }
</style>
<script>
  import Schedule from 'components/Schedule/Schedule.vue'
  import SliderComponent from 'components/Website/SliderComponent.vue'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        slide: 'first',
        tab: 'mails',
      }
    },
    components:{
      Schedule,
      SliderComponent,
    },
    computed: {
      ...mapGetters({
        allClasses: 'schedule/allClasses',
        user: 'auth/user',
      })
    },
    methods :{
      ...mapActions({
        getClasses: 'schedule/getClasses',
      }),
    },
    mounted(){
      this.getClasses()
    }
  }
</script>