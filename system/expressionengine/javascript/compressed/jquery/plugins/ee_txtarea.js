/*!
 * ExpressionEngine - by EllisLab
 *
 * @package		ExpressionEngine
 * @author		ExpressionEngine Dev Team
 * @copyright	Copyright (c) 2003 - 2010, EllisLab, Inc.
 * @license		http://expressionengine.com/docs/license.html
 * @link		http://expressionengine.com
 * @since		Version 2.0
 * @filesource
 */
/*
 @todo Documentation, reconsider class names

$(textarea).getSelectedText();
$(textarea).getSelectedRange();

selection = $(textarea).createSelection(start, end);
selection.replaceWith('[code]'+selection.getSelectedText()+'[/code]');

$(textarea).insertAtCursor('abc');
$(textarea).scrollToCursor();
*/

(function(){function e(a){this.el=a;this.lastIdx=-2;this.currentIdx=0;if(document.selection)this.range=this.el.createTextRange()}function f(a){this.el=a;this.sel=new d(this.el)}e.prototype={createSelection:function(a,b){this.el.focus();if("selectionStart"in this.el){this.el.selectionStart=a;this.el.selectionEnd=b}else if(document.selection){var c=document.selection.createRange();c.moveStart("character",-this.el.value.length);c.collapse();c.moveStart("character",a);c.moveEnd("character",b-a);c.select()}return this},
getSelectedText:function(){if("selectionStart"in this.el)return this.el.value.substr(this.el.selectionStart,this.el.selectionEnd-this.el.selectionStart);else if(document.selection){this.el.focus();return document.selection.createRange().text}},getSelectedRange:function(){if("selectionStart"in this.el)return{start:this.el.selectionStart,end:this.el.selectionEnd};else if(document.selection){var a=document.selection.createRange(),b=Math.abs(a.duplicate().moveEnd("character",-100000));selectionStart=
b-a.text.length;return{start:selectionStart,end:b}}},replaceWith:function(a){var b;this.el.focus();if("selectionStart"in this.el){b=this.el.selectionStart+a.length;this.el.value=this.el.value.substr(0,this.el.selectionStart)+a+this.el.value.substr(this.el.selectionEnd,this.el.value.length);this.el.setSelectionRange(b,b)}else if(document.selection)document.selection.createRange().text=a;return this},selectNext:function(a){if("selectionStart"in this.el){var b=this.currentIdx;chunk=b>0?this.el.value.substring(this.currentIdx):
this.el.value;this.currentIdx=chunk.indexOf(a);if(this.currentIdx!=-1){this.createSelection(b+this.currentIdx,b+this.currentIdx+a.length);this.lastIdx=b+this.currentIdx;this.currentIdx+=b+a.length}else if(this.lastIdx!=this.currentIdx){this.lastIdx=-1;this.currentIdx=0;this.selectNext(a)}}else if(document.selection){this.el.focus();if(this.range.findText(a,1,0)){this.range.select();this.range.collapse(false)}else this.range=this.el.createTextRange()}},resetCycle:function(){this.lastIdx=-2;this.currentIdx=
0;if(document.selection)this.range=this.el.createTextRange()}};if(jQuery){var d=function(a){e.call(this,a);a=$(this.el);var b=a.scrollTop(9999).scrollTop(),c=a.val();a.val(c+"\n");new_height=a.scrollTop(9999).scrollTop();a.val(c).scrollTop(0);this.textarea_line_height=new_height-b;this.jQ_el=a},g=function(){};g.prototype=e.prototype;d.prototype=new g;d.prototype.constructor=d;d.prototype.scrollToCursor=function(){if("selectionStart"in this.el){var a=this.getSelectedRange();a=this.jQ_el.val().substr(0,
a.start).split("\n");for(var b=a.length,c=0;c<a.length;c++){length_ratio=a[c].length/this.el.cols;if(length_ratio>1)b+=Math.ceil(length_ratio)}b=b>5?b-5:0;this.jQ_el.scrollTop((b-5)*this.textarea_line_height)}return this}}else d=e;f.prototype={getSelectionObj:function(){return this.sel},createSelection:function(a,b){return this.sel.createSelection(a,b)},getSelectedText:function(){return this.sel.getSelectedText()},getSelectedRange:function(){return this.sel.getSelectedRange()},insertAtCursor:function(a){this.sel.replaceWith(a)},
selectNext:function(a){this.sel.selectNext(a);return this.sel},_resize:function(){var a=this.sel.getSelectedRange();if(a.start==a.end&&a.end==this.el.value.length){this.el.value+="\n";this.sel.createSelection(a.end,a.end)}this.el.scrollHeight>this.el.clientHeight&&$(this.el).height(this.el.scrollHeight+10)},autoResize:function(){var a=this,b=$(this.el);b.css("overflow","hidden");b.keypress(function(){a._resize()});b.keyup(function(c){c.keyCode==13&&a._resize()})}};if(jQuery)for(func in f.prototype)jQuery.fn[func]=
function(a){return function(){var b=Array.prototype.slice.call(arguments),c=this.data("txtarea");if(!c){c=new f(this[0]);this.data("txtarea",c)}return c[a].apply(c,b)}}(func);window.Txtarea=f})();
