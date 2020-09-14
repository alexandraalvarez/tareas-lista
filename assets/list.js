const app = new Vue({
    el: "#divList",
    data: {
        title: "Lista de tareas",
        subtitle: "Ingrese una tarea",
        tareas: ['Aprender JavaScript', 'comer lasaña']
    },
    methods: {
        add_tareas: function() {
            if(this.tarea !=""){
                this.tareas.push(this.tarea)
                this.tarea="";
            }
           
        }  
    }
})