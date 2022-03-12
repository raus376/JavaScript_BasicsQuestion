//Print Prime Numbers from 1 to given limit

for(var a=1;a<=100;a++)
  {
var count=0;

for(var i=1;i<=a;i++)
  {
    if(a%i==0)
    {
      count++;
    }
  }
if(count==2)
{
  console.log(a, ": is Prime Number");
}
else
{
  console.log(a,": is not Prime Number");
}
  }