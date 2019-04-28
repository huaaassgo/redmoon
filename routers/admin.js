const express=require('express');
const pool=require('../pool.js');
//创建管理路由
var router=express.Router();
//登陆
router.post('/login',(req,res)=>{
	var obj=req.body;
	var $aname=obj.aname;
	var $apwd=obj.apwd;
	pool.query('SELECT * FROM admin WHERE aname=? AND apwd=?',[$aname,$apwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('1');
		}else{
			res.send('0');
		}
	})
})
//用户列表
router.get('/user_list',(req,res)=>{
	var obj=req.query;
	pool.query('SELECT * FROM rm_user',(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})
//列表删除
router.get('/user_delete',(req,res)=>{
	var obj=req.query;
	var $uid=obj.uid;
	console.log($uid);
	pool.query('DELETE FROM rm_user WHERE uid=?',[$uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}
	})
})
//用户修改前的导入查询
router.get('/user_query',(req,res)=>{
	var obj=req.query;
	console.log(obj);
	var $uid=obj.uid;
	pool.query('SELECT * FROM rm_user WHERE uid=?',[$uid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result[0]);
		}
	})
})
//用户修改
router.post('/user_update',(req,res)=>{
	var obj=req.body;
	var $uid=obj.uid;
	var $uname=obj.uname;
	var $email=obj.email;
	var $phone=obj.phone;
	var $gender=obj.gender;
	console.log(obj);
	if(!$uname){
		res.send('1_0');
		return;
	}
	if(!$email){
		res.send('2_0');
		return;
	}
	if(!$phone){
		res.send('3_0');
		return;
	}
	pool.query('UPDATE rm_user SET uname=?,email=?,phone=?,gender=? WHERE uid=?',[$uname,$email,$phone,$gender,$uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	})
})
//商品列表
router.get('/product_list',(req,res)=>{
	var obj=req.query;
	pool.query('SELECT * FROM rm_product',(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})
//添加商品
router.post('/product_add',(req,res)=>{
	var obj=req.body;
	console.log(obj);
	var $pname=obj.pname;
	var $price=obj.price;
	var $ptxt=obj.ptxt;
	if(!$pname){
		res.send('1_0');
		return;
	}
	if(!$price){
		res.send('2_0');
		return;
	}
	if(!$ptxt){
		res.send('3_0');
		return;
	}
	pool.query('INSERT INTO rm_product VALUE (null,?,?,?)',[$pname,$price,$ptxt],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}
	})
})
//商品列表删除
router.get('/product_delete',(req,res)=>{
	var obj=req.query;
	var $pid=obj.pid;
	pool.query('DELETE FROM rm_product WHERE pid=?',[$pid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}
	})
})
//商品修改前导入查询
router.get('/product_query',(req,res)=>{
	var obj=req.query;
	var $pid=obj.pid;
	pool.query('SELECT * FROM rm_product WHERE pid=?',[$pid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result[0]);
		}
	})
})
//修改商品
router.post('/product_update',(req,res)=>{
	var obj=req.body;
	console.log(obj);
	var $pid=obj.pid;
	var $pname=obj.pname;
	var $price=obj.price;
	var $ptxt=obj.ptxt;
	if(!$pname){
		res.send('1_0');
		return;
	}
	if(!$price){
		res.send('2_0');
		return;
	}
	if(!$ptxt){
		res.send('3_0');
		return;
	}
	pool.query('UPDATE rm_product SET pname=?,price=?,ptxt=? WHERE pid=?',[$pname,$price,$ptxt,$pid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	})
})
//增加用户
router.post('/user_add',(req,res)=>{
	var obj=req.body;
	console.log(obj);
	var $uname=obj.uname;
	var $upwd=obj.upwd;
	if(!$uname){
		res.send('1_0');
		return;
	}
	if(!$upwd){
		res.send('2_0');
		return;
	}
	pool.query('INSERT INTO rm_user VALUE (null,?,?,null,null,null)',[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	})
})
//查询用户
router.get('/user_query2',(req,res)=>{
	var obj=req.query;
	var $uid=obj.uid;
	if(!$uid){
		res.send('1_0');
		return;
	}
	pool.query('SELECT * FROM rm_user WHERE uid=?',[$uid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send('0');
		}
	})
})
//导出
module.exports=router;