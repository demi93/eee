<template>
	<div class="cart-control">
		<transition name="move">
			<div class="cart-decrease" v-show="food.count>0" @click="decreaseCart($event)">
				<span class="inner">
					<img width="20" src="./remove_circle_outline.svg">
				</span>
			</div>
		</transition>
		<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
		<div class="cart-add" @click="addCart($event)" >
			<img width="20" src="./add_circle.svg">
		</div>
	</div>
</template>

<script type="text/ecmpscript-6">
	import Vue from 'vue';
  export default {
  	props:{
  		food:{
  			type:Object
  		}
  	},
  	created(){

  	},
  	methods:{
  		addCart(event){
  			if(!event._constructed){
  				return;
  			}
  			if(!this.food.count){
  				Vue.set(this.food,"count",1);
  			}else{
  				this.food.count++;
  			}
  			
  			this.$root.eventHub.$emit('cart.add',event.target);
  			
  			
  		},
  		decreaseCart(event){
  			if(!event._constructed){
  				return;
  			}
  			if(this.food.count){
  				this.food.count--;
  			}
  		},
  	}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
	.cart-control{
		font-size:0;
		.cart-decrease{
			display:inline-block;
			padding:6px;
			opacity:1;
			transform:translate3D(0,0,0);
			.inner{
				display:inline-block;
				line-height:24px;
				font-size:24px;
				transform:rotate(0);
			}
		}
		.move-enter-active,.move-leave-active{
			transition:all 0.4s linear;
			opacity:1;
			transform: translate3d(0,0,0);
			.inner{
				transform:rotate(0);
				transition:all 0.4s linear;
			}
		}

		.move-enter,.move-leave-active{
			opacity:0;
			transform: translate3d(24px,0,0);
			.inner{
				transform:rotate(180deg);
				transition:all 0.4s linear;
			}
		}

		.cart-add{
			display:inline-block;
			line-height:24px;
			font-size:24px;
			padding:6px;
			
		}
		.cart-count{
			display:inline-block;
			vertical-align:top;
			width:12px;
			padding-top:6px;
			line-height:24px;
			text-align:center;
			font-size:10px;
			color:rgb(147,153,159);

		}
		.cart-add{
			display:inline-block;
			
		}
	}

</style>
