<template>
	<q-layout view="hHh lpR lfr">
        <q-header bordered  style="background-color:white; height:100px;">
            <q-toolbar class="q-pl-xl text-primary">
            	<q-btn
                    flat
                    dense
                    round
                    @click="leftDrawerOpen = !leftDrawerOpen"
                    icon="menu"
                    aria-label="Menu"
                    class="lt-xl"
                    />
                <q-toolbar-title clickable to="/" >
                    <q-img src="~assets/parkit_logo.png" spinner-color="white" style="height: 120px; max-width: 300px" @click="home"/>
                </q-toolbar-title>
            </q-toolbar>
        </q-header>
        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            content-class="bg-white-2"
            class="lt-xl"
            >
            <UserMenu/>
        </q-drawer>

        <q-drawer v-model="right" side="right" behavior="mobile" bordered>
        </q-drawer>


        <q-page-container class="page-con">
            <router-view />
        </q-page-container>
    </q-layout>
</template>


<script>
    import UserMenu from 'components/Menus/UserMenu.vue'

    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'User',

        components:{
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
                right: false
            }
        },
        computed: {
            ...mapGetters({
                authenticated: 'auth/user',
            }),
        },

        methods:{
            ...mapActions({
              signOutAction: 'auth/signOut',
            }),

            signOut(){
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
        },
    }
</script>