<template>
	<div class="q-pa-md">
		<div class="text-h6">Change Phone Number</div>
        You can verify your new phone number here
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

		    

		    <div>
		        <q-btn label="Submit" type="submit" color="primary"/>
		        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
		    </div>
	    </q-form>
			
	</div>
</template>

<script>

export default {
  	data () {
    	return {
      		password: '',
      		isPwd: true,
      		form:{
      			current_password: '',
      			new_password: '',
      			confirm_password: '',
      		}
    	}
  	},
  	computed: {
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
		onSubmit(){

		},

		onReset(){

		}
	}
}

</script>