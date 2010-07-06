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
	//	var max 	= (side == "h") ? <?php echo $max_w; ?>	: <?php echo $max_h; ?>;
		var max 	= (side == "h") ? 800 : 600;
		var unit	= "pixels"; //(side == "w") ? f.width_unit	: f.height_unit;
		var orig	= (side == "w") ? f.width_orig	: f.height_orig;
		var curr	= (side == "w") ? f.width 		: f.height;
		var t_unit	= "pixels"; //(side == "h") ? f.width_unit	: f.height_unit;
		var t_orig	= (side == "h") ? f.width_orig	: f.height_orig;
		var t_curr	= (side == "h") ? f.width		: f.height;

		var res = Math.floor((curr.value/orig.value) * t_orig.value);

		if (res > max)
		{
			t_curr.value = t_orig.value;

			curr.value	 = Math.min(curr.value, orig.value);
		}
		else
		{
			t_curr.value = res;
		}
*/

$(document).ready(function(){function j(a){$("#crop_x").val(Math.floor(a.x));$("#crop_y").val(Math.floor(a.y));$("#crop_width").val(Math.floor(a.w));$("#crop_height").val(Math.floor(a.h))}function c(a){$(".edit_option").hide();a!=undefined&&$("#"+a+"_fieldset").fadeIn();$("#crop_x").val("");$("#crop_y").val("");$("#crop_width").val("");$("#crop_height").val("");$("#resize_width").val("");$("#resize_height").val("")}function g(a){if(a==undefined){$("#resize_width").val($("#edit_image").width());$("#resize_height").val($("#edit_image").height())}else{edit_mode=
true;$("#resize_width").val(Math.floor(a.width));$("#resize_height").val(Math.floor(a.height))}}function k(a,b,h){$("#confirm").modal({close:false,overlayId:"confirmModalOverlay",containerId:"confirmModalContainer",onShow:function(d){d.data.find(".message").append(a);d.data.find(".yes").click(function(){$.isFunction(b)&&b.apply();$.modal.close()});d.data.find(".no").click(function(){$.isFunction(h)&&h.apply();$.modal.close()})}})}function e(a){edit_mode!=false?k("'.$this->lang->line('exit_apply_changes').'",
function(){$("#edit_file_submit").click();return true},function(){f(a)}):f(a)}function l(){c("resize");g();$("#edit_image").resizable({handles:"all",animate:true,ghost:true,aspectRatio:true,knobHandles:true,resize:function(a,b){g(b.size)}})}function f(a,b){if(b==undefined)b=[50,50,100,100];$("#edit_image").resizable("destroy");$("#edit_image_holder").html('<img src="'+EE.filemanager.url_path+'" alt="" id="edit_image" />');if(a=="rotate")c("rotate");else if(a=="resize")setTimeout(l,250);else{c("crop");
$("#edit_image").Jcrop({setSelect:b,onChange:j,onSelect:function(){edit_mode=true}})}}function i(a,b){ratio=b=="height"?m:n;return result=Math.floor(ratio*a)}$(".edit_option").hide();$("#rotate_fieldset p").hide();$("#rotate_fieldset .icons").show();$("#showToolbarLink a").toggle(function(){$("#file_manager_tools").hide();$("#showToolbarLink a span").text(EE.lang.show_toolbar);$("#showToolbarLink").animate({marginRight:"20"});$("#file_manager_holder").animate({marginRight:"10"})},function(){$("#showToolbarLink a span").text(EE.lang.hide_toolbar);
$("#showToolbarLink").animate({marginRight:"314"});$("#file_manager_holder").animate({marginRight:"300"},function(){$("#file_manager_tools").show()})});$("#file_manager_tools h3 a").toggle(function(){$(this).parent().next("div").slideUp();$(this).toggleClass("closed")},function(){$(this).parent().next("div").slideDown();$(this).toggleClass("closed")});$("#file_manager_list h3").toggle(function(){$(this).next().slideUp();$(this).toggleClass("closed")},function(){$(this).next().slideDown();$(this).toggleClass("closed")});
edit_mode=false;var n=$("#edit_image").height()/$("#edit_image").width(),m=$("#edit_image").width()/$("#edit_image").height();$("#rotate_fieldset li img").click(function(){var a=$(this).parent("li").attr("class").substr(7);$("p.last select#rotate").val(a);$("#edit_file_submit").attr("disabled",true).addClass("disabled_field");$("#image_edit_form").submit()},function(){$("#edit_file_submit").attr("disable","false").removeClass("disabled_field")});$("#crop_mode").click(function(){e("crop");return false});
$("#resize_mode").click(function(){e("resize");return false});$(".crop_dim").keyup(function(){f("crop",[$("#crop_x").val(),$("#crop_y").val(),parseInt($("#crop_x").val())+parseInt($("#crop_width").val()),parseInt($("#crop_y").val())+parseInt($("#crop_height").val())])});$("#resize_width").keyup(function(){width=parseInt($("#resize_width").val());height=i(width,"width");$("#edit_image, .ui-wrapper").width(width);$("#edit_image, .ui-wrapper").height(height);$("#resize_height").val(height)});$("#resize_height").keyup(function(){height=
parseInt($("#resize_height").val());width=i(height,"height");$("#edit_image, .ui-wrapper").width(width);$("#edit_image, .ui-wrapper").height(height);$("#resize_width").val(width)});$("#rotate_mode").click(function(){e("rotate");return false});$("#rotate").change(function(){edit_mode=true})});
