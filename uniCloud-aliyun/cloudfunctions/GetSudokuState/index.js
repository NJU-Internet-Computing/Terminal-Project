'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	const db = uniCloud.database();
	// 获取 `sudoku` 集合的引用
	const sudoku = db.collection('sudoku');
	const dbCmd = db.command ;
	sudoku.where({
		difficulty: dbCmd.eq()
	}) ;
	
	
	//返回数据给客户端	
	let result = "cloud func result" ;
	return result ;
};
