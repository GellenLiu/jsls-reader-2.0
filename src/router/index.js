import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Read=()=>import('../pages/read/read.vue');
const Bookshelf=()=>import('../pages/bookshelf/bookshelf.vue');
const Community=()=>import('../pages/community/community.vue');
const Profile=()=>import('../pages/profile/profile.vue');
export default new Router({
	routes: [
	  {
		path:'',
		redirect:'/read',
	  },
	  {
		path:'/read',
		component:Read,
	  },
	  {
	  	path:'/bookshelf',
	  	component:Bookshelf,
	  },
	  {
	  	path:'/community',
	  	component:Community,
	  },
	  {
	  	path:'/profile',
	  	component:Profile,
	  },
	],
	mode:'history',
})
