<template>
	<q-page padding>
      <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Quiz" />
      </q-breadcrumbs>
    </div>

    <div class="q-pa-md">
        <div class="q-gutter-y-md" v-if="question!=null" >
          <template v-if="question.message==false">
            <div class="text-h6">Quiz has ended. Kindly prepare for next session</div>
            <q-btn to="/user/class-details" unelevated color="primary" class="q-px-md q-mt-lg" size="md" label="Back to class" />
          </template>
          <template v-if="question.question!=null">
            <div class="text-h6">{{question.question}}</div>
            <div class="col-lg-12 col-xm-12 col-md-12" v-if="question.options">
              <q-radio class="q-pr-sm" :disable="disableRadio" v-for="q in question.options" :key="q.if" dense v-model="form.multiple_choice_id" :val="q.id" :label="q.option" />
            </div>
            <template v-if="form.multiple_choice_id != null">
              <div class="showAnswer" v-if="showAnswer">
                <div v-if="question.correctAnswer.id == form.multiple_choice_id"><b>Right</b></div>
                <div v-else><b>Wrong</b></div>
              </div>
              <q-btn @click="clickShowAnswerBtn()" v-if="form.multiple_choice_id!=''" :disabled="showAnswerBtn" unelevated color="purple" class="q-px-md q-mt-lg q-mr-lg" size="md" label="Show Answer" />
              <q-btn @click="clicknextQuestionBtn(question)" :disabled="nextQuestionBtn" unelevated color="primary" class="q-px-md q-mt-lg" size="md" label="Next Question" />
            </template>
          </template>
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
        form: {
    		  quiz_id : null,
    		  multiple_choice_id : null,
    		  quiz_session_id : null
    		},
        disable: false,
        disableRadio: false,
        correct: null,
        showAnswerBtn: false,
        showAnswer: false,
        nextQuestionBtn: false,
        nextQuestion: false,
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/user',
        session: 'quiz/session',
        classSchedule: 'quiz/classSchedule',
        question: 'quiz/question',
      })
    },
    methods :{
      ...mapActions({
        quizQuestion: 'quiz/quizQuestion',
        quizAnswer: 'quiz/quizAnswer',
      }),
      clickShowAnswerBtn() {
      	this.disableRadio = true
      	this.showAnswer = true
      },
      clicknextQuestionBtn(item) {
      	this.form.quiz_id = item.id
      	this.form.quiz_session_id = this.session
      	console.log(this.form)

      	this.quizAnswer(this.form).then((res) => {
          this.disable = false
      		this.form.multiple_choice_id = null
	        this.disableRadio = false
	        this.showAnswerBtn = false
	        this.showAnswer = false
	        this.nextQuestionBtn = false
	        this.nextQuestion = false
        }).catch((error) => {
            this.disable = false
            this.errorMessages = error
            if(error){
            	console.log('wrong')
            }
        })

      	this.quizQuestion({ class_schedule_id: this.classSchedule, quiz_session_id: this.session})
      }
    },
    mounted(){
    	setTimeout(() => {
  			if(this.session == null && this.classSchedule == null){
  		      	return this.$router.push({name: 'userDashboard'})
  		    }
  		}, 5000)
    }
  }
</script>