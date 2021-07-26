const app = {
    data() {
        return {
        index:true,
        optical:false,
        sunglasses: false,
        store:false,
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
                city:'台北市',
                name:'台北中山旗艦店',
                tel:'(02)000-1234',
                businessHours:'10:00-21:00',
                address:'台北市中山區南京東路25巷2-1號',
                imageUrl:'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/locate1.jpeg',
            },
            {
                city:'南投縣',
                name:'南投竹山旗艦店',
                tel:'(02)000-1234',
                businessHours:'10:00-21:00',
                address:'南投市竹山鄉南京東路25巷2-1號',
                imageUrl:'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/locate2.jpg',
            },
            {
                city:'南投縣',
                name:'南投竹山旗艦店',
                tel:'(02)000-1234',
                businessHours:'10:00-21:00',
                address:'南投市竹山鄉南京東路25巷2-1號',
                imageUrl:'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/locate3.jpg',
            },
            {
                city:'南投縣',
                name:'南投竹山旗艦店',
                tel:'(02)000-1234',
                businessHours:'10:00-21:00',
                address:'南投市竹山鄉南京東路25巷2-1號',
                imageUrl:'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/locate3.jpg',
            },
            {
                city:'南投縣',
                name:'南投竹山旗艦店',
                tel:'(02)000-1234',
                businessHours:'10:00-21:00',
                address:'南投市竹山鄉南京東路25巷2-1號',
                imageUrl:'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/locate2.jpg',
            },
            {
                city:'南投縣',
                name:'南投竹山旗艦店',
                tel:'(02)000-1234',
                businessHours:'10:00-21:00',
                address:'南投市竹山鄉南京東路25巷2-1號',
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
        },
        showOptical(){
            this.optical = true
            this.index = false;
            this.sunglasses = false;
            this.store = false;
        },
        showSunglasses(){
            this.sunglasses = true;
            this.index = false;
            this.optical = false;
            this.store = false;
        },
        showStore(){
            this.store = true;
            this.sunglasses = false;
            this.index = false;
            this.optical = false
        }
    }
}

Vue.createApp(app).mount('#app')