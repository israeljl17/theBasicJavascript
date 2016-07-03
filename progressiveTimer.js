//israeljl
//simple progressive timer

//Timer Code

var ss = "0" + 0;
var mm = "0" + 0;
var hh = "0" + 0;

var ativo = false;
	 
function timer(){

  if (ss < 59){
    if (ss < 10) {ss = "0" + ss;}
    ss++;
    if (ss < 10) {ss = "0" + ss;}
  } else 
    if (ss == 59 && mm < 59) {
  	 ss = "0" + 0;
      mm++;
       if (mm < 10) {mm = "0" + mm;}
    }
  if (mm == 59 && ss == 59 && hh < 23) {
    ss = "0" + 0;
    mm = "0" + 0;
    hh++;
    if (hh < 10) {hh = "0" + hh;}
  } else 
    if (mm == 59 && ss == 59 && hh == 23) {
  	  ss = "0" + 0;
  	  mm = "0" + 0;
  	  hh = "0" + 0;
    }
	
	console.log(hh + ":" + mm + ":" + ss);
}

function iniciarTimer(){

  timerAtivo = "timer";
  if (!ativo) {
  	iniciarIntervalo = setInterval(function(){ timer() }, 1000);
  	ativo = true;
  }
	
}

function pararTimer(){

  clearInterval(iniciarIntervalo);
  ativo = false;
	
}

function zerarTimer(){

  pararTimer();
  ss = "0" + 0;
  mm = "0" + 0;
  hh = "0" + 0;
  console.log(hh + ":" + mm + ":" + ss);
  
}
