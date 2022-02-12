var student=[{name:"Rahul",age:"18",rollno:"1",class:"9"},
{name:"Shyam",age:"19",rollno:"2",class:"9"},
{name:"Karan",age:"18",rollno:"3",class:"9"},
{name:"Swati",age:"17",rollno:"4",class:"9"},
{name:"Rashmi",age:"19",rollno:"5",class:"9"}];
//using for loop
for(i=0;i<student.length;i++)
{
  console.log(student[i].rollno,student[i].name);  
}
//using while loop
var i=0;
while(i<student.length)
{
    console.log(student[i].rollno,student[i].name);
    i++;

}
