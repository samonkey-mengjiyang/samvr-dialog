import $ from "../zepto.js";
class samvrDialog{
	//init 初始化配置文件
constructor(config){
	this.config = {
		message:"loadingg..",
		effect:'animate',
		type:'error',
		maskOpacity:'0.5',
	}
	//判断如果是创建对象的时候传的参数　$.isPlainObject() 覆盖原配置
	if(config && $.isPlainObject(config)){
		$.extend(this.config,config);
	}else{
		this.isConfig = true;
	}
	//console.log(this.config);
	//6---->创建Dom 
	this.body = $("body"); //body的dom
	this.mask = $('<div class="samvr-dialog">'); //遮罩层
	this.win = $('<div class="samvr-window">'); //弹出框
	this.winHeader = $('<div class="samvr-header"></div>'); //弹出框头部
	this.winContent = $('<div class="samvr-content">'); //弹出框内容
	this.winFooter = $('<div class="samvr-footer">'); //弹出框尾部
	this.creat();
}
//创建方法
creat(){
	//赋值下 this太多有点乱 感觉
	let cConfig = this.config;
	if(this.isConfig){
		//创建dom
		this.win.append(this.winHeader.addClass('yellow'));
		this.animateS();
		this.mask.append(this.win);
		this.body.append(this.mask);
	}else{
		//是否扩展动画
		if(cConfig.effect){
			this.animateS();
		}
		//是否有类型
		if(cConfig.type !=''){
			//loading 类型
			this.win.append(this.winHeader.addClass(cConfig.type));
		}
		//内容文本
		this.winContent.html(cConfig.message); 
		this.win.append(this.winContent);
		//按钮组
		if(cConfig.button){
			//---按钮组有多个，循环
			/*button.each(function(){

			});*/
			this.creatButtions(this.winFooter,cConfig.button);
			this.win.append(this.winFooter);
		}
		//对话框遮罩透明度
		if(cConfig.maskOpacity){
			this.mask.css('background-color','rgba(0,0,0,'+cConfig.maskOpacity+')');
		}

		//多久关闭
		if(cConfig.delay && cConfig.delay != 0){
			window.setTimeout( () =>{
				this.close();
			},cConfig.delay);
		}


		this.mask.append(this.win);
		this.body.append(this.mask);
	}
}

//创建按钮
creatButtions(footer,config){
	//循环按钮组
	let _this = this;
	config.forEach(function(item,index){
		//console.log(item);
		let type = item.type?item.type:'red',
		    text = item.text?item.text:'按钮'+i,
		    callback = item.callback?item.callback:null;
		  // console.log(type);
		let button = $(`<button class="${type}">${text}</button>`);
	
		if(callback){
			button.tap( ()=>{
			let isClose = callback();
			if(isClose){
				_this.close();
			}else{

			}
			

		});

		}
		footer.append(button);



	});
}
//关闭弹窗
close(){
	this.mask.remove();
}
//入场动画
animateS(){
	this.win.css('-webkit-transform','scale(0,0)');
	window.setTimeout(()=>{
		this.win.css('-webkit-transform','scale(1,1)');
	},100);
}

}

export default  samvrDialog;