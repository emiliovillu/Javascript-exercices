

function f() {
	var views = 0;
	var n = function(){
		views++;
		return views;
	};
	return n;
};
var callMe = f();
callMe();
