// var test=require('../static/js/calc.js')

import test from '../static/js/calc.js'
// require('../static/css/calc.css')

import '../static/css/calc.css'
// require('../static/css/calc.less')

import '../static/css/calc.less'
// require('../static/mui/css/icons-extra.css')

import '../static/mui/css/icons-extra.css'

var btn=document.getElementById('btn')
var val1=document.getElementById('val1')
var val2=document.getElementById('val2')
var val3=document.getElementById('val3')

btn.onclick=function(){
	val3.value = (val1.value-0) * (val2.value-0)
}