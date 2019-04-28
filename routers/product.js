const express=require('express');
const pool=require('../pool.js');
//创建商品路由
var router=express.Router();
//查看购物车
router.get('/product_cart',(req,res)=>{
	pool.query('SELECT * FROM rm_cart',(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}
	})
})
//删除购物车商品
router.get('/cart_delete',(req,res)=>{
	var obj=req.query;
	console.log($price);
	pool.query('DELETE FROM rm_cart WHERE price=?',[$price],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}
	})
})
//添加到购物车
router.get('/cart_add',(req,res)=>{
	var obj=req.query;
	var $cname=obj.cname;
	var $ctxt=obj.ctxt;
	var $price=obj.price;
	pool.query('INSERT INTO rm_cart VALUE (null,?,?,?)',[$cname,$price,$ctxt],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}
	})
})
//导出商品路由
module.exports=router;