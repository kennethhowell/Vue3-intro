const app = Vue.createApp({
    data: function(){
        return {
            product: "Socks",
            description:  'Warm with breathable design to keep you from having those awful sweaty feets',
            image: './assets/images/socks_blue.jpg',
            url: "https://www.google.com",
            inventory: 0,
            onSale: true,
            details: ['Free range', 'hormone free', 'low sodium'],
            variants: [
                {id: 0330, color: 'green', image: './assets/images/socks_green.jpg'},
                {id: 0810, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ],
            sizes: ['xiao', 'petite', 'average joe', 'bolder buddy', 'husky human', 'extra large twice in charge'],
            cart: 0



            // testMethod: function(){
            //     alert('Yo!')
            }
        },

        methods:{
            addToCart(){
                this.cart += 1
            },
            removeFromCart(){
                this.cart -= 1
            },
            updateImage(variantImage) {
                this.image = variantImage;
            }
        }
    }
)
