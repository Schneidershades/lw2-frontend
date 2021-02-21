<template>
  <div class="absolute-bottom custom-caption">
      <q-dialog v-model="signInModal">
          <SignIn/>
      </q-dialog>

      <q-dialog v-model="signUpModal">
          <SignUp/>
      </q-dialog>
  </div>
</template>


<style  scoped>
    .custom-caption{
      text-align: left;
      padding: 12px;
      color: white;
      background-color: rgba(0, 0, 0, .5);
      height: -webkit-fill-available;
      padding: 200px 80px 75px;
    }
</style>
<script>
    import SignUp from 'components/Website/SignUp.vue'
    import SignIn from 'components/Website/SignIn.vue'
    import { mapActions, mapGetters } from 'vuex'
    export default {
      data () {
        return {
          slide: 'first',
          tab: 'mails',
          signInModal: false,
          signUpModal: false,
        }
      },
      components:{
        SignUp,
        SignIn,
      },
      computed: {
        ...mapGetters({
          user: 'auth/user',
        })
      }       
    }
</script>