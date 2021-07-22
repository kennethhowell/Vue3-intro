app.component("review-list", {

props: {
    reviews: {
        type: Array,
        required: true
    }
},

template:

/*html*/`

<div class="review-container">

<h3>Reviews:</h3>
<ul>
    <li v-for="(review, index) in reviews" :key="index">
    Thanks {{ review.name }} for your review! They gave it {{ review.rating }} stars and <span v-if="review.reccomend === 'Yeah'">would recommend it, saying</span><span v-else>would not recommend it, saying</span>:
    <br>
    " {{ review.review }} "
    </li>
</ul>

</div>

`


})