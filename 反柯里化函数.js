// 轻提示
function Toast(option){
    this.prompt = '';
  }
  Toast.prototype = {
    constructor: Toast,
    // 输出提示
    show: function(){
      console.log(this.prompt);
    }
  };
  
  // 新对象
  var obj = {
      prompt: '新对象'
  };
  function unCurrying(fn){
    return function(){
        return fn.apply(...arguments);
    }
}

var objShow = unCurrying(Toast.prototype.show);

objShow(obj); // 输出"新对象"
