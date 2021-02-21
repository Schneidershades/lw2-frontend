<template>
  <q-page padding>
  	<div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Security" />
      </q-breadcrumbs>
    </div>
    

    <div class="q-pa-md">
      <div class="q-gutter-y-md" >
        	<q-card>
        		<q-tabs
	        		v-model="tab"
	        		dense
	        		class="text-grey"
	        		active-color="primary"
	        		indicator-color="primary"
	        		align="justify"
	        		narrow-indicator
	        		>
	        		<q-tab name="mails" label="Change Phone Number" />
	        		<q-tab name="alarms" label="Change Password" />
	        		<q-tab name="movies" label="Change Email" />
	        	</q-tabs>

        	<q-separator />

        	<q-tab-panels v-model="tab" animated>
        		<q-tab-panel name="mails">
        			<ChangePhoneNumber/>
        		</q-tab-panel>

        		<q-tab-panel name="alarms">
        			<ChangePassword/>
        		</q-tab-panel>

        		<q-tab-panel name="movies">
        			<ChangeEmail/>
        		</q-tab-panel>
        	</q-tab-panels>
        </q-card>
	    </div>
    </div>
  </q-page>

</template>

<script>

import ChangePassword from 'components/User/ChangePassword.vue'
import ChangePhoneNumber from 'components/User/ChangePhoneNumber.vue'
import ChangeEmail from 'components/User/ChangeEmail.vue'

export default {
  	data () {
    	return {
      		tab: 'mails'
    	}
  	},

	components: {
		ChangePassword,
		ChangePhoneNumber,
		ChangeEmail
	}

}

</script>