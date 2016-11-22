requirejs.config({
    baseUrl: 'js',
    paths: {
        avalon:'common/avalon',
        jquery:'common/jquery-1.8.2.min',
        VJ:'common/VJ'
    } 
});

require(['jquery','avalon'],function($,av){
	var myAv=new av();
	$('#hoee').text('总数是：'+myAv.addNum(10,200));
});