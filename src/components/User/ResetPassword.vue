<template>
    <q-card-section>
        <q-card-actions align="center">
            <img src="~assets/parkit_lm_logo.png" alt="Parkit Location Manager" width="300">
        </q-card-actions> 
        <q-stepper
          v-model="step"
          header-nav
          ref="stepper"
          color="primary"
          animated
          flat
        >
            <q-step
                :name="1"
                title="Your phone number"
                icon="settings"
                :done="step > 1"
                :header-nav="step > 1"
              >
                <q-form
                  @submit="submitPhone"
                  class="q-gutter-md"
                >
                   <q-input
                        filled
                        prefix="+234"
                        v-model="form.phone"
                        label="Phone Number"
                        mask="(###) ### - ####"
                        unmasked-value
                        hint="Hint : (703) 749 - 5705"
                        lazy-rules
                        :rules="[val => !!val || '* Required', val => val && val.length > 0 || 'Please type in your phone number']"
                        />

                    <q-stepper-navigation>
                        <q-btn type="submit" color="primary" label="Continue" />
                    </q-stepper-navigation>
                </q-form>
            </q-step>

            <q-step
                :name="2"
                title="Enter Otp received"
                icon="create_new_folder"
                :done="step > 2"
                :header-nav="step > 2"
              >
                <q-form
                  @submit="submitPhone"
                  class="q-gutter-md"
                >
                    Kindly provide your OTP Code.
                    <q-input
                        filled
                        prefix="G-"
                        v-model="otpCode"
                        label="Phone Number"
                        mask="####"
                        unmasked-value
                        hint="Hint : 5705"
                        lazy-rules
                        :rules="[val => !!val || '* Required', val => val && val.length > 0 || 'Please type in your phone number']"
                        />

                    <q-stepper-navigation>
                        <q-btn @click="submitOTP" color="primary" label="Continue" />
                        <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
                    </q-stepper-navigation>
                </q-form>
            </q-step>

            <q-step
                :name="3"
                title="Phone number"
                icon="add_comment"
                :header-nav="step > 3"
              >
                <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >

                    <div class="row">
                        <div class="col-12 q-pa-sm">
                            <q-input filled
                                v-model="form.current_password"
                                label="Your current password"
                                v-bind:type="isPwd ? 'password' : ''"
                                lazy-rules
                                v-bind:rules="ConfirmPWD"
                                ref="fldPasswordChangeConfirm">
                                <template v-slot:append>
                                    <q-icon :name="isPwd ? 'visibility_off' : 'visibility'"
                                            class="cursor-pointer"
                                            v-on:click="isPwd = !isPwd"></q-icon>
                                </template>
                            </q-input>
                        </div>
                        <div class="col-12 q-pa-sm">
                            <q-input filled
                                v-model="form.new_password"
                                label="Create a password"
                                v-bind:type="isPwd ? 'password' : ''"
                                lazy-rules
                                v-bind:rules="Required"
                                ref="fldPasswordChange">
                                <template v-slot:append>
                                    <q-icon :name="isPwd ? 'visibility_off' : 'visibility'"
                                            class="cursor-pointer"
                                            v-on:click="isPwd = !isPwd"></q-icon>
                                </template>
                            </q-input>
                        </div>

                        <div class="col-12 q-pa-sm">
                            <q-input filled
                                v-model="form.password_confirmation"
                                label="Confirm your password"
                                v-bind:type="isPwd ? 'password' : ''"
                                lazy-rules
                                v-bind:rules="ConfirmPWD"
                                ref="fldPasswordChangeConfirm">
                                <template v-slot:append>
                                    <q-icon :name="isPwd ? 'visibility_off' : 'visibility'"
                                            class="cursor-pointer"
                                            v-on:click="isPwd = !isPwd"></q-icon>
                                </template>
                            </q-input>
                        </div>
                    </div>

                    <q-stepper-navigation>
                        <q-btn label="Submit" type="submit" color="primary"/>
                        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                        <q-btn color="primary" @click="submitNewUser" label="Change Password" />
                        <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
                    </q-stepper-navigation>
                </q-form>
            </q-step>
        </q-stepper>
    </q-card-section>
</template>



<script>
    
    import { mapActions, mapGetters } from 'vuex'
    import { Notify } from 'quasar'

    export default{
        data(){
            return{
                otpCode: '',
                errorMessages: [],
                error: '',
                form : {
                    phone : ''
                },
                step: 1, 
            }
        },

        computed: {
            ...mapGetters({
                message: 'message',
                errorMessage: 'errorMessage',
                newPhoneNumber: 'auth/phone',
            }),

            ConfirmPWD() {
                return [
                    (v) => !!v || "Choose a password",
                    (v) => v == this.$refs.fldPasswordChange.value || "Password does not match"
                 ]
            },
            Required() {
                return [(v) => !!v || 'Choose a password']
            }
        },
            
        methods:{
            ...mapActions({
              stepOneValidation: 'auth/sendPhoneNumber',
              stepTwoValidation: 'auth/verifyOTP',
              stepThreeValidation: 'auth/signUp',
            }),

            submitPhone(){
                // this.stepOneValidation(this.form).then((res) => {
                //     this.newUser.phone = "234"+this.newPhoneNumber.phone
                //     return this.step = 2 
                // })
                // .catch((error) => {
                //     this.errorMessages = error
                //     console.log(this.errorMessages)
                //     if(this.errorMessages.phone){
                //         this.negativeNotification(error.phone[0])
                //     }
                //     if(this.errorMessages){
                //         this.negativeNotification(this.errorMessages)
                //     }
                // })               
            },

            submitOTP(){
                // this.stepTwoValidation({
                //     phone : this.newPhoneNumber.phone,
                //     otp: this.otpCode,
                // }).then((res) => {
                //     return this.step = 3
                // })
                // .catch((error) => {
                //     console.log(error)
                //     this.errorMessages = error
                //     if(error){
                //         this.negativeNotification(error.error)
                //     }
                // })
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