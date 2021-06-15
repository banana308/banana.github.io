function myfunction(){
         window.location.href="register.html"; 
		 };
		 
function Logout() {
	window.location.href="index.html"; 
};
		 

		
var xmlHttpRequest; 
//XmlHttpRequest对象    
function createXmlHttpRequest(){    
    if(window.ActiveXObject){ //如果是IE浏览器    
        return new ActiveXObject("Microsoft.XMLHTTP");    
    }else if(window.XMLHttpRequest){ //非IE浏览器    
        return new XMLHttpRequest();    
    }    
} 


//登录校验
function check(){
	//获取文本框内容，第一种方法:ID 获取法
	var username=document.getElementById("name02").value;
	var password=document.getElementById("password02").value;
	console.log("输入账号："+username+"\n"+"输入密码："+password);
	
	
	
	var url="http://172.23.27.64:8888/login?username="+username+"&password="+password;   
	         
	//1.创建XMLHttpRequest组建    
	xmlHttpRequest= createXmlHttpRequest();    
		
	//2.设置回调函数    
	xmlHttpRequest.onreadystatechange = zswFun;    
		
	//3.初始化XMLHttpRequest组建    
	xmlHttpRequest.open("GET",url,true);    
		
	//4.发送请求    
	xmlHttpRequest.send(null); 
}

//登录校验，回调函数获取数据   
function zswFun(){    
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){    
        var b = xmlHttpRequest.responseText; 
		console.log("返回响应："+b);
		//把返回数据转换为json格式，然后在读取
		var dataObj=eval("("+b+")");
		console.log(dataObj['code'])
		
        if(dataObj['code'] ==200){    
            alert("登录成功！"); 
			window.location.href="login_login.html"; 
        }else{    
            alert("登录失败！"+dataObj['massage']);    
        }           
    }    
}

//注册校验
function resister(val) {
	//获取文本框内容，第一种方法:ID 获取法
	var username=document.getElementById("name02").value;
	var password01=document.getElementById("password01").value;
	var password02=document.getElementById("password02").value;
	console.log("输入账号："+username+"\n"+"第一次输入密码："+password01+"\n"+"第二次输入密码："+password02);
	
	
	//判断输入是否为空
	user=document.getElementById("name02").value=="";
	psw01=document.getElementById("password01").value=="";
	pswo2=document.getElementById("password02").value=="";
	if (user || psw01 || pswo2){
			alert("输入账号，密码不能为空"); 
	}
	else{
		//判断第一次输入密码和第二次输入密码是否一致
		if (password01==password02){
			var url="http://172.23.27.64:8888/register?username="+username+"&password="+password01;
					 
			//1.创建XMLHttpRequest组建    
			xmlHttpRequest= createXmlHttpRequest();    
				
			//2.设置回调函数    
			xmlHttpRequest.onreadystatechange = resister01;    
				
			//3.初始化XMLHttpRequest组建    
			xmlHttpRequest.open("GET",url,true);    
				
			//4.发送请求    
			xmlHttpRequest.send(null); 
		}
		else{
			alert("两次输入密码不一致，请重新输入")
			document.getElementById("password01").value="";
			document.getElementById("password02").value="";
		}
	}
	
	
}

//注册校验，回调函数获取数据   
function resister01(){    
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){    
        var b = xmlHttpRequest.responseText; 
		console.log("返回响应："+b);
		//把返回数据转换为json格式，然后在读取
		var dataObj=eval("("+b+")");
		console.log(dataObj['code'])
		
        if(dataObj['code'] ==200){    
            alert("注册成功！"); 
			window.location.href="login_login.html"; 
        }else{    
            alert("注册失败！"+dataObj['massage']);    
        }           
    }    
}

//修改校验
function password(val) {
	//获取文本框内容，第一种方法:ID 获取法
	var username=document.getElementById("name02").value;
	var password=document.getElementById("password").value;
	var password01=document.getElementById("password01").value;
	var password02=document.getElementById("password02").value;
	console.log("输入账号："+username+"\n"+"输入原密码："+password+"\n"+"第一次输入密码："+password01+"\n"+"第二次输入密码："+password02);
	
	
	//判断输入是否为空
	user=document.getElementById("name02").value=="";
	psw=document.getElementById("password").value=="";
	psw01=document.getElementById("password01").value=="";
	pswo2=document.getElementById("password02").value=="";
	if (user || psw ||psw01 || pswo2){
			alert("输入账号，密码不能为空"); 
	}
	else{
		//判断第一次输入密码和第二次输入密码是否一致
		if (password01==password02){
			var url="http://172.23.27.64:8888/password?username="+username+"&password="+password+"&new_password="+password01;
					 
			//1.创建XMLHttpRequest组建    
			xmlHttpRequest= createXmlHttpRequest();    
				
			//2.设置回调函数    
			xmlHttpRequest.onreadystatechange = resister02;    
				
			//3.初始化XMLHttpRequest组建    
			xmlHttpRequest.open("GET",url,true);    
				
			//4.发送请求    
			xmlHttpRequest.send(null); 
		}
		else{
			alert("两次输入密码不一致，请重新输入")
			document.getElementById("password01").value="";
			document.getElementById("password02").value="";
		}
	}
	
	
}

//修改校验，回调函数获取数据   
function resister02(){    
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){    
        var b = xmlHttpRequest.responseText; 
		console.log("返回响应："+b);
		//把返回数据转换为json格式，然后在读取
		var dataObj=eval("("+b+")");
		console.log(dataObj['code'])
		
        if(dataObj['code'] ==200){    
            alert("修改成功！"); 
			window.location.href="login_login.html"; 
        }else{    
           alert("修改失败！"+dataObj['massage']); 
		   document.getElementById("password").value="";
		   document.getElementById("password01").value="";
		   document.getElementById("password02").value="";
		   
        }           
    }    
}