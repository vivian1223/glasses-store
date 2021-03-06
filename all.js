
const app = {
    data() {
        return {
        index:true,
        optical:false,
        sunglasses: false,
        store:false,
        faq:false,
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
                imageUrl:"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/products-2.png",
                id:"BJ41600S",
                price:3490
            }
        ],
        storeList:[
            {
                city:'?????????',
                name:'?????????????????????',
                tel:'(02)000-1234',
                businessHours:'10:00-21:00',
                address:'??????????????????????????????25???2-1???',
                imageUrl:'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/locate1.jpeg',
            },
            {
                city:'?????????',
                name:'?????????????????????',
                tel:'(02)000-1234',
                businessHours:'10:00-21:00',
                address:'??????????????????????????????25???2-1???',
                imageUrl:'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/locate2.jpg',
            },
            {
                city:'?????????',
                name:'?????????????????????',
                tel:'(02)000-1234',
                businessHours:'10:00-21:00',
                address:'??????????????????????????????25???2-1???',
                imageUrl:'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/locate3.jpg',
            },
            {
                city:'?????????',
                name:'?????????????????????',
                tel:'(02)000-1234',
                businessHours:'10:00-21:00',
                address:'??????????????????????????????25???2-1???',
                imageUrl:'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/locate3.jpg',
            },
            {
                city:'?????????',
                name:'?????????????????????',
                tel:'(02)000-1234',
                businessHours:'10:00-21:00',
                address:'??????????????????????????????25???2-1???',
                imageUrl:'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/locate2.jpg',
            },
            {
                city:'?????????',
                name:'?????????????????????',
                tel:'(02)000-1234',
                businessHours:'10:00-21:00',
                address:'??????????????????????????????25???2-1???',
                imageUrl:'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/locate3.jpg',
            }

        ]
    }},
    methods: {
        showIndex(){
            this.index = true;
            this.optical = false;
            this.sunglasses = false;
            this.store = false;
            this.faq = false;
            location.hash = 'index';
        },
        showOptical(){
            this.optical = true
            this.index = false;
            this.sunglasses = false;
            this.store = false;
            this.faq = false;
            location.hash = 'optical';
        },
        showSunglasses(){
            this.sunglasses = true;
            this.index = false;
            this.optical = false;
            this.store = false;
            this.faq = false;
            location.hash = 'sunglasses';
        },
        showStore(){
            this.store = true;
            this.sunglasses = false;
            this.index = false;
            this.optical = false;
            this.faq = false;
            location.hash = 'store';
        },
        showFaq(){
            this.faq = true;
            this.store = false;
            this.sunglasses = false;
            this.index = false;
            this.optical = false
        }
    },
    mounted() {
        AOS.init();
    },
}

Vue.createApp(app).mount('#app')