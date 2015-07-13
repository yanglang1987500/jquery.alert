/**
 * Created by IBM on 2015/3/27.
 * jquery-alert alert提示框
 * 包含了info、confirm、error、warn四种提示框
 * 封装在$.hyc.ui（UI包）下
 * @author yanglang
 */
(function($,lightbox) {
    !$.hyc?$.hyc={}:"";
    !$.hyc.ui?$.hyc.ui={}:"";
    var html = '<div class="uiinfo">'+
        '            <div class="uiinfo_title">提示</div>' +
        '            <div class="uiinfo_content">' +
        '            </div>' +
        '            <div class="uiinfo_confirm"><span class="uiinfo_btn uiinfo_yes">确定</span></div>' +
        '        </div>';
    //普通提示弹框
    $.hyc.ui.info = function(title,message){
        var $info = $(html).appendTo($('body'));
        $('.uiinfo_content',$info).html('<p class="info info">'+(arguments.length==2?arguments[1]:arguments[0])+'</p>');
        $('.uiinfo_title',$info).html(arguments.length==2?arguments[0]:"提示");

        var $mask = $('<div class="uiinfo_mask"></div>').appendTo($('body'));
        var close = function(){
            $info.fadeOut(200,function() {
                $(this).remove();
            });
            $mask.fadeOut(200,function() {
                $(this).remove();
            });
        };
        $('.uiinfo_yes',$info).click(function(){
            close();
        });
        $info.css('margin-top',-$info.height() / 2).fadeIn(200).addClass('ani').addClass('normal');
        $mask.css({opacity:0.6}).fadeIn(200);
        return {
            close:close
        };
    };
    //确认提示弹框
    $.hyc.ui.confirm = function(title,message,yescallback,nocallback){
        if(arguments.length==1){
            var _title = '提示',_content = arguments[0];
        }else if(arguments.length==2){
            var _title = '提示',_content = arguments[0];
            if($.isPlainObject(arguments[1])){
                var _yescallback = arguments[1].yescallback;
                var _nocallback = arguments[1].nocallback;
            }else{
                _title = arguments[0],_content = arguments[1];
            }
        }else if(arguments.length==3){
            var _title = arguments[0],_content = arguments[1];
            if($.isPlainObject(arguments[2])){
                var _yescallback = arguments[2].yescallback;
                var _nocallback = arguments[2].nocallback;
            }
        }
        var $info = $(html).appendTo($('body'));
        $('<span class="uiinfo_btn uiinfo_no">取消</span>').insertBefore($('.uiinfo_yes',$info));
        $('.uiinfo_content',$info).html('<p class="info confirm">'+_content+'</p>');
        $('.uiinfo_title',$info).html(_title);

        var $mask = $('<div class="uiinfo_mask"></div>').appendTo($('body'));
        var close = function(){
            $info.fadeOut(200,function() {
                $(this).remove();
            });
            $mask.fadeOut(200,function() {
                $(this).remove();
            });
        };
        $('.uiinfo_yes',$info).click(function(){
            if(_yescallback && $.isFunction(_yescallback)){
                if(_yescallback.call()){
                    close();
                }
            }else{
                close();
            }
        });
        $('.uiinfo_no',$info).click(function(){
            if(_nocallback && $.isFunction(_nocallback)){
                if(_nocallback.call())
                    close();
            }else{
                close();
            }
        });
        $('.uiinfo_no',$info).click(function(){
            close();
        });
        $info.css('margin-top',-$info.height() / 2).fadeIn(200).addClass('ani').addClass('normal');
        $mask.css({opacity:0.6}).fadeIn(200);
        return {
            close:close
        };
    };
    //错误提示弹框
    $.hyc.ui.error = function(title,message){
        var $info = $(html).appendTo($('body'));
        $('.uiinfo_content',$info).html('<p class="info error">'+(arguments.length==2?arguments[1]:arguments[0])+'</p>');
        $('.uiinfo_title',$info).html(arguments.length==2?arguments[0]:"提示");

        var $mask = $('<div class="uiinfo_mask"></div>').appendTo($('body'));
        var close = function(){
            $info.fadeOut(200,function() {
                $(this).remove();
            });
            $mask.fadeOut(200,function() {
                $(this).remove();
            });
        };
        $('.uiinfo_yes',$info).click(function(){
            close();
        });
        $info.css('margin-top',-$info.height() / 2).fadeIn(200).addClass('ani').addClass('normal');
        $mask.css({opacity:0.6}).fadeIn(200);
        return {
            close:close
        };
    };
    //警告提示弹框
    $.hyc.ui.warn = function(title,message){
        var $info = $(html).appendTo($('body'));
        $('.uiinfo_content',$info).html('<p class="info warn">'+(arguments.length==2?arguments[1]:arguments[0])+'</p>');
        $('.uiinfo_title',$info).html(arguments.length==2?arguments[0]:"提示");

        var $mask = $('<div class="uiinfo_mask"></div>').appendTo($('body'));
        var close = function(){
            $info.fadeOut(200,function() {
                $(this).remove();
            });
            $mask.fadeOut(200,function() {
                $(this).remove();
            });
        };
        $('.uiinfo_yes',$info).click(function(){
            close();
        });
        $info.css('margin-top',-$info.height() / 2).fadeIn(200).addClass('ani').addClass('normal');
        $mask.css({opacity:0.6}).fadeIn(200);
        return {
            close:close
        };
    };

})(jQuery);
