<template>
	<div class="dd">
		<div class="q-pa-sm row items-start q-gutter-md">
	    <h4 class="header-text">Take Classes </h4>
		</div>
		<div class="row" v-if="allClasses">
      <div class="col-md-3 q-ma-sm" v-for="c in allClasses" :key="c.id" style="width: 400px">
        <q-card flat bordered class="my-card bg-grey-1" >
		      <q-card-section>
		        <div class="row items-center no-wrap">
		          <div class="col">
		            <div class="text-h6">{{c.name}}</div>
		            <div class="text-subtitle2">{{c.excerpt}}</div>
		          </div>
		        </div>
		      </q-card-section>

		      <q-card-section>
		        {{ c.description }}
		      </q-card-section>

		      <q-separator />

		      <q-card-actions>
		        <q-btn flat v-if="!user">Sign In to Take Quiz</q-btn>
		        <q-btn flat v-else @click="classDetailsBtn(c)">View Class Details</q-btn>
		        <template v-if="user.role == 'Instructor'">
		        	<q-btn flat @click="viewScheduleScoresBtn(c)" v-if="$can('show', 'score')">View Scores</q-btn>
		        </template>
		      </q-card-actions>
		    </q-card>
      </div>
    </div>
	</div>
</template>

<style scoped>

.header-text {
  	display: inline-block;
  	border: 0 solid #e91e63;
  	color: #c2185b;
  	border-top-width: 3px;
  	border-left-width: 10px;
  	padding: 4px;
  	font-weight: 700;
}

.my-card{
	/*width: 300px;*/
}

.card-style{
	height: 200px;
}

.card-amount{
	padding: 0;
}

.card-style-action{
	bottom: 0;
}

.vehicle-cbs{
	flex-grow: 1;
	flex-basis: 140px;
	height: 147px;
	cursor: pointer;
	padding-top: 20px;
	border-width: 1px;
	border-style: solid;
	text-align: center;
	margin: 0px 6px 12px 6px;	
}

.cbs-vehicle-list{
	display: flex;
	flex-wrap: wrap;
	margin: auto;
	padding: 10px 50px;
}

.q-icon, .material-icons, .material-icons-outlined, .material-icons-round, .material-icons-sharp{
	height: 60px;
	width: 60px;
	font-size: 60px;
}

</style>


<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        allClasses: 'schedule/allClasses',
        user: 'auth/user',
      })
    },
    methods :{
      ...mapActions({
        getClasses: 'schedule/getClasses',
        selectedClass: 'schedule/selectedClass',
      }),
      classDetailsBtn(item) {
      	this.selectedClass(item)
      	this.$router.push({name: 'classDetails'})
      },
      viewScheduleScoresBtn(item){
      	this.selectedClass(item)
      	this.$router.push({name: 'classScheduleScores'})
      }
    },
    mounted(){
      this.getClasses()
    }
  }
</script>

