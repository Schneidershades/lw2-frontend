<template>
  <q-page padding>
      <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Dashboard" />
      </q-breadcrumbs>
    </div>

    <div class="q-pa-md">
        <div class="q-gutter-y-md">
            <schedule></schedule>
        </div>
    </div>

  </q-page>

</template>

<style  scoped>
    .absolute-bottom{
      text-align: left;
      padding: 12px;
      color: white;
      background-color: rgba(0, 0, 0, .5);
      height: -webkit-fill-available;
      padding: 220px 80px 75px;
    }
</style>

<script>
  import Schedule from 'components/Schedule/Schedule.vue'
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
        getClasses: 'schedule/getClasses',
      }),
    },
    mounted(){
      this.getClasses()
    }
  }
</script>