var obj = {
	foo: 'bar'
};
Object.freeze(obj);
var vm = new Vue({
	el: '#app',
	data: obj,
	created: function () {
		console.log('foo is ' + this.foo);
	}
});