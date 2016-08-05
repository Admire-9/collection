/**
 * Created by admire on 2015/6/10 0010.
 */
$(function(){
    var inputs = $(".register-content input");
    inputs.each(function(){
        $(this).bind({
            focus: function() {
                $(this).css("border","2px solid #95B7EE");
            },
            blur: function() {
                $(this).css("border", "1px solid #DFDFDF");
            }
         })
    });

    var checkedAgress = $(".agree");
    var reBtn = $(".reBtn");

    var temp = checkedAgress.bind("click",function(){
        if(!checkedAgress.attr("checked")){
            reBtn.attr("disabled",false);
            reBtn.css("background-color","#00A0DA");
            reBtn.css("border-color","#00A0DA");
            reBtn.css("color","#fff");
            checkedAgress.attr("checked",true);
        }else{

            reBtn.attr("disabled",true);
            checkedAgress.attr("checked",false);
            reBtn.css("background-color","#F9F9F9");
            reBtn.css("border-color","#F9F9F9");
            reBtn.css("color","#AAA")
        }
    });

   $(".registerForm").validate({
       rules:{
           userId:{
               required:true,
               minlength:2,
               maxlength:10
           },
           userPwd:{
               required:true,
               minlength:6,
               maxlength:16
           },
           userEmail:{
               required:true
           }
       },
       messages:{
           userId:{
               required:"必须填写",
               minlength:"最少2位",
               maxlength:"最多10位"
           },
           userPwd:{
               required:"必须填写",
               minlength:"最少6位",
               maxlength:"最多10位"
           },
           userEmail:{
               required:"填写正确的Email"
           }
       }
   })
})
