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
                {id: 0330, color: 'green'},
                {id: 0810, color: 'blue'}
            ],
            sizes: ['xiao', 'petite', 'average joe', 'bolder buddy', 'husky human', 'extra large twice in charge']



            // testMethod: function(){
            //     alert('Yo!')
            }
        }
    }
)
