/**
 * Created by 11070 on 2017/5/11.
 */

define(['bootstrap','jquery','jquery_form','template','aside','header','util'],function(ud,$,ud,template,un,ud,util) {
    // 公共方法的调用
    var result = util({'checkLoginStatus':[],'nprogress':[],'loading':[],'getSearchInfo':[location.search]});

var id = result.getSearchInfo.tc_id;

    // 以下是编辑讲师
    if(id){
        $.ajax({
            url:'/v6/teacher/edit',
            type:'get',
            data:{'tc_id':id},
            success:function(data){
                var resulttext = template('tc_Edit_temp',data);
                $('.teacher-add form').html(resulttext)
            }
        });

        // 在传入id时，点击添加按钮为修改
        // 修改
            $('#tcEidt').ajaxForm({
                url:'/v6/teacher/update',
                data:{
                  'tc_id':id
                },
                success:function(data){
                    console.log(data);
                    location.href = '/html/teacher/list.html';
                }
            })
    }else{
        // 在没有传入id时，点击添加按钮，为添加
        // 以下是添加讲师
            $('#tcEidt').ajaxForm({
                success:function(data){
                    console.log(data);
                    location.href = '/html/teacher/list.html';
                }
            })
    }


    //var id = location.search.slice(parseInt(location.search.indexOf('=')+1));
    //console.log(id)
    //// 在传入id时，回显要编辑的数据
    //// 以下是编辑讲师
    //if(id){
    //    $.ajax({
    //        url:'/v6/teacher/edit',
    //        type:'get',
    //        data:{'tc_id':id},
    //        success:function(data){
    //            $('input[name=tc_name]').val(data.result.tc_name);
    //            // 密码不能回显
    //            $('input[name=tc_join_date]').val(data.result.tc_join_date);
    //
    //            if(data.result.tc_type==='1'){
    //                $('select[name=tc_type] option').eq(0).attr('selected','selected');
    //            }else{
    //                $('select[name=tc_type] option').eq(1).attr('selected','selected');
    //            }
    //
    //            if(data.result.tc_gender==='1'){
    //                $('input[name=tc_gender]').eq(1).attr('checked','checked');
    //            }else{
    //                $('input[name=tc_gender]').eq(0).attr('checked','checked');
    //            }
    //        }
    //    });
    //
    //    // 在传入id时，点击添加按钮为修改
    //    // 修改
    //    $('#addtc').on('click',function(){
    //        $('#tcEidt').ajaxSubmit({
    //            url:'/v6/teacher/update',
    //            data:{
    //              'tc_id':id
    //            },
    //            success:function(data){
    //                console.log(data);
    //                location.href = '/html/teacher/list.html';
    //            }
    //        })
    //    });
    //}else{
    //    // 在没有传入id时，点击添加按钮，为添加
    //    // 以下是添加讲师
    //    $('#addtc').on('click',function(){
    //        $('#tcEidt').ajaxSubmit({
    //            success:function(data){
    //                console.log(data);
    //                location.href = '/html/teacher/list.html';
    //            }
    //        })
    //    });
    //}
});