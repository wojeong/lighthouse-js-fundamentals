let initNumber;
  for(initNumber = 100; initNumber <= 200; initNumber++){
    if(initNumber%3 == 0){
      if(initNumber%4 == 0)
        console.log("LoopyLighthouse");
      else
        console.log("Loopy");
    }
    else if(initNumber%4 == 0)
      console.log("Lighthouse");
    else
      console.log(initNumber);
  }