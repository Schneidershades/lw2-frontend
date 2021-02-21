<template>
	<q-page padding>
	  	<div class="q-pa-md q-gutter-sm">
	      	<q-breadcrumbs>
	        	<q-breadcrumbs-el label="Home" />
	        	<q-breadcrumbs-el label="Profile" />
	      	</q-breadcrumbs>
	    </div>

	    <div class="q-pa-md">
	        <div class="q-gutter-y-md" >
	        	<q-card>
			        <q-card-section>
			            <div class="text-h6 text-center">My Profile</div>
			        </q-card-section>

			        <q-card-section >            
			            <div class="q-pa-md">
			            	<!-- {{user}} -->
			                <!-- <div class="bg-primary">{{message}}</div> -->
							<q-form
	                            @submit="updateProfile"
	                            class="q-gutter-md"
	                            ref="form"
	                        >
	                        	<div class="row">
		                            <div class="col-md-6 q-pa-sm">
		                                <q-input
		                                    ref="name"
		                                    filled
		                                    :dense="dense"
		                                    label="Your First Name *"
		                                    hint="Please insert your first name"
		                                    lazy-rules
		                                    :rules="[ val => val && val.length > 0 || 'Please in your first name']"
		                                    :readonly="readonly"
		                                    v-model="form.first_name"
		                                />
		                            </div>

		                            <div class="col-md-6 q-pa-sm">
		                                <q-input
		                                    ref="name"
		                                    filled
		                                    :dense="dense"
		                                    label="Your Last Name *"
		                                    lazy-rules
		                                    :rules="[ val => val && val.length > 0 || 'Please in your last name']"
		                                    :readonly="readonly"
		                                    v-model="form.last_name"
		                                />
		                            </div>

		                            <div class="col-md-6 q-pa-sm">
		                                <q-input
		                                    ref="name"
		                                    filled
		                                    dense
		                                    label="Your Email *"
		                                    lazy-rules
		                                    :rules="[ val => val && val.length > 0 || 'Please in your email']"
		                                    :readonly="readonly"
		                                    v-model="form.email"
		                                />
		                            </div>
		                        </div>

		                        <q-card-actions align="left">
						          	Toggle to Edit Profile <q-toggle color="warning" v-model="readonly" label="Disable" />
							    </q-card-actions>  

							    <q-card-actions align="right">
						            <q-btn type="submit" label="Save Profile" color="white" text-color="primary" :disable="readonly"/>
						        </q-card-actions>
	                        </q-form>
			            </div>
			        </q-card-section>
			    </q-card>
		    </div>
	    </div>
	</q-page>
</template>


<script>
    
    import { mapActions, mapGetters } from 'vuex'
    import { Notify } from 'quasar'
    import { Date } from 'quasar'

    export default{
        data(){
            return{
                form: {
                    first_name: '',
                    last_name: '',
                    email: '',
                },

                sexOptions: '',

                errorMessages: [],
                error: '',
                step: 1,
                dense: false,
                isPwd: true, 
                readonly: true,
                disable: true,
                disableRadio: true,
      			userSex: null,   
            }
        },

        computed: {
            ...mapGetters({
                message: 'message',
                errorMessage: 'errorMessage',
                newPhoneNumber: 'auth/phone',
                authenticated: 'auth/user',
            }),
        },
            
        methods:{
            ...mapActions({
              	profileData: 'auth/updateProfile',
            }),

            updateProfile(){

            	if(this.sexOptions == null){
            		this.form.sex = ''
            	}

            	if(this.sexOptions == false){
            		this.form.sex = 'male'
            	}

            	if(this.sexOptions == true){
            		this.form.sex = 'female'
            	}

                this.profileData(this.form).then((res) => {
                    this.positiveNotification('Your profile has been updated')
                	this.disable=true
                }).catch((error) => {
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
        },
        mounted(){
        	if(this.authenticated){
        		this.form.first_name = this.authenticated.first_name
        		this.form.last_name = this.authenticated.last_name
        		this.form.email = this.authenticated.email
        		this.form.phone = this.authenticated.phone
        		this.form.dob = this.authenticated.dob

        		if(this.authenticated.sex == 'male'){
        			this.sexOptions = false
        		}
        		if(this.authenticated.sex == 'female'){
        			this.sexOptions = true
        		}
        		if(this.authenticated.sex == '' || this.authenticated.sex == null){
        			this.sexOptions = null
        		}
        		
        	}
        }
    }
</script>