<template>
  <div class="container">
    <div class="mob_style" :style="{display:'flex',justifyContent: 'center'}">
      <div class="badges">
        <p class="badge_position">Vertical</p>
        <div class="badge_list">
          <input type="radio" id="top" value="top_value" name="vbadges" checked @click="PositionTop()"/>
          <label for="top">Top</label>
        </div>
        <div class="badge_list">
          <input type="radio" id="bottom" value="bottom_value" name="vbadges" @click="PositionBottom()"/>
          <label for="bottom">Bottom</label>
        </div>
      </div>
      <div class="badges">
        <p class="badge_position">Horizontal</p>
        <div class="badge_list">
        <input type="radio" id="left" value="left_value" checked name="hbadges" @click="PositionLeft()"/>
        <label for="left">left</label>
        </div>
        <div class="badge_list">
        <input type="radio" id="right" value="right_value" name="hbadges" @click="PositionRight()"/>
        <label for="right">Right</label>
        </div>
      </div>
    </div>
    <div class="email">
    &#9993;
    <div class="notification" :style="[this.initialPosition? {'top': '10px', 'left': '0' }:{'top': this.top,'left': this.left,'bottom': this.bottom,'right':this.right}]">
        <span>20+</span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BadgeComp",
  data(){
    return{
        initialPosition: true,
        top:"",
        right:"",
        bottom:"",
        left:"",
        topV:1,
        bottomV:0,
        leftV:0,
        rightV:0
    }
  },
  methods: {
    PositionTop(){
        this.topV =1;
        this.top = '10px';
        this.bottom = '';
        if(this.topV == 1 && this.leftV == 1){
            this.left = '0';
            this.right='';
            this.bottomV =0;
            this.rightV =0;
        } else if (this.topV == 1 && this.rightV == 1){
            this.left = '';
            this.right='10px';
            this.bottomV=0;
            this.leftV=0;
        }
    },
    PositionBottom(){
        this.initialPosition=false;
        this.bottomV =1;
        this.bottom='5px';
        this.top='';
        if(this.bottomV == 1 && this.leftV == 1){
            this.left='0';
            this.right='';
            this.topV =0;
            this.rightV=0;
        } else if (this.bottomV == 1 && this.rightV == 1){
            this.right ='10px';
            this.left='';
            this.topV =0;
            this.leftV=0;
        }
        
    },
    PositionLeft(){
        this.leftV =1;
        this.left = '0';
        this.right ='';
        if(this.topV == 1 && this.leftV == 1){
            this.top = '10px';
             this.bottom ='';
            this.bottomV=0;
            this.rightV=0;
        } else if (this.bottomV == 1 && this.leftV == 1){
            this.top = '';
            this.bottom ='5px';
            this.rightV =0;
            this.topV=0;
        }
    },
    PositionRight(){
        this.initialPosition=false;
        this.rightV =1;
        this.right='10px';
        this.left='';
        if(this.topV == 1 && this.rightV == 1){
            this.top = '10px';
            this.bottom ='';
            this.bottomV=0;
            this.leftV = 0;
        } else if (this.bottomV == 1 && this.rightV == 1){
            this.top='';
            this.bottom='5px';
            this.topV=0;
            this.leftV =0;
        }
    }
    }
};
</script>

<style lang="scss" scoped>
$landscape: 1024px;
$tablet-screen: 768px;

$mobile-only: "only screen and (max-width: #{$tablet-screen - 1})";
$deskop: "only screen and (min-width: #{$landscape})";
$tablet: "only screen and (min-width: #{$tablet-screen}) and (max-width: #{$landscape - 1})" ;

.container{
    transform: translate(-50%,-50%);
    position: absolute;
    top: 50%;
    left: 50%;
    .mob_style{
        @media #{$mobile-only}{
        flex-direction: column;
        left: 35px;
        position: relative;
        }
.badges {
    width: 200px;
    height: 150px;

    @media #{$tablet}{
        height: 200px;
    }

    
    .badge_position {
    color: rgba(0, 0, 0, 0.6);
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    letter-spacing: 0.00938em;
    padding-left: 25px;
    text-align: left;

    @media #{$tablet} {
        font-size: 2rem;
        
    }
    }
    
    .badge_list {
    display: flex;
    }
}
}

input {
    width: 30px;
    height: 20px;

    @media #{$tablet}{
        width: 36px;
    height: 40px;
    }
}

label {
    width: 70px;
    text-align: left;
    height: 20px;
    margin: 5px;

    @media #{$tablet}{
    font-size: 1.8rem;
    }
}

.email{
    display: flex;
    justify-content: flex-start;
    width: 80px;
    margin: auto;
    margin-top: 30px;
    font-size: 70px;
    color: black;
    font-weight: bold;
    position: relative;

    @media #{$tablet}{
        width: 100px;
    font-size: 100px;
    }

}

.notification{
    width: 30px;
    height: 30px;
    background-color: rgb(25, 118, 210);
    position: absolute;
    border-radius: 20px;
    margin: 4px -7px;

    @media #{$tablet}{
        width: 40px;
    height: 40px;
    border-radius: 20px;
    }

    span{
    font-size: 13px;
    color: white;
    position: absolute;
    padding: 7px 5px;
    left: 0;

    @media #{$tablet}{
            font-size: 16px;
    padding: 9px 7px;
    }
    }

}
}
</style>
