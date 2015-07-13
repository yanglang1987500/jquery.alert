/**
 * Created by IBM on 2015/3/31.
 * 提示框演示
 * @author yanglang
 */
require.config({
    baseUrl: './lib',
    paths: {
        'jquery':'jquery-1.8.3.min',
        'domReady':'domReady-2.0.1',
        'alert':'jquery-alert'
    },
    shim: {
        'alert':['jquery']
    }
});


require(['domReady!', 'jquery','alert'], function (doc, $) {
    $('input[type=button]').click(function(){
        switch($(this).attr('id')){
            case 'info':
                $.hyc.ui.info('这是一个普通提示框');
                break;
            case 'confirm':
                $.hyc.ui.confirm('确认提示框','这是一个确认提示框',{
                    yescallback: function () {
                        $.hyc.ui.info('您点击了确认按钮，返回false不关闭对话框');
                        return false;
                    },
                    nocallback: function () {
                        $.hyc.ui.info('您点击了取消按钮，返回true关闭对话框');
                        return true;
                    }
                });
                break;
            case 'error':
                $.hyc.ui.error('错误提示框','这是一个错误提示框');
                break;
            case 'warn':
                $.hyc.ui.warn('警告提示框','这是一个警告提示框');
                break;

        }
    });
});
