const app = {
    data() {
        return {
        index:true,
        optical:false,
        sunglasses: false,
        products:[
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-1.png",
                id:"BJ41600S",
                price:3490
            },
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-2.png",
                id:"BJ41600S",
                price:3490
            },
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-3.png",
                id:"BJ41600S",
                price:3490
            },
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-4.png",
                id:"BJ41600S",
                price:3490
            },
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-5.jpg",
                id:"BJ41600S",
                price:3490
            },
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-6.jpg",
                id:"BJ41600S",
                price:3490
            },
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-7.jpg",
                id:"BJ41600S",
                price:3490
            },
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-8.jpg",
                id:"BJ41600S",
                price:3490
            },
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-8.jpg",
                id:"BJ41600S",
                price:3490
            },
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-7.jpg",
                id:"BJ41600S",
                price:3490
            },
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-6.jpg",
                id:"BJ41600S",
                price:3490
            },
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-5.jpg",
                id:"BJ41600S",
                price:3490
            }
        ],
        sunglassesList:[
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-2.png",
                id:"BJ41600S",
                price:3490
            },
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-3.png",
                id:"BJ41600S",
                price:3490
            },
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-4.png",
                id:"BJ41600S",
                price:3490
            },
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-4.png",
                id:"BJ41600S",
                price:3490
            },
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-3.png",
                id:"BJ41600S",
                price:3490
            },
            {
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-2.png",
                id:"BJ41600S",
                price:3490
            }
        ]
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