function firstNonRepeatedChar(str) {
 // Write your code here
	let freqs = {}
for(let i=0;i<str.length;i++){
    freqs[str[i]] = (freqs[str[i]]||0)+1;
}
for(let num of str){
    if (freqs[num] === 1){
        return num;
    }
}
return null;
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
