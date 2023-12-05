/**
working out the problem before coding
fractions                   min/max
1/2 1/3 1/4 1/5 1/6 1/7 1/8 1/9 *12 *49
	2/3 2/4 2/5 2/6 2/7 2/8 2/9 *6 *33
		3/4 3/5 3/6 3/7 3/8 3/9 *4 *24
			4/5 4/6 4/7 4/8 4/9 *3 *19
				5/6 5/7 5/8 5/9 *3 *16
					6/7 6/8 6/9 *2 *14
						7/8 7/9 *2 *12
							8/9 *2 *9

test fraction for number excluding 10 since its trivial
to test each result see if number matches between top and bottom
if true, then result can be solved
**/

let nontrivals = [];
//ones
// checkfraction(1,99,2,12,49);
//twos
// checkfraction(2,49,3,6,33);
//threes
// checkfraction(3,33,4,4,24);
//fours
checkfraction(4,24,5,3,19);
//fives
// checkfraction(5,19,6,3,16);
//sixes
// checkfraction(6,16,7,2,14);
//sevens
// checkfraction(7,14,8,2,12);
//eight
//checkfraction(8,12,9,2,9);

function checkfraction(numerator,endNumVal,startDen,startDenVal,endDenVal){
	for(k=1;k<endNumVal;k++){
		for(i=startDen;i<10;i++){
			for(j=startDenVal;j<=endDenVal;j++){
				//console.log(`testing ${numerator} * ${k} / ${i} multiplied by ${j}`);
				let num = numerator*k;
				let den = i*j;
				if(den > 100 || num > 100){
					break;
				}
				if(num != den){	
					checker(0,0);
					checker(0,1);
					checker(1,0);
					checker(1,1);
					
					function checker(index1,index2){
						console.log(num,den)
						if(num.toString()[index1] == den.toString()[index2]){
							if(num/den == parseInt(num.toString()[index1])/parseInt(den.toString()[index2])){
								console.log(`found! matching ${index1} and ${index2}`);
								console.log(num," ",den," ",i," ",j);
								console.log(num/den);
								console.log(parseInt(num.toString()[index1])/parseInt(den.toString()[index2]));
							}
						}
					}
				}
			}
		}
	}
}