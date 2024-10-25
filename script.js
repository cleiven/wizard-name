const commonSyls = ["mån","ing","er","a","ly","ed","i","es","re","tion","in","e","con","ter","ex","al","de","com","o","di","en","an","ty","ry","u","ti","ri","be","per","to","pro","ac","ad","ar","ers","ment","or","tions","ble","der","ma","na","si","un","at","dis","ca","cal","man","ap","po","sion","vi","el","est","la","lar","pa","ture","for","is","mer","pe","ra","so","ta","as","col","fi","ful","ger","low","ni","par","son","tle","day","ny","pen","pre","tive","car","ci","mo","on","ous","pi","se","ten","tor","ver","ber","can","dy","et","it","mu","no","ple","cu","fac","fer","gen","ic","land","light","ob","of","pos","tain","den","ings","mag","ments","set","some","sub","sur","ters","tu","af","au","cy","fa","im","li","lo","men","min","mon","op","out","rec","ro","sen","side","tal","tic","ties","ward","age","ba","but","cit","cle","co","cov","da","dif","ence","ern","eve","hap","ies","ket","lec","main","mar","mis","my","nal","ness","ning","n't","nu","oc","pres","sup","te","ted","tem","tin","tri","tro","up","va","ven","vis","am","bor","by","cat","cent","ev","gan","gle","head","high","il","lu","me","nore","part","por","read","rep","su","tend","ther","ton","try","um","uer","way","ate","bet","bles","bod","cap","cial","cir","cor","coun","cus","dan","dle","ef","end","ent","ered","fin","form","go","har","ish","lands","let","long","mat","meas","mem","mul","ner","play","ples","ply","port","press","sat","sec","ser","south","sun","the","ting","tra","tures","val","var","vid","wil","win","won","work","act","ag","air","als","bat","bi","cate","cen","char","come","cul","ders","east","fect","fish","fix","gi","grand","great","heav","ho","hunt","ion","its","jo","lat","lead","lect","lent","less","lin","mal","mi","mil","moth","near","nel","net","new","one","point","prac","ral","rect","ried","round","row","sa","sand","self","sent","ship","sim","sions","sis","sons","stand","sug","tel","tom","tors","tract","tray","us","vel","west","where","writ","gyatt","clad","sword","bear","dreath","glam","glad","slead","snow","span","mad","lead","yearn","ops"]

function genName() {
    return commonSyls[Math.floor(Math.random() * commonSyls.length)] + commonSyls[Math.floor(Math.random() * commonSyls.length)];
}

function chooseColor() {
    colors = ["#b098f5","#6aa2fc","#f5c84c","#f5c84c","#6af7b1","#a76af7","#e56af7","#f76a78","#f76a78","#9af078"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// thank you stackexchange
// https://stackoverflow.com/questions/5092808/how-do-i-randomly-generate-html-hex-color-codes-using-javascript
function randomColor() {
    return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}

function popName() {
    const name = genName();
    document.getElementById("bandName").innerHTML = name[0].toUpperCase() + name.slice(1);
    document.getElementById("bandName").style.textShadow = "2px 3px" + randomColor();
    document.body.style.backgroundImage = "linear-gradient("+randomColor()+","+randomColor()+")" 
}
