<template>
	<q-page padding>
      	<div class="q-pa-md q-gutter-sm">
	      	<q-breadcrumbs>
		        <q-breadcrumbs-el label="Home" />
		        <q-breadcrumbs-el label="Scores"/>
	      	</q-breadcrumbs>
	    </div>

	    <div class="q-pa-md">
	        <div class="q-gutter-y-md">
	            <div class="f">
					<q-table
					    title="Scores"
					    :columns="columns"
					    row-key="name"
					    :data="scores"
					    :pagination.sync="pagination"
				      	:filter="filterModel"
					    >
				    	<template v-slot:top-right>
					        <q-input borderless dense debounce="300" v-model="filterModel" placeholder="Search">
					          <template v-slot:append>
					            <q-icon name="search" v-model="filterModel"/>
					          </template> 
					        </q-input>
				      	</template>

					    <template slot="body" slot-scope="props">
					      	<q-tr :props="props">
					      		<q-td key="user" :props="props">{{props.row.user}}</q-td>
					      		<q-td key="scores" :props="props">{{ props.row.session}}</q-td>
					      		<q-td key="session" :props="props">{{ props.row.score ? props.row.score : 0 }}</q-td>
					      	</q-tr>
					    </template>
				    </q-table>
				</div>
	        </div>
	    </div>
  	</q-page>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
	data () {
		return {
		    venueLists : [
		    	'parkit-location',
		    	'home-office'
		    ],

      		createModel: null,

		    filterModel: '',

			separator: 'cell',

			pagination: {
		        rowsPerPage: 30,
		        page: 1
		    },

		    text: '',
		    columns: [
		       	{
		          	name: 'user',
		          	align: 'left',
		          	label: 'user',
		          	field: 'user',
		          	sortable: true
		       	},
		       	{
		          	name: 'scores',
		          	align: 'left',
		          	label: 'Scores',
		          	field: 'score',
		          	sortable: true
		       	},
		       	{
		          	name: 'session',
		          	align: 'left',
		          	label: 'Session',
		          	field: 'session',
		          	sortable: true
		       	},
		    ],
		}
	},
	computed: {
        ...mapGetters({
            scores: 'quiz/scores',
        	selectedClass: 'schedule/selectedClass',
        }),
    },

	methods:{
		...mapActions({
			quizScores: 'quiz/quizScores',
		}),
	},
	mounted (){
		if(this.selectedClass==null){
	      	return this.$router.push({name: 'userDashboard'})
	    }
		this.quizScores(this.selectedClass.id)
	},
}
</script>