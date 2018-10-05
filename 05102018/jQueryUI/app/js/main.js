$(function(){
    $('#datepicker').on('change',e =>{
        console.log($(e.target).val());
    })
    $('#datepicker').datepicker({
        dateFormat:"yy-mm-dd",
        onChangeMonthYear : function(){
            console.log('onChangeMonthYear ');
        }
    });
})
