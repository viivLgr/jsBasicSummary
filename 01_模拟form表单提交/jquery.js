// 模拟表单请求数据
$.extend({
    StandardPost:function(url,args){
        var body = $(document.body),
            form = $("<form id='form' method='post'></form>"), // enctype='multipart/form-data'
            input;
        form.attr({"action":url});
        $.each(args,function(key,value){
            input = $("<input type='hidden'>");
            input.attr({"name":key});
            input.val(value);
            form.append(input);
        });
        form.appendTo(document.body);
        document.body.removeChild(form[0]);
        return form;
    }
});