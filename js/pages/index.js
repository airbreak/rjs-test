requirejs.config({
    baseUrl: 'js',
    paths: {
        avalon:'common/avalon',
        jquery:'common/jquery-1.8.2.min',
        VJ:'common/VJ'
    } 
});

require(['jquery','VJ'],function($,vj){
	var myVj=new vj();
	$('#hoee').text(myVj.addString('jimmy'));
});