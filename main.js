var test=require('./calc.js')
require('./calc.css')
require('./calc.less')
require('./mui/css/icons-extra.css')

var btn=document.getElementById('btn')
var val1=document.getElementById('val1')
var val2=document.getElementById('val2')
var val3=document.getElementById('val3')

btn.onclick=function(){
	val3.value = (val1.value-0) + (val2.value-0)
}