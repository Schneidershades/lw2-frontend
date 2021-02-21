<template>
    <q-card flat style="width: 500px; max-width: 80vw;" class="q-pa-md">
        <q-card-section>
            <q-card flat class="my-card">
                <q-card-section>
                    <q-card-actions align="center">
                        <img src="~assets/parkit_logo.png" align="center" alt="Parkit Home service" width="200">
                    </q-card-actions>

                    <q-banner dense rounded inline-actions v-if="message" class="q-my-lg text-white bg-red">
                        {{message}}
                    </q-banner>
                </q-card-section>

                <q-form class="q-gutter-md" @submit="loginEmailUser" ref="form">

                    <q-input
                        filled
                        type="email"
                        v-model="emailForm.email"
                        label="Email Address"
                        unmasked-value
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type in your email address']"
                        />


                    <q-input
                        filled
                        v-model="emailForm.password"
                        :type="isPwd ? 'password' : 'text'"
                        label="Password"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type in your password']"
                        >
                        <template v-slot:append>
                            <q-icon
                                :name="isPwd ? 'visibility_off' : 'visibility'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                                />
                        </template>
                    </q-input>

                    <q-card-actions align="center">
                        <q-btn type="submit" unelevated color="primary" size="lg" class="full-width" label="Login" :disable="disable"/>
                    </q-card-actions>
                </q-form>
            </q-card>
        </q-card-section>
    </q-card>
</template>

<script>
    import router from '../../router/index';
    import { mapActions, mapGetters } from 'vuex'
    import { Notify } from 'quasar'

    export default{
        data(){
            return{
                emailForm: {
                    email: '',
                    password: ''
                },

                isPwd: true,
                tab: 'one',
                disable: false
            }
        },
        computed: {
            ...mapGetters({
                message: 'message',
            })
        },
        methods:{
            ...mapActions({
              login: 'auth/login',
            }),

            loginEmailUser(){
                this.disable = true
                this.login(this.emailForm).then((res) => {
                    this.positiveNotification('Welcome!! you are now logged in')
                    this.disable = false
                    return this.$router.push({name: 'userDashboard'})
                }).catch((error) => {
                    // console.log(error)
                    this.disable = false
                    this.errorMessages = error
                    if(error){
                        this.negativeNotification(error.error)
                    }
                })
            },

            positiveNotification(message){
                Notify.create({
                    type: 'positive',
                    color: 'positive',
                    timeout: 3000,
                    position: 'center',
                    message: message
                })
            },

            negativeNotification(error){
                Notify.create({
                    type: 'negative',
                    color: 'negative',
                    timeout: 3000,
                    position: 'center',
                    message: error
                })
            },
        }
    }
</script>
