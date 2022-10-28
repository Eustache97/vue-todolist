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
            //se la lunghezza del testo inserit è inferiore a 5
            if(this.newTask.text.length < 5){
                //flag = true
                this.hasError = true;
            }else{
                //altrimenti lo pushiamo nell'array
                this.tasks.push({...this.newTask});
                //resettiamo l'input e il flag a lo stato iniziale
                this.newTask.text = "";
                this.hasError = false;
            }        
        },
        taskDoneNotDone: function(taskIndex){
            //se done è false
            if(this.tasks[taskIndex].done === false){
                //diventa true
                this.tasks[taskIndex].done = true;
            }else{
                // altrimenti diventa false
                this.tasks[taskIndex].done = false;
            }
            console.log(this.tasks[taskIndex].done);
        },
        deleteTask: function(taskIndex){
            this.tasks.splice(taskIndex, 1);
        }
            
         }
}).mount("#app");