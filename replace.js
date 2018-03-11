function replaceText(parent){
	var childnodes = parent.childNodes;
	for(var i=0; i<parent.childNodes.length; i++){
		node = childnodes[i];
		if(node.nodeType == 3){
			var str1 = node.nodeValue;
//changes strings 'Donald Trump' and 'Mr. Trump' with 'Crime master Gogo'
			var str2 = str1.replace(/Rahul Gandhi|rahul gandhi/g, 'Apna PAPPU');
			var str3 = str2.replace(/Gandhi|Mr. Gandhi/g, 'Pappu');
			node.nodeValue = str3;
		}
		else if(node.nodeType == 1){
			replaceText(node);
		}
	}
}


replaceText(document.body);//will not include data coming from api, as those scripts run after the page has been loaded

//use below code instead of above line if there is some data coming from api, set delay accordingly

//  var delay = 5000;//milliSec
//  window.onload = setTimeout(function() {
//  	replaceText(document.body);
// }, delay);






	
