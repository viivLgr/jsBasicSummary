define(function(){
    var util = {
        getFormatDate: function(date, type){
            if(type === 1){
                return '2018-03-11'
            }
            if(type === 2){
                return '2018年3月11日'
            }
        }
    }
    return util
})