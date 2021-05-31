<template>
  <div id="app">
	<tab-bar>
		<tab-bar-item path='/read'>
			<img src="./assets/img/tarbar/阅读.svg" slot="item-icon">
			<img src="./assets/img/tarbar/阅读-active.svg" slot="item-icon-active">
			<div slot="item-text">阅读</div>
		</tab-bar-item>
		<tab-bar-item path='/bookshelf'>
			<img src="./assets/img/tarbar/书架.svg" slot="item-icon">
			<img src="./assets/img/tarbar/书架-active.svg" slot="item-icon-active">
			<div slot="item-text">书架</div>
		</tab-bar-item>
		<tab-bar-item path='/community'>
			<img src="./assets/img/tarbar/社区.svg" slot="item-icon">
			<img src="./assets/img/tarbar/社区-active.svg" slot="item-icon-active">
			<div slot="item-text">社区</div>
		</tab-bar-item>
		<tab-bar-item path='/profile'>
			<img src="./assets/img/tarbar/个人中心.svg" slot="item-icon">
			<img src="./assets/img/tarbar/个人中心-active.svg" slot="item-icon-active">
			<div slot="item-text">我的</div>
		</tab-bar-item>
	</tab-bar>
	<router-view></router-view>
  </div>
</template>

<script>
/* const TabBar=()=>import('./components/TabBar.vue');
const TabBarItem=()=>import('./components/TabBarItem.vue'); */
import TabBar from './components/TabBar.vue';
import TabBarItem from './components/TabBarItem.vue';

export default {
  name: 'app',
  components: {
    TabBar,
	TabBarItem
  }
}
</script>
	
<style>
	@import url('./assets/css/base.css');
</style>
