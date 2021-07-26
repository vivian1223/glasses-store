const app = {
    data() {
        return {
        index:true,
        optical:false,
        sunglasses: false
    }},
    methods: {
        showIndex(){
            this.index = true;
            this.optical = false;
            this.sunglasses = false;
        },
        showOptical(){
            this.optical = true
            this.index = false;
            this.sunglasses = false;
        },
        showSunglasses(){
            this.sunglasses = true;
            this.index = false;
            this.optical = false
        }
    }
}

Vue.createApp(app).mount('#app')