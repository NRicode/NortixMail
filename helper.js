"use strict";
const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

let helper = {

	randomID: function(){
			
		let resultStr = "";
		for (let i=0; i<10; i++){
				
			resultStr += chars[Math.floor(Math.random() * chars.length)]; 

		}

		resultStr += new Date().getTime();
		return resultStr;

	}

}

export default helper;
