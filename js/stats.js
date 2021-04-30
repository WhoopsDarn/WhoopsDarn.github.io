

  function factorial(x){
    var f = 1;
    for(var i = 1; i<=x; i++){
      f = f * i;

    }
    return f;
  }

  function pow(a,b){

    var r = 1;
    for(var i = 0; i <= (b-1); i++){
      r = r*a;
       
    }

    return r;
  }

  function combination(n,r){
    var f_num = factorial(n);
    var f_den1 = factorial(r);
    var f_den2 = factorial(n-r);
    var f_den = f_den1 * f_den2;
  
    var answer = f_num/f_den;
  
    if((n-r) >= 0){
      return answer;
    }
    else{
      return null;
    }
  
  }


