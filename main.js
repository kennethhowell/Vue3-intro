const app = Vue.createApp({
    data: function(){
        return {
            product: "Socks",
            description:  'Warm with breathable design to keep you from having those awful sweaty feets',
            url: "https://www.google.com",
            details: ['Free range', 'hormone free', 'low sodium'],
            variants: [
                {id: 0330, color: 'green', image: './assets/images/socks_green.jpg', quantity: 40, onSale: true},
                {id: 0810, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false}
            ],
            sizes: ['xiao', 'petite', 'average joe', 'bolder buddy', 'husky human', 'extra large twice in charge'],
            cart: 0,
            brand: "Vue Mastery",
            selectedVariant: 0



            // testMethod: function(){
            //     alert('Yo!')
            }
        },

        methods:{
            addToCart(){
                this.cart += 1,
                this.inventory -= 1
            },
            removeFromCart(){
                this.cart -= 1,
                this.inventory += 1
            },
            updateVariant(index) {
                this.selectedVariant = index;
            }
        },

        computed: {
            title: function(){
                return this.brand + " " + this.product + "!";
            },
            image: function(){
                return this.variants[this.selectedVariant].image;
            },
            inStock: function(){
                console.log(this.variants[this.selectedVariant].quantity);
                return this.variants[this.selectedVariant].quantity;
            },
            onSale: function(){
                return this.variants[this.selectedVariant].onSale;
            }
        }
    }
)
