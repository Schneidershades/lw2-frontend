<template>
	<q-page padding>
      <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Dashboard" />
      </q-breadcrumbs>
    </div>

    <div class="q-pa-md">
        <div class="q-gutter-y-md">
        	<div class="text-h5">{{selectedClass.name}}</div>
        	<p><i>{{selectedClass.excerpt}}</i></p>
        	<p>{{selectedClass.description}}</p>

        	<q-btn @click="startQuizSessionBtn(selectedClass)" unelevated color="primary" class="q-px-md" size="md" label="Take Quiz" />
        </div>
    </div>
  </q-page>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        slide: 'first',
        tab: 'mails',
        disable: false,
      }
    },
    computed: {
      ...mapGetters({
        selectedClass: 'schedule/selectedClass',
        user: 'auth/user',
        question: 'quiz/question',
      })
    },
    methods :{
      ...mapActions({
        getClasses: 'schedule/getClasses',
        // selectedClass: 'schedule/selectedClass',
        startQuizSession: 'quiz/startQuizSession',
      }),
      startQuizSessionBtn(item) {
      	(async () => {
            this.startQuizSession({ class_schedule_id : item.id }).then((res) => {
	            this.disable = false
	            return this.$router.push({name: 'quiz'})
	        }).catch((error) => {
	            this.disable = false
	            this.errorMessages = error
	            if(error){
	            	console.log('wrong')
	            }
	        })
        })();
      }
    },
    mounted(){
      if(this.selectedClass==null){
      	this.$router.push({name: 'userDashboard'})
      }
    }
  }
</script>