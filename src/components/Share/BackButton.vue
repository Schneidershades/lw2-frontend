<template>
	<q-btn 
		type="submit" 
    	unelevated 
    	color="primary" 
    	class="q-px-md q-ma-sm" 
    	size="md" 
    	label="Back" 
    	@click="hasHistory() ? $router.go(-1) : $router.push('/')" />

</template>


<script>

import { mapActions, mapGetters } from 'vuex'

export default {
	methods:{
		hasHistory () { 
        	return window.history.length > 2 
        },
	},
}
</script>