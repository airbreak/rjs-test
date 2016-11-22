({
	appDir:'./',

	dir:'./www',

	baseUrl:'./js/pages',

	modules:[{name:'index'},{name:'reg'}],

	fileExclusionRegExp:/^(r|build)\.js|.*\.less|less$/,

	optimizeCss:'standard',

	removeCombined:true,

	paths:{
		avalon:'../common/avalon',

		jquery:'../common/jquery-1.8.2.min',

		VJ:'../common/VJ'
	}
})