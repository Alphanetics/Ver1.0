var word = localStorage['objectToPass']; // word from the other
localStorage.removeItem( 'objectToPass' ); // Clear the localStorage
var done = document.querySelector("#done");
var play = document.querySelector("#play");
var once = true;

var graphemes = [
					['p', ['p']],
					['pp', ['p']],
					['b', ['b']],
					['bb', ['b']],
					['t', ['t']],
					['tt', ['t']],
					['bt', ['t']],
					['ght', ['t']],
					['ed', ['t']],
					['d', ['d', 'j']],
					['dd', ['d']],
					['de', ['d']],
					['ld', ['d']],
					['c', ['k', 's', 'sh', 'ch']],
					['k', ['k']],
					['ck', ['k']],
					['q', ['k']],
					['cc', ['k']],
					['que', ['k']],
					['g', ['g', 'zh', 'j']],
					['gg', ['g', 'j']],
					['gu', ['g']],
					['gue', ['g']],
					['gh', ['g']],
					['ps', ['s']],
					['s', ['s', 'z', 'sh', 'zh']],
					['ss', ['s', 'z', 'sh']],
					['sc', ['s']],
					['se', ['s', 'z']],
					['ce', ['s']],
					['z', ['z']],
					['zz', ['z']],
					['ze', ['z']],
					['sh', ['sh']],
					['ti', ['sh']],
					['ch', ['sh', 'ch', 'k']],
					['f', ['f', 'v']],
					['ff', ['f']],
					['ph', ['f']],
					['lf', ['f']],
					['fe', ['f']],
					['v', ['v']],
					['ve', ['v']],
					['th', ['th']],
					['the', ['th']],
					['tch', ['ch']],
					['j', ['j']],
					['ge', ['j']],
					['dge', ['j']],
					['l', ['l']],
					['ll', ['l']],
					['le', ['l']],
					['il', ['l']],
					['al', ['l', 'ar']],
					['el', ['l']],
					['ul', ['l']],
					['r', ['r']],
					['rr', ['r']],
					['wr', ['r']],
					['rh', ['r']],
					['m', ['m']],
					['mm', ['m']],
					['mb', ['m']],
					['me', ['m']],
					['mn', ['m']],
					['n', ['n', 'ng']],
					['nn', ['n']],
					['kn', ['n']],
					['ne', ['n']],
					['pn', ['n']],
					['gn', ['n']],
					['en', ['n']],
					['an', ['n']],
					['ng', ['ng']],
					['h', ['h']],
					['wh', ['h', 'w']],
					['w', ['w']],
					['u', ['w', 'y', 'i', 'u', 'oo']],
					['o', ['w', 'i', 'o', 'u', 'oa', 'oo']],
					['y', ['y', 'i', 'ee', 'ie']],
					['io', ['y']],
					['a', ['a', 'i', 'o', 'u', 'ae', 'ar', 'or']],
					['e', ['e', 'ee']],
					['ea', ['e', 'ee']],
					['ai', ['e', 'ae', 'ie']],
					['i', ['i', 'ee', 'ie']],
					['ui', ['i', 'oo']],
					['ow', ['o', 'oa', 'ou']],
					['au', ['o', 'ar', 'or']],
					['ough', ['o', 'oa', 'or', 'ou']],
					['oo', ['u', 'oo']],
					['ou', ['u', 'oo', 'ou']],
					['oe', ['u', 'oa', 'oo']],
					['ay', ['ae']],
					['eigh', ['ae']],
					['ee', ['ee']],
					['ie', ['ee', 'ie']],
					['ei', ['ee']],
					['ey', ['ee', 'ie', 'ae']],
					['eo', ['ee']],
					['igh', ['ie']],
					['uy', ['ie']],
					['oa', ['oa']],
					['ew', ['oo']],
					['wo', ['oo']],
					['ue', ['oo']],
					['ar', ['ar', 'or']],
					['ear', ['ar', 'er', 'air', 'ear']],
					['or', ['or', 'er']],
					['oor', ['or']],
					['ore', ['or']],
					['oar', ['or']],
					['aw', ['or']],
					['augh', ['or']],
					['er', ['er']],
					['ir', ['er']],
					['ur', ['er']],
					['our', ['er']],
					['ere', ['er', 'air', 'ear']],
					['air', ['air']],
					['are', ['air']],
					['eir', ['air']],
					['ayor', ['air']],
					['eer', ['ear']],
					['ier', ['ear']],
					['oi', ['oi']],
					['oy', ['oi']],
					['x', ['ks']] // created
        ];
//============================================================================
// FIND KS.MP3 FILEEEE
// sorting graphemes
function sortArray(arr){
  var len = arr.length;
  for (var i =0; i<len-1; i++){
    for (var j=i+1; j<len; j++){
      if((arr[j][1].length<arr[i][1].length)
        ||
        ((arr[j][1].length === arr[i][1].length)&&(arr[j][0].length>arr[i][0].length)))
        {
          var temp = arr[j];
          arr[j]=arr[i];
        	arr[i]= temp;
        }
      }
    }
    return arr;
  }

// create a dictionary with sorted graphemes
var dict = sortArray(graphemes);

//is the string a grapheme
function isGrapheme(str) {
	for (var i = 0; i < dict.length; i++) {

		if (str === dict[i][0]) {
			return true;
		}
	}
	return false;
}

// find a specific grapheme and return the phoneme
function lookup(grapheme) {
	var phonemeList = [];
	for (var i = 0; i < dict.length; i++) {
		if (grapheme === dict[i][0]) {
			phonemeList = dict[i][1];
			return phonemeList;
		}
	}
}

//// SCRIPT TO RUNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/////////////////////////////////////////
  word = word.toLowerCase();
	var parsed = [];

while (word.length > 0){
	var grapheme = word.charAt(0);
		while ( (grapheme.length < word.length) && isGrapheme(grapheme+word.charAt(grapheme.length)))
		{
			grapheme = word.slice(0, grapheme.length+1);

		}
		parsed.push(grapheme.slice(0, grapheme.length));//-1));
		word = word.slice(grapheme.length/*-1*/, word.length);
		//console.log('word: '+word);
	}

	parsed.pop();
	parsed.push(grapheme);



function updateParse(array) {
  	for (var i = 0; i < array.length; i++) {
  		array[i] = [array[i], lookup(array[i])];
  	}
  	return array;
}


var final_arr = updateParse(parsed); // has a grapheme type structure
var aud = [];


var display = document.querySelector("#table");
//var letters = document.querySelectorAll("td");
var o_arr = [];
var order = -1;

for (var i =0; i<final_arr.length; i++){
  o_arr.push(final_arr[i][1][0]+ '.mp3');
}

for (var ind =0; ind<final_arr.length;ind++ ){
  console.log(ind);
  // for each grapheme we make a dropdown menu

  var tabrow = document.createElement('tr');
	tabrow.setAttribute('id', ind);

	var td  = document.createElement('td'); // td is the actual phoneme
	td.appendChild(document.createTextNode(final_arr[ind][0]));

	td.classList.add('dropbtn');
	tabrow.appendChild(td);
  // div.classList.add('dropdown-content');
  aud.push('./consolents/'+final_arr[ind][0]+'.mp3');
  for (var p=0; p<final_arr[ind][1].length;p++){
    //inside the dropdown menu there is going to be  anchor element for each
    // phoneme
    var element = document.createElement('td');
    var t = document.createTextNode(final_arr[ind][1][p]);
    element.appendChild(t);
		if(p == 0){
			element.classList.add('show');
		}

    element.addEventListener("click", function(){
				order = this.parentNode.id;
        var n = String(this.textContent);
				o_arr[order] = './consolents/'+ n+'.mp3';

        var file = ['./consolents/'+n + '.mp3']; // change this value
        var audio = new Audio(file[0]);
        audio.play();


				var previ = document.getElementsByClassName("show");
				for (var s = 0; s<previ.length; s++){
					if(previ[s].parentNode.id == this.parentNode.id){
						previ[s].classList.remove('show');
					}
				}
				this.classList.add('show');

    });
    tabrow.appendChild(element);
    display.appendChild(tabrow);// adds div to td


  }

}
//=========================================================================
done.addEventListener("click", function(){
	if (once){
        var div = document.createElement('div');
			  div.appendChild(document.createTextNode("https://thank-mr-goose.ca"));
				div.setAttribute("id", "final");
				document.querySelector('#link').appendChild(div);
				once = false;
			}
		});


//=========================================================================
var current = 0;
play.addEventListener("click", function(){
	current = 0;
	var audio_tag = document.createElement('audio');
	audio_tag.src = o_arr[current];
	audio_tag.type = "audio/mp3";
	document.querySelector('.wrapper').append(audio_tag);
  audio_tag.onended =  function() {
		var playlist = o_arr.length;
		current++;
		if ( current == playlist){

		}
		else{
			this.src = o_arr[current];
			this.play();
		}
};
	audio_tag.play();

});


//=========================================================================

// optimizes looks depending on how many things have to be displayed
window.onload=function (){
	if(document.querySelector('table').clientHeight>1000){
		document.querySelector('.myDiv1').setAttribute('style', 'justify-content: flex-start;');
	}
};
