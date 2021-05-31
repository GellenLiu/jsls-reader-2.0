<template>
	<div class="tab-bar-item" @click="ItemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active" ></slot></div>
		<div :class="{'active':isActive,'no-active':!isActive}"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
			}
		},
		props:{
			path:String,
		},
		computed:{
			isActive(){
				return this.$route.path==this.path;
			}
		},
		methods:{
			ItemClick(){
				this.$router.push(this.path);
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		font-size: 14px;
		text-align: center;
	}
	.tab-bar-item img{
		width: 24px;
		height: 24px;
		margin-top: 3px;
	}
	.active{
	    color: #73B6FF;
	}
	.no-active{
		color:#8A8A8A;
	}
</style>
