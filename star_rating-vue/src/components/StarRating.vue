<template>
<div class="star_rating">
<div class="star_list" > 
    <div  v-for="star in stars" :key="star" @mouseover="onHover(star)" @mouseleave="onLeave()" @click="provideRating(star)">
    <span :style="[star <= filledStar ? {'color': 'orange'} : {}]" class="star_font">&starf;</span>
    </div>
</div>
<p class="rating">{{rating}}</p>
<button :disabled="this.count == 0" @click="resetRating()">Reset</button>
</div>
</template>
<script>
export default{
    name: 'StarRating',
    data(){
        return{
            stars: 5,
            rating:"",
            filledStar: 0,
            count: 0
        }
    },
    methods:{
        onHover(value){
            if(this.count === 0){
            switch(value){
                case 1:
                    this.rating = "Poor";
                    this.filledStar = 1;
                    break;
                case 2: 
                    this.rating ="Average";
                     this.filledStar = 2;
                    break;
                case 3:
                    this.rating ="Good";
                     this.filledStar = 3;
                    break;
                case 4:
                    this.rating ="Great";
                     this.filledStar = 4;
                    break;
                case 5:
                    this.rating = "Excellent";
                     this.filledStar = 5;
                    break;
                default:
                    this.rating ="";
            }
            }
        },
        onLeave(){
            if(this.count === 0) {
            this.rating='';
            this.filledStar = 0;
            }
        },
        resetRating(){
            this.rating='';
            this.filledStar = 0;
            this.count =0;
        },
        provideRating(value){
            this.count=1;
             switch(value){
                case 1:
                    this.rating = "Poor";
                    this.filledStar = 1;
                    break;
                case 2: 
                    this.rating ="Average";
                     this.filledStar = 2;
                    break;
                case 3:
                    this.rating ="Good";
                     this.filledStar = 3;
                    break;
                case 4:
                    this.rating ="Great";
                     this.filledStar = 4;
                    break;
                case 5:
                    this.rating = "Excellent";
                     this.filledStar = 5;
                    break;
                default:
                    this.rating ="";
            }
        }
    }

}
</script>
<style lang="scss" scoped>
$landscape-screen: 1024px;
$tablet-screen: 768px;


$mobile-only: "only screen and (max-width: #{$tablet-screen - 1})";
$tablet-only: "only screen and (min-width : #{$tablet-screen}) and (max-width: #{$landscape-screen - 1})";
$desktop: "only screen and (min-width : #{$landscape-screen})";

.star_rating{
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    width: 400px;
    height: 400px;

    @media #{$tablet-only} {
        height: 400px;
        width: 400px;
    }


    @media #{$mobile-only}{
    height: 200px;
    width: 250px;
    }
}
.star_list{
    height: 160px;
    width: 470px;
    display: flex;
    margin: auto;

    @media #{$tablet-only} {
        height: 200px;
        width: 400px;
    }
    
    @media #{$mobile-only} {
        height: 100px;
        width: 250px;
        margin: 0;
        
    }
}

.star_font{
    font-size: 100px;

    @media #{$mobile-only} {
        font-size: 60px;
    }
}
.rating{
    font-family: 'Times New Roman', Times, serif;
    font-size: 40px;
    font-weight: 800;
    @media #{$mobile-only}{
        margin: 0;
    }
}
button{
    width: 70px;
    height: 50px;
    //background-image:linear-gradient(rgb(23, 162, 184),rgb(229, 236, 236));
    background: linear-gradient(90deg, rgb(23, 162, 184), rgb(229, 236, 236),rgb(23, 162, 184));
    border: 1px solid black;
    border-radius: 15px;
    font-family: Roboto,'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
    font-weight: 700;
    font-size: 16px;

}

</style>>