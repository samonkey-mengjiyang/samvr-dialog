//入口文件
import  samvrDialogcss from "./samvrDialog.css";
import samvrDialog from "./samvrDialog.js";





//1 默认不传参数 加载loading..
$(".btn1").click(function(event) {
	let samvrdialog = new samvrDialog();
});
//2 传头部和文本加载
$(".btn2").click(function(event) {
	/* Act on the event */
	let samvrdialog = new samvrDialog({
		message:'操作已成功',
		type:'success'  //error
	});

});

//3 传头部和文本加载
$(".btn3").click(function(event) {
	/* Act on the event */
	let samvrdialog = new samvrDialog({
		message:'您确定要取消操作吗?',
		type:'error',
		button:[{
			type:'red',
			text:'我确定',
				callback:function(){
					console.log('我是确定btn的回调');
					return false; //返回ture的时候 会调用关闭弹窗的事件
				}
			},
			{
			type:'green',
			text:'在想想',
			callback:function(){
				console.log('我是再想想btn的回调');
				return true;
			}
		}]


	});

});
//4  定时关闭
$(".btn4").click(function(event) {
	/* Act on the event */
	let samvrdialog = new samvrDialog({
		message:'您确定要取消操作吗?',
		type:'error',
		delay:3000//定时关闭
	});

});

//5 点击确定触发回调弹出提示2s关闭
$(".btn5").click(function(event) {
	/* Act on the event */
	let samvrdialog = new samvrDialog({
		message:'您确定要取消操作吗?',
		type:'error',
		button:[{
			type:'red',
			text:'我确定',
				callback:function(){
					console.log('我是确定btn5的回调');
					let samvrdialog2 = new samvrDialog({
					message:'处理成功',
					type:'success',
					delay:3000//定时关闭
					});
					return false; //返回ture的时候 会调用关闭弹窗的事件
				}
			},
			{
			type:'green',
			text:'在想想',
			callback:function(){
				console.log('我是再想想btn的回调');
				return true;
			}
		}]


	});

});



