var txt="I like apples ,because apples are good"
var txt2="1234567890"
result = txt.charAt(9)
//console.log(result)

var str1="Welcome to class" ;
var str2="WebDesign" ;

//result = str1.concat(str2)
result=str1.search("class")
//console.log(result)
/*
if (result!=-1)
{console.log("the string was found")}
else
{console.log("the string was NOT found")}
*/
//console.log("xter is ",str1[8])

//str1[8]="o"


/*
result=str1.indexOf("classy")
console.log(result)
*/
/*
result=txt.includes("Apples",10)
console.log(result)
*/
/*
demo = /Apples/ig
result=demo.test(txt)
console.log(result)
*/


let p1 = {
'name':'Beson Ahmed',
'skills':"web design,python",
'exp':5,
'getDetails':function(){return this.name+" <p>"+this.skills}}



let p2 = {
'name':'Biola OgidN',
'skills':"front-end,react-js",
'exp':3,
'getDetails':function(){return this.name+" <p>"+this.skills}}
//console.log(person['name'])
//console.log(p1['skills'])
//console.log(p2['skills'])

/*
function Show(x)
{console.log(x['skills'])		
}
//Show(p1)


let employer= new Object()
employer['name']="Hiit Plc"
employer['location']="Lagos,Abuja,Ibadan,Ph,Kano"
console.log(employer)


let v = document.getElementById('sample')
data = p1.getDetails()+"<p>"+p2.getDetails()
v.innerHTML="<p>"+data

*/

let items=["cofee","bread","butter"]
let scores=[78,66,90,89,120,1130,100,150,134]

z=0
x=scores.length
/*
while(z<x){
	console.log(z,scores[z])
	z++
}
*/
for(z=0;z<x;z++){
console.log(z,scores[z])
}


//console.log(items[0])
//console.log(items.length)
console.log(items.concat(scores))

function Check(x){
	return x>=100
}
//console.log(scores.every(Check) )

//console.log(scores.toString() )


function toAdd(){
	a=100
	b=345
	c=a+b
	console.log(c)
}
toAdd()

function toAdd2(a,b){	
	c=a+b
	console.log(c)
}
toAdd2(234,789)


rx = (a,b) => a+b
console.log(rx(23,78))

