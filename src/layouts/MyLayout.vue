<template>
  <q-layout view="hHh lpR fff">

    <q-header elevated class="bg-white" height-hint="100">
      <q-toolbar class="q-pl-xl text-primary">
          <q-toolbar-title >
            <q-img src="~assets/parkit_logo.png" spinner-color="white" style="height: 100px; max-width: 300px" @click="home"/>
          </q-toolbar-title>
          <div class="gt-sm">
              <template v-if="authenticated">
                  <q-btn flat color="primary" to="/user/dashboard" label="Dashboard" />
                  <q-btn flat color="primary" @click.prevent="signOut" label="Logout" />
              </template>
              <template v-else>
                  <q-btn flat color="primary" label="Sign In" @click="signInModal = true" />
                  <q-btn flat color="primary" label="Sign Up" @click="signUpModal = true" />
              </template>
          </div>

          <q-btn
              flat
              dense
              round
              @click="left = !left"
              icon="menu"
              aria-label="Menu"
              class="lt-md"
              />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" behavior="mobile" bordered>
      <template v-if="authenticated">
          <UserMenu/>
      </template>

      <template v-else>
          <q-list>
              <q-item-label header>Menu</q-item-label>
              <hr>
              <q-item clickable to="/">
                  <q-item-section avatar>
                      <q-icon name="home" />
                  </q-item-section>
                  <q-item-section>
                      <q-item-label>Home</q-item-label>
                  </q-item-section>
              </q-item>
              <q-item clickable @click="signInModal = true">
                  <q-item-section avatar>
                      <q-icon name="school" />
                  </q-item-section>
                  <q-item-section>
                      <q-item-label>Sign In</q-item-label>
                  </q-item-section>
              </q-item>
              <q-item clickable @click="signUpModal = true" >
                  <q-item-section avatar>
                      <q-icon name="code" />
                  </q-item-section>
                  <q-item-section>
                      <q-item-label>Sign Up</q-item-label>
                  </q-item-section>
              </q-item>
          </q-list>
      </template>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-dialog v-model="signInModal" v-if="!authenticated">
        <SignIn/>
    </q-dialog>

    <q-dialog v-model="signUpModal" v-if="!authenticated">
        <SignUp/>
    </q-dialog>

    <Footer/>

  </q-layout>
</template>


<style scoped>
    .header-box{
    position: absolute;
    top: 0;
    }
    .custom-caption{
    text-align: left;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, .5);
    height: -webkit-fill-available;
    padding: 220px 80px 75px;
    }
</style>

<script>
    
    import Footer from 'components/Website/Footer.vue'
    import SignUp from 'components/Website/SignUp.vue'
    import SignIn from 'components/Website/SignIn.vue'
    import UserMenu from 'components/Menus/UserMenu.vue'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'MyLayout',

        components:{
            Footer,
            SignUp,
            SignIn,
            UserMenu
        },
        
        data () {
            return {
                leftDrawerOpen: false,
                menu: false,
                menuOver: false,
                listOver: false,
                signInModal: false,
                signUpModal: false,
                left: false,
                right: false
            }
        },
        computed: {
            ...mapGetters({
                authenticated: 'auth/user',
            }),
            
        },

        mounted(){
            this.authenticated
        },

        methods:{
            ...mapActions({
              signOutAction: 'auth/signOut'
            }),

            signOut(){
                // console.log('ko')
                this.signOutAction().then(() => {
                    this.$router.replace({
                        name: 'home'
                    })
                })
            },
            home(){
              this.$router.replace({
                  name: 'home'
              })
            }
        }
    }
</script>