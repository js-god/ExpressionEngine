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
	 * Sets up the filebrowser - call this before anything else
	 *
	 * @todo make callbacks overridable ($.extend)
	 */
/*
	 * Generic function to make requests to the backend. Everything! is handled by the backend.
	 *
	 * Currently supported types:
	 *		setup				- called automatically | returns manager html and all directories
	 *		diretory			- returns directory name
	 *		directories			- returns all directories
	 *		directory_contents	- returns directory information and files ({url: '', id: '', files: {...}})
	 */
/*
	 * Allows you to bind elements that will open the file browser
	 * The callback is called with the file information when a file
	 * is chosen.
	 *
	 * @todo consider changing this to something event
	 *		 based so it doesn't force a click event.
	 */
/*
	 * Change Dimensions
	 *
	 * This function is responsible for auto-adding pixel values if the user
	 * chooses to maintain aspect ratio when resizing an image
	 */
/*
	 * Submit Image Edit
	 *
	 * Submits the image edit form via AJAX and then runs cleanup on resulting information
	 */
/*
	 * Clean Up
	 *
	 * Takes care of restoring the file upload, closing the modal, and firing needed callbacks
	 */
/*
	 * Callback actions
	 */
/*
	 * Builds the horizontal navigation.
	 * Only fills in thumbnails for the first page, all others are loaded when they come into view
	 */
/* 
	 * Dynamically loads files from a directory if it hasn't been loaded yet
	 */
/* 
	 * In order to save on bandwidth, when the images are loaded into the file browser they
	 * are only placeholders. This function takes care of intelligently loading thumbnails
	 * for your viewing pleasure.
	 */
/* 
	 * Sets up all filebrowser events
	 */

(function(a){function s(b){if(!(!b.id in l)){l[b.id]=b.files;m[b.id]=b.url;var c="",d=0,g=[],e=a("#page_"+b.id,f).data("scrollable");a.each(b.files,function(i,h){if(i%n==0&&i!=0){g.push(c);c=""}if(h.mime==false||h.mime.indexOf("image")<0)c+='<div><div title="{filedir_'+b.id+"}|"+h.name+'"><img title="'+k+'" src="'+k+'" alt="default thumbnail" /></div>'+h.name+"</div>";else{c+="<div><div title='"+h.dimensions+'\'><img class="image" title="{filedir_'+b.id+"}"+h.name+'" src="';if(h.has_thumb)c+=i<n?
b.url+"_thumbs/thumb_"+h.name:o;else{c+=k;i<n&&a.ajax({type:"POST",url:EE.BASE+"&"+EE.filebrowser.endpoint_url+"&action=ajax_create_thumb",data:"XID="+EE.XID+"&dir="+b.id+"&image="+h.name})}c+='" alt="thumbnail" /></div>'+h.name+"</div>"}d++});g.push(c);a.each(g,function(){e.addItem('<div class="item">'+this+"</div>")});a(".item > div",f).unbind();a(".item > div",f).click(function(){var i;i=a(this).find("img").attr("src")!=k===true?{is_image:true,thumb:a(this).find("img").attr("src"),directory:j,
dimensions:a(this).find("div").attr("title"),name:a(this).find("img").attr("title").split("}")[1]}:{is_image:false,thumb:k,directory:j,name:a(this).find("div").attr("title").split("|")[1]};p(i);f.dialog("close")});e.getSize()>1&&a("#nav_controls_"+b.id,f).show()}}function r(b){l[b]==""&&a.ee_filebrowser.endpoint_request("directory_contents",{directory:b},s)}function q(b){var c=a("#page_"+b).data("scrollable");page_index=c.getIndex()==""?0:c.getIndex();if(a("#page_"+b+" .item:eq("+page_index+") img").length>
0){var d={};a("#page_"+b+" .item:eq("+page_index+") img").each(function(g){var e=a(this),i=/^\{filedir_(\d+)\}/,h=i.exec(e.attr("title"));if(e.attr("src")==o){d[g]=m[h[1]]+"/_thumbs/thumb_"+e.attr("title").replace(i,"");a('<img src="'+d[g]+'" />').load(function(){e.attr("src",d[g])})}else if(e.attr("class")=="image"&&e.attr("src")==k){e.attr("src",o);var t=e.attr("title").substring(e.attr("title").indexOf("}")+1);a.ajax({type:"POST",url:EE.BASE+"&"+EE.filebrowser.endpoint_url+"&action=ajax_create_thumb",
data:"XID="+EE.XID+"&dir="+b+"&image="+t,success:function(){e.attr("src",m[h[1]]+"/_thumbs/thumb_"+e.attr("title").replace(i,""))},error:function(){e.attr("src",k)}})}})}}function u(){var b,c;f.dialog({width:730,height:495,resizable:false,position:["center","center"],modal:true,draggable:true,title:EE.filebrowser.window_title,autoOpen:false,zIndex:1E3,open:function(){a("#file_manager_main").data("scrollable").getConf().keyboard="static";a(".vertscrollable").data("scrollable").getConf().keyboard=true},
close:function(){a("#file_manager_main").data("scrollable").getConf().keyboard=false;a.ee_filebrowser.reset()}});a("#file_manager_main").scrollable({vertical:true,clickable:false,speed:250,keyboard:true,onSeek:function(d,g){if(c!=g){c=g;j=a("#main_navi").find("li").eq(g).attr("id").replace(/main_navi_/,"");r(j);q(j);b.eq(g).data("scrollable").focus()}}}).navigator("#main_navi");b=a(".vertscrollable").scrollable({clickable:false,next:".newThumbs",prev:".prevThumbs",keyboard:true,onSeek:function(){q(j)}}).navigator({navi:".navi"});
r(j);q(j);b.eq(0).data("scrollable").focus();a("#file_manager_main").data("scrollable").begin();a("#upload_form",f).submit(a.ee_filebrowser.upload_start)}var n,l,m,p,j=0,o=EE.THEME_URL+"/images/publish_file_manager_loader.gif",k=EE.PATH_CP_GBL_IMG+"default.png",f;a.ee_filebrowser=function(){n=20;a.ee_filebrowser.endpoint_request("setup",function(b){l={};m={};f=a(b.manager).appendTo(document.body);for(var c in b.directories){j||(j=c);l[c]=""}u()})};a.ee_filebrowser.endpoint_request=function(b,c,d){if(!d&&
a.isFunction(c)){d=c;c={}}c=a.extend(c,{action:b});a.getJSON(EE.BASE+"&"+EE.filebrowser.endpoint_url+"&"+a.param(c),d)};a.ee_filebrowser.add_trigger=function(b,c,d){if(!d&&a.isFunction(c)){d=c;c="userfile"}a(b).click(function(){var g=this;a("#upload_file",f).attr("name",c);f.dialog("open");p=function(e){d.call(g,e,c)};return false})};a.ee_filebrowser.change_dim=function(b,c){if(a("#cloned #constrain:checked").length!=0)if(c.attr("id")=="resize_width"){var d=b.height/b.width;a("#resize_height").val(Math.floor(d*
c.val()))}else{d=b.width/b.height;a("#resize_width").val(Math.floor(d*c.val()))}};a.ee_filebrowser.submit_image_edit=function(b,c){a.ajax({type:"POST",url:EE.BASE+"&"+EE.filebrowser.endpoint_url+"&action=edit_image",data:a("#image_edit_form").serialize(),success:function(d){b.name=d;b.dimensions='width="'+b.width+'" height="'+b.height+'" ';a.ee_filebrowser.clean_up(b,c)},error:function(d){if(a.ee_notice)a.ee_notice(d.responseText,{type:"error"});else{d.responseText=d.responseText.replace(/<p>/,"");
alert(d.responseText.replace(/<\/p>/,""))}}})};a.ee_filebrowser.clean_up=function(b,c){a("#page_0 .items").html(c);f.dialog("close");p(b)};a.ee_filebrowser.reset=function(){a("#file_manager_main").data("scrollable").begin();a(".vertscrollable").data("scrollable").begin()};a.ee_filebrowser=a.extend(a.ee_filebrowser,{upload_start:function(){a("#progress",f).show()},upload_success:function(b){l[b.directory]="";a("#page_"+b.directory+" .items",f).empty();a("#progress",f).hide();var c=a("#page_0 .items").html();
if(b.is_image){a("#page_0 .items").html('<button id="resize_image"><span>'+EE.lang.resize_image+"</span></button> "+EE.lang.or+' <button class="place_image"><span>'+EE.lang.return_to_publish+"</span></button>").fadeIn("fast");a(".place_image").click(function(){a.ee_filebrowser.clean_up(b,c)});a("#resize_image").click(function(){a("#page_0 .items").html(a(".image_edit_form_options").clone().css("display","block").attr("id","cloned"));a("#resize_width").val(b.width);a("#resize_height").val(b.height);
a("#file").val(b.url_path);a("#resize_width, #resize_height").keyup(function(){a.ee_filebrowser.change_dim(b,a(this))});a(".place_image").click(function(){a.ee_filebrowser.clean_up(b,c)});a(".icons li").click(function(){switch(a(this).attr("class")){case "rotate_90r":rotate=90;break;case "rotate_90l":rotate=270;break;case "rotate_180":rotate=180;break;case "rotate_flip_vert":rotate="vrt";break;case "rotate_flip_hor":rotate="hor";break;default:rotate="none"}a("#image_edit_form input:text").val("");
a("#image_edit_form").prepend('<input type="hidden" name="rotate" value="'+rotate+'"/>');a.ee_filebrowser.submit_image_edit(b,c)});a("#image_edit_form").submit(function(){if(a("#crop_width").val()==""&&a("#crop_height").val()==""&&a("#crop_x").val()==""&&a("#crop_y").val()==""&&a("#resize_width").val()==""&&a("#resize_height").val()=="")a.ee_filebrowser.clean_up(b,c);else{b.width=a("#resize_width").val();b.height=a("#resize_height").val();a.ee_filebrowser.submit_image_edit(b,c)}return false})})}else a.ee_filebrowser.clean_up(b,
c)},upload_error:function(b){a("#progress",f).hide();if(a.ee_notice)a.ee_notice(b.error,{type:"error"});else{b.error=b.error.replace(/<p>/,"");alert(b.error.replace(/<\/p>/,""))}console.log(b)}})})(jQuery);
