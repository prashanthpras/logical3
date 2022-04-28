//21.Program for fibonacci series

// let number=prompt("enter a number")
// let num1=0;
// let num2=1;
// nextTerm=num1+num2;
// while(nextTerm<=number)
// {
//     console.log(nextTerm)
//      num1=num2;
//      num2=nextTerm
//      nextTerm=num1+num2
// }


//22.Program to filter data

// let array=["prashanth","abhi","manjesh","ullas"]
// let filterData=array.filter((value,index)=>{
//     if(value.length>5){
//         return value
//     }

// })
// console.log(filterData)


//23.Write a program that prints the numbers from 1 to 15. 
//But for multiples of three print “Fizz” instead of the number and 
//for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”?

// for(let i=1;i<=15;i++){
//     if(i%15==0)console.log("FizzBuzz")
//     else if(i%5==0)console.log("Fizz")
//     else if(i%3==0)console.log("Buzz")
//     else console.log(i)
// }


//24.Program to find the HCF or GCD of two integers

// let HCF
// const number1=prompt("enter 1st +ve integer")
// const number2=prompt("enter 2nd +ve integer")
// for(let i=1;i<=number1 && i<=number2;i++)
// {
//     if(number1%i==0 && number2%i==0){
//         HCF=i;
//     }
// }
// console.log(`HCF of ${number1} and ${number2} is ${HCF}`)


//25.JSON

// var obj=[{
//     name:"ullas",
//     age:24
// },{
//     name:"manjesh",
//     age:24
// },{
//     name:"prashanth",
//     age:24
// }]

// console.log(obj)

// obj[1].name="ullas"
// console.log(obj[1])

// let a=obj.filter((val,ind)=>{
//     if(val=="prashanth") return val
// })
// console.log(a)

// delete obj[0]
// console.log(obj)


//26.Largest number among three number

// function LargeOfThree(a,b,c){
// if(a>b) {
//     max_val=a
// }else 
// {
//  max_val=b
// }
// if(c>max_val){
//     max_val=c
// }
// console.log(max_val)
// }
// LargeOfThree(1,40,30)


//27.Largest number from an array

// let array=[10,55,9,32,45,77]
// let largest=array[0]
// for(let i=0;i<array.length;i++)
// {
//     if(largest<array[i])
//     {
//         largest=array[i]
//     }
//     console.log(largest)
// }


//28.Largest string from an array

// let Array=["java","html","css","javascript","react"]
// for(let i=1;i<Array.length;i++)
// {
//     for(let j=0;j<i;j++)
//     {
//         if(Array[i].length<Array[j].length)
//         {
//             let temp=Array[i]
//             Array[i]=Array[j]
//             Array[j]=temp
//         }
//     }
// }
// console.log(Array[Array.length-1])


//29.Find even number from an array and multiply by 2

// let arr=[25,65,55,41,99,72]
// let arr2=arr.map((value,index)=>{
//     if(value%2==0){
//         return value*2
//     }
// })

// console.log(arr2)


//30.Convert number into hour and minutes

// function TimeConvert(num)
// {
//     let hours=Math.floor(num/60)
//     let minutes=num%60
//     return hours +":"+ minutes;

// }
// console.log(TimeConvert(170))

