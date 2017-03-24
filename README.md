简述:
之前在慕课网上看到的一个简单版的移动端弹窗组件,依赖zepto的事件,用传统的prototype来扩展。
最近一直在学习 webpack + es6 
所以就有了尝试用webpack + es6 来重写一次, 多练习来加深理解。

ps:空闲的时候 学到哪块觉得可以复用的话，会持续更新  这个组件限于学习用


用法:

```javascript
import  samvrDialogcss from "./samvrDialog.css";
import samvrDialog from "./samvrDialog.js";
```

一些常用的参数:
```javascript

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

```


