let numnontrivals = [];
let dennontrivals = [];

for(let num=11;num<=99;num++){
	for(let den=num+1;den<=99;den++){
		if(num == den || (num%10==0 && den%10==0)){
			continue; //ignore this pairing
		}
		else{
			checker(0,0);
			checker(0,1);
			checker(1,0);
			checker(1,1);
			
			function checker(index1,index2){
				if(num.toString()[index1] == den.toString()[index2]){
					// console.log(num," ",den)
					// console.log(parseFloat(num.toString()[index1])," ",parseFloat(den.toString()[index2]))
					// console.log(parseFloat(num.toString()[index1])/parseFloat(den.toString()[index2]))
					if(num/den == parseInt(num.toString()[(index1+1)%2])/parseInt(den.toString()[(index2+1)%2])){
						console.log(`found! matching ${num} and ${den}`);
						console.log(`lowest form: ${num.toString()[(index1+1)%2]} ${den.toString()[(index2+1)%2]}`);
						numnontrivals.push(parseInt(num.toString()[(index1+1)%2]));
						dennontrivals.push(parseInt(den.toString()[(index2+1)%2]));
					}
				}
			}
		}
	}
}
let newnum = numnontrivals[0]*numnontrivals[1]*numnontrivals[2]*numnontrivals[3];
let newden = dennontrivals[0]*dennontrivals[1]*dennontrivals[2]*dennontrivals[3];
console.log("Final answer: ",newnum,"/",newden);