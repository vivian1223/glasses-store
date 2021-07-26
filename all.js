const app = {
    data() {
        return {
        index:true,
        optical:false,
    }},
    methods: {
        showIndex(){
            this.index = true;
            this.optical = false
        },
        showOptical(){
            this.optical = true
            this.index = false;
        }
    }
}

Vue.createApp(app).mount('#app')