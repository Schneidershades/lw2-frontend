<template>
	<q-list>

        <q-item-label header>Menu</q-item-label>

        <q-item clickable to="/">
            <q-item-section avatar>
                <q-icon name="subdirectory_arrow_left" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Back to Website</q-item-label>
            </q-item-section>
        </q-item>
        <template v-if="authenticated">
            <template v-if="authenticated.role == 'Admin'">
                <q-item clickable to="/web/admin/dashboard" >
                    <q-item-section avatar>
                        <q-icon name="switch_right" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Switch To Admin Dashboard</q-item-label>
                    </q-item-section>
                </q-item>
            </template>
        </template>
        <q-item clickable to="/user/dashboard/">
            <q-item-section avatar>
                <q-icon name="business" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Dashboard</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable to="/user/profile">
            <q-item-section avatar>
                <q-icon name="person" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Profile</q-item-label>
            </q-item-section>
        </q-item>

        <q-item clickable @click.prevent="signOut">
            <q-item-section avatar>
                <q-icon name="logout" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Logout</q-item-label>
            </q-item-section>
        </q-item>
    </q-list>
</template>


<script>

    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'User',

        components:{

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
                cart: 'shopping/cart',
                cartItemCount: 'shopping/cartItemCount',
                cartTotal: 'shopping/cartTotal',
                authenticated: 'auth/user',
            }),
            
            carTotalLength(){
                return "Cart (" + this.cartItemCount + ") - ₦" + this.cartTotal
            }
        },


        methods:{
            ...mapActions({
              removeProductFromCart: 'shopping/removeProductFromCart',
              removeAllProductFromCart: 'shopping/removeAllProductFromCart',
              signOutAction: 'auth/signOut'
            }),

            signOut(){
                this.signOutAction().then(() => {
                    this.$router.replace({
                        name: 'home'
                    })
                })
            }
        }
    }
</script>