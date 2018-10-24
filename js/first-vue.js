var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello vue'
	}
});
var app2 = new Vue({
	el: '#app-2',
	data: {
		message: '当前时间是：' + new Date().toLocaleString()
	}
});
var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
});
var app4 = new Vue({
	el: '#app-4',
	data: {
		nums: [1, 2, 3]
	}
});
var app5 = new Vue({
	el: '#app-5',
	data: {
		message: '我要反过来了'
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('');
		}
	}
});
var app6 = new Vue({
	el: '#app-6',
	data: {
		message: '我是个双向绑定的数据'
	}
});
Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{todo.text}}</li>'
});
var app7 = new Vue({
	el: '#app-7',
	data: {
		shopList: [
			{ id: 0, text: '蔬菜' },
			{ id: 1, text: '奶酪' },
			{ id: 2, text: '随便' }
		]
	}
});