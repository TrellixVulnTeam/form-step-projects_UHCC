$(document).ready((function(){const e=$(".question").parsley(),t=$(".color-picker__preview>img"),s=$(".question__wrapper"),c=$(".question__inner");$(c[0]).css({opacity:1});let i=0;function r(t){e.validate({group:t,force:!0})&&($(c[i]).css({opacity:0}),i++,s.css({"margin-left":"-"+i+"00%",height:$(c[i]).height()+38}),$(c[i]).css({opacity:1}),$(".question__progress--circle.current").addClass("active"),$(".question__progress--circle.current+div").addClass("current"))}$(".btn-color-picker").click((function(){$(".btn-color-picker").removeClass("selected"),$(this).addClass("selected"),t.removeClass("selected"),$("img#"+$(this).attr("id")).addClass("selected")})),$(".btn-check").change((function(){r($(this).attr("data-parsley-group"))})),$(".question__next").click((function(){r($(this).attr("id"))}))}));