//var labels = [];
//var dataset = [];
//var color = [];
//var ans = [];

document.getElementById('btn_calc').addEventListener('click', hyper);
document.getElementById("btn_exact").addEventListener("click", exact);
document.getElementById("btn_less").addEventListener("click", less);
document.getElementById("btn_great").addEventListener("click", great);



function hyper(){
  var N = document.getElementById('N').value;
  var n = document.getElementById('n').value;
  var k = document.getElementById('k').value;
  var x = document.getElementById('x').value;

  console.log(k);
  console.log(x);
  var comb_n1 = combination(k,x);
  var comb_n2 = combination((N-k), (n-x));
  var comb_d = combination(N,n);

  var prob = (Math.round(((comb_n1*comb_n2)/comb_d) * 100) / 100).toFixed(2);
  var cumulative = 0;


  for(var i = 0; i <= N; i++){
    comb_n1 = combination(k,i);
    comb_n2 = combination((N-k),(n-i));

    if(i <= x){
      cumulative = cumulative + ((comb_n1*comb_n2)/comb_d);
    }
    
    labels.push(i);
    var temp = (Math.round(((comb_n1*comb_n2)/comb_d) * 100) / 100);
    
    dataset.push(temp);
    color.push('rgba(75, 192, 192, 0.4');
  }

  var less = (Math.round(cumulative * 100) / 100).toFixed(2);
  var greater =(Math.round((1-cumulative) * 100) / 100).toFixed(2);
  var avg =(Math.round(((n*k)/N) * 100) / 100).toFixed(2);
  var variance = (Math.round((((n*k)*(N-k)*(N-n))/(pow(N,2)*(N-1))) * 100) / 100).toFixed(2);

  ans = [prob, less, greater, avg, variance];

  if(n-x <= N-k){
    document.getElementById("prob").innerHTML = ans[0];
    document.getElementById("less").innerHTML = ans[1];
    document.getElementById("great").innerHTML = ans[2];
    document.getElementById("avg").innerHTML = ans[3];
    document.getElementById("var").innerHTML = ans[4];
    console.log(labels);
    console.log(dataset);
    chart(labels, dataset, color);
  }
  else{
    document.getElementById("prob").innerHTML = "Porfavor confirme con los Instrucciones";
    document.getElementById("less").innerHTML = "N/A";
    document.getElementById("great").innerHTML = "N/A";
    document.getElementById("avg").innerHTML = "N/A";
    document.getElementById("var").innerHTML = "N/A";
  }



}