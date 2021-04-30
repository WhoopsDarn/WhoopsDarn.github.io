var labels = [];
var dataset = [];
var color = [];
var ans = [];

document.getElementById("btn_calc").addEventListener("click", bi);
document.getElementById("btn_exact").addEventListener("click", exact);
document.getElementById("btn_less").addEventListener("click", less);
document.getElementById("btn_great").addEventListener("click", great);






function bi(){
  var n = document.getElementById("n").value;
  var p = document.getElementById("p").value;
  var x = document.getElementById("x").value;

  //var s = new stats();
  

  var comb = combination(n,x);
  var exp = pow(p,x);
  var q = pow((1-p), (n-x));
  var prob = (Math.round((comb*exp*q) * 100) / 100).toFixed(2);
  var cumulative = 0;
  

  for(var i = 0; i <= n; i++){
    comb = combination(n,i);
    exp = pow(p,i);
    q = pow((1-p), (n-i));
    if(i <= x){
    cumulative = cumulative + (comb*exp*q);
    }
    labels.push(i);
    var temp = (Math.round((comb*exp*q) * 100) / 100);
    dataset.push(temp);
    color.push('rgba(75, 192, 192, 0.4');
  }

  console.log(cumulative);



  var less = (Math.round(cumulative * 100) / 100).toFixed(2);
  var greater =(Math.round((1-cumulative) * 100) / 100).toFixed(2); 
  var variance = (Math.round((p*(1-p)) * 100) / 100).toFixed(2);

  ans = [prob, less, greater, p, variance];
  



  if(n - x >=0 && (p <=1 && p>=0)){
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
    document.getElementById("prob").innerHTML = "N debe ser major a R y P debe ser enter 0 y 1";
    document.getElementById("less").innerHTML = "N/A";
    document.getElementById("great").innerHTML = "N/A";
    document.getElementById("avg").innerHTML = "N/A";
    document.getElementById("var").innerHTML = "N/A";
  }

}


function chart(labels, dataset, color){
  const graph = document.getElementById("chart");


  var g = new Chart(graph, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
          {
              label: "Binomial Distribution",
              fill: false,
              backgroundColor: color,
              borderColor: "rgba(75, 192, 192, 1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHitRadius: 10,
              data: dataset,
          }
      ]}

      
  });
  
}

function exact(){
g = document.createElement('canvas');
g.setAttribute("id","chart"); g.setAttribute("width","640px"); g.setAttribute("height","420px");
document.getElementById("chart").replaceWith(g);
var n = document.getElementById("n").value;
var x = document.getElementById("x").value;
var exact = document.getElementById('btn_exact')
var less = document.getElementById('btn_less')
var great = document.getElementById('btn_great')

exact.innerHTML = ans[0];
less.innerHTML = 'X <= x';
great.innerHTML = 'X > x';
for(var i = 0; i <= n; i++){
  color[i] = "rgba(75, 192, 192, 1)";
}


color[x] = "rgba(207, 0, 15, 1)";

chart(labels, dataset, color);

}

function great(){
  g = document.createElement('canvas');
  g.setAttribute("id","chart"); g.setAttribute("width","640px"); g.setAttribute("height","420px");
  document.getElementById("chart").replaceWith(g);
  var n = document.getElementById("n").value;
  var x = document.getElementById("x").value;
  var exact = document.getElementById('btn_exact')
  var less = document.getElementById('btn_less')
  var great = document.getElementById('btn_great')

  exact.innerHTML = 'X = x';
  less.innerHTML = 'X <= x';
  great.innerHTML = ans[2];

  for(var i = 0; i <= n; i++){
    color[i] = "rgba(75, 192, 192, 1)";
    if(i > x){
      color[i] = "rgba(207, 0, 15, 1)";
    }

  }
  console.log(color);
  chart(labels, dataset, color);
}

function less(){
  g = document.createElement('canvas');
  g.setAttribute("id","chart"); g.setAttribute("width","640px"); g.setAttribute("height","420px");
  document.getElementById("chart").replaceWith(g);
  var n = document.getElementById("n").value;
  var x = document.getElementById("x").value;
  var exact = document.getElementById('btn_exact')
  var less = document.getElementById('btn_less')
  var great = document.getElementById('btn_great')

  exact.innerHTML = 'X = x';
  less.innerHTML = ans[1];
  great.innerHTML = 'X > x';
  for(var i = 0; i <= n; i++){
    color[i] = "rgba(75, 192, 192, 1)";
    if(i <= x){
      color[i] = "rgba(207, 0, 15, 1)";
    }

  }
  console.log(color);
  chart(labels, dataset, color);

}
 
