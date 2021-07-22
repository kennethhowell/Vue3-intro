const app = Vue.createApp({
    data: function(){
        return {
            cart: [],
            premium: true,
            details: "Product Details test"
    
            // testMethod: function(){
            //     alert('Yo!')
            }
        },

        methods:{
           updateCart: function(id) {
            this.cart.push(id)
           },
           removeFromCart: function(){
               this.cart.pop();
           }
        }

    }
)
