app.component("product-display", {

props: {
    premium: {
        type: Boolean,
        required: true
    },
    cart: {
        required: true
    }
},

template: 
/*html*/`
<div class="product-display">
<div class="product-container">
  <div class="product-image">
    <!-- image goes here -->
    <img :class="{ 'out-of-stock-img': !inStock }" :src="image">
  </div>
  <div class="product-info">
    <h1>{{ title }}</h1>
    <p> {{ description }}</p>
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>

    <select>
      <option v-for="size in sizes"> {{ size }}</option>
    </select>

    <p>Shipping: {{ shipping }} </p>
    
    <div class="color-circle" v-for="(variant, index) in variants" :style="{ backgroundColor: variant.color }" :key="variant.id" @mouseover="updateVariant(index)">{{ variant.color }}</div>


    <p v-if="inStock">In Stock</p>
    <p v-else>Out of Stock</p>

    <h6 v-if="onSale">Clarence's Socks [Clearance Priced]</h6>

    <button class="button" @click="addToCart" 
    :class="{ disabledButton: !inStock }"
    :disabled="!inStock">Add to Cart</button>

    <button class="button" :class="{ disabledButton: !inStock }" v-if="cart.length > 0" @click="removeFromCart">Remove From Cart</button>


    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>
</div>
</div>`,

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
        brand: "Vue Mastery",
        selectedVariant: 0,

        // testMethod: function(){
        //     alert('Yo!')
        reviews: []
    }
        
},

    methods:{
        addToCart(){
            this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
        },
        removeFromCart(){
            this.$emit("remove-from-cart");
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        addReview(review){
            this.reviews.push(review);

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
        },
        shipping: function(){
            if(this.premium){
                return "Free";
            }
            return 4.99;
    }
}



})