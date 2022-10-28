const { createApp } = Vue
createApp({
    data() {
        return{
            tasks: [],
            newTask:{
                    text:"",
                    done: false
                    },
            hasError: false
            
        }

    },
    methods: {

        addNewTask: function(){
            if(this.newTask.text.length < 5){
                this.hasError = true;
            }else{
                this.tasks.push({...this.newTask});
                this.newTask.text = "";
                this.hasError = false;
            }        
        },
        taskDoneNotDone: function(taskIndex){
            if(this.tasks[taskIndex].done === false){
                this.tasks[taskIndex].done = true;
            }else{
                this.tasks[taskIndex].done = false;
            }
            console.log(this.tasks[taskIndex].done);
        }
        // deleteTask: function(){
            
         }
}).mount("#app");