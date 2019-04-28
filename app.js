const express=require('express');
const bodyParser=require('body-Parser');
const userRouter=require('./routers/user.js');
const productRouter=require('./routers/product.js');
const adminRouter=require('./routers/admin.js');
//创建web服务器
var server=express();
server.listen(3000);
//托管静态资源
server.use(express.static('html'));
//使用bodyparser解析post数据
server.use(bodyParser.urlencoded({
	extended:false
}));
//挂载
server.use('/user',userRouter);
server.use('/product',productRouter);
server.use('/admin',adminRouter);