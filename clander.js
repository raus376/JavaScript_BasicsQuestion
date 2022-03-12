// 1-1          clander
// 2-1
// 3-1
// .
// .
// .
// .
// .
// 31-1
// .
// .
// .
// .
// .
// 31-12

for(var month=1;month<=12;month++)
  {
    var day_value;
    if(month==2)
    {
      day_value=28;
    }
    else if(month==1 || month==3 || month==5 || month==7 ||  month==8 || month==10 || month==12)
    {
      day_value=31;
    }
    else
    {
      day_value=30;
    }

 if(month==1)
{
  console.log("*******January*******");
  
}
else if(month==2)
{
  console.log("********February*********");
  
}
else if(month==3)
{
  console.log("*******March********");
}
    else if(month==4)
{
  console.log("*******April*******");
  
}
else if(month==5)
{
  console.log("********May*********");
  
}
else if(month==6)
{
  console.log("*******June********");
}
  else if(month==7)
{
  console.log("*******July*******");
  
}
else if(month==8)
{
  console.log("********August*********");
  
}
else if(month==9)
{
  console.log("*******September********");
}
    else if(month==10)
{
  console.log("*******October*******");
  
}
else if(month==11)
{
  console.log("********November*********");
  
}
else
{
  console.log("*******December********");
}



    
  // //  switch(month)
  // // {
  // //   case 1: console.log("******Jabnuary*******");
  // //     break;

  // //   case 2: console.log("*******February*******");
  // //     break;
  // //   case 3: console.log("********March*********");
  // //     break;
  // //   case 4: console.log("********April*******");
  // //     break;
  // //   case 5: console.log("**********May*******");
  // //     break;
  // //   case 6: console.log("**********June********");
  // //     break;
  // //   case 7: console.log("*******July*********");
  // //     break;
  // //   case 8: console.log("*********August*********");
  // //     break;
  // //   case 9: console.log("*********September*********");
  // //     break;
  // //   case 10: console.log("*********October********");
  // //     break;
  // //   case 11: console.log("**********November********");
  // //     break;
  // //   case 12: console.log("*********December********");
  // //     break;
  // }
  
   
    for(var day=1;day<=day_value;day++)
      {
        console.log("Month:",month,"Day:",day);
      }
  }



