steal(	'sru/lib/mvc.js'
,	'canui/list'
,	'canui/selectable'
,	'can/construct/super'
,	'can/control/route'
).then( 'sigma/lib/style.js'
).then(	'sigma/lib'
//,	'sigma/lib/do-timeout/jquery.ba-dotimeout.min.js'
,	'sigma/lib/updatable_control.js'
,	'sigma/lib/hypermedia_control.js'
,	'sigma/lib/hypermedia_container.js'
,	'sigma/util'
//,	'sigma/lib/active_menu'
).then(	'sigma/model'
,	'sigma/model/hal.js'
//,	'sru/session'
//,	'sru/session/login'
//,	'sru/home'
//-------------------------------------------------
).then(	'sigma/lib'
,	'sigma/lib/hypermedia_control.js'
//,	'sigma/lib/hyperlink.js'
,	'sigma/util'
)
