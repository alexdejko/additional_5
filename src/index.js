module.exports = function check(str, bracketsConfig) {
  // your solution
let s = str;
const config =  bracketsConfig;
let newConfig = [];
let len = s.length;
for (let i=0; i<config.length;i++){
	newConfig[i] =String(config[i][0])+String(config[i][1]);
}
for (i=0; i<len;i++){
	for (let j=0;j<newConfig.length;j++){
		if (s.indexOf(newConfig[j])>=0){
			s=s.slice(0,s.indexOf(newConfig[j]))+s.slice(s.indexOf(newConfig[j])+2);
		}
	}
}
if (s.length>=1){
	return false;
}else{
	return true;
}
}
