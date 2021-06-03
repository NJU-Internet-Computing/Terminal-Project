export default {
	array: [],
	maxSize: 100,
	validTopPtr: 0,
	pointer: 0,
	
	push: function(payload){
		console.log("push") ;
		let obj = JSON.parse(JSON.stringify(payload)) ;
		if(this.pointer >= this.maxSize){
			console.log("stack full") ;
			return ;
		}
				
		if(this.pointer === this.array.length){
			this.array.push(obj) ;
		}else {
			this.array[this.pointer] = obj ;
		}
		
		this.pointer++ ;
		this.validTopPtr = this.pointer ;
				
		console.log(this.array) ;
		// console.log(this.pointer + " / " + this.validTopPtr) ;
	},//end of push
	
	pop: function(){
		if(this.pointer === 0){
			console.log("stack empty") ;
			return ;
		}
		let result = null ;
		
		if(this.pointer ===this.array.length){
			result = this.array.pop() ;
		}else{
			result =this.array[this.pointer-1] ;
		}
		
		this.pointer-- ;
		this.validTopPtr = this.pointer ;
		return result ;
	},//end of pop
	
	revoke: function(){
		console.log("revoke") ;
		if(this.pointer === 1){
			console.log("no more revoke") ;
			return null ;
		}
		
		this.pointer-- ;		
		console.log(this.array) ;
		console.log(this.pointer + " / " + this.validTopPtr) ;
		return this.array[this.pointer-1] ;
	},//end of revoke
	
	withdraw: function(){
		console.log("withdraw") ;
		if(this.pointer === this.validTopPtr){
			console.log("no more withdraw") ;
			return null;
		}
		this.pointer++ ;		
		console.log(this.array) ;
		console.log(this.pointer + " / " + this.validTopPtr) ;
		return this.array[this.pointer-1] ;
	},//end of withdraw
	
	isEmpty: function(){return(this.pointer === 0)},
	isFull: function(){return (this.pointer >= this.maxSize)},	
}