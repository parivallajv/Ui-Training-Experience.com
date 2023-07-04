
// 1. umdefined-if no values are assigned
// var a
// console.log(a)

// 2. null- we can store value as null if there is no value
// var a=null
// console.log(a)

// 3. if-else statement
// if(5>10){
//     console.log('5>10')
// }
// else {
//     console.log('10>a')
// }

// 4. else if statement
// if(5>10){
//     console.log(false)
// }
// else if(5>8){
//     console.log(false)
// }
// else{
//     console.log(true)
// }

// 5. SwitchCase
// var day='Tue'
// switch (day){
//     case 'Mon':console.log('Monday');
//     break;
//     case 'Tue':console.log('Tuesday');
//     break;
//     case 'Wed':console.log('Wednesday');
//     break;
//     case 'Thu':console.log('Thursday');
//     break;
//     case 'Fri':console.log('Friday');
//     break;
// }

// 6. Arithmetic Operators
// var a=6;
// var b=5;
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// 7. Combination of Assignment Operators
// var a=5;
// console.log(a+=5)
// console.log(a-=5)
// console.log(a*=5)
// console.log(a/=5)
// console.log(a%=4)
// console.log(6%5)

// 8. Increment & Decrement Operator
// var a=5
// var b=--a
// console.log(b)
// var a=6
// // var b=a--
// console.log(--a)
// var c=b
// console.log(c)

// Ex.1
// var num1 = 1 + 5; 
// var num2 = num1 / 4; 
// var num3 = 1 + 5; 
// var num4 = num3 / 4; 
// console.log(num2 + " " + num4); 

// Ex .2
// var a = 1; 
// var b = 2; 
// var c; 
// var d; 
// c = ++b; 
// d = a++; 
// c++; 
// b++; 
// ++a; 
// console.log(a + " " + b + " " + c);

// 3. Ex 3
// var input = 7; 
// var output1 = ++input + ++input + ++input; 
// var output2 = input++ + input++ + input++; 
// var output3 = input++ + ++input + input++; 
// console.log(output1 + ' ' + output2 + ' ' + output3);

// 4. Ex 
// var x=0
// console.log(x++)
// console.log(x=x+1)
// console.log(x+=1)

// 5. Ex
// var num = 100; 
// num += 5 * 10 / 2;
// console.log(num)

// 6. Ex
// var num = 100; 
// num *= 2 * 10 / 5;
// console.log(num)

// 7. EX
// var num = 100; 
// num /= 2 * 8 - 15;
// console.log(num)

// Ex-1 Conditional Operator
// var length=200; 
// var breadth=200; 

// if(length===breadth){
//     console.log('this is a square')
// }
// else{
//     console.log('this is rectangle')
// }

// Ex-2 - Conditional Operator
// var a=20,b=8,c=5;
//   if((a>b)&&(a>c)){
//     console.log('a is bigger')
//   }
//   else if((b>a)&&(b>c)){
//     console.log('b is bigger')
//   }
//   else{
//     console.log('c is bigger')
//   }

// Ex-3 Conditional Operator
// console.log(undefined == null) 
// console.log(undefined === null)

// Ex-1-switch
// var enterMonth='Nov'

// switch (enterMonth){
//     case 'Jan':console.log('31 Days');
//     break;
//     case 'Feb':console.log('29 Days');
//     break;
//     case 'Mar':console.log('31 Days');
//     break;
//     case 'Apr':console.log('30 Days');
//     break;
//     case 'May':console.log('31 Days');
//     break;
//     case 'Jun':console.log('31 Days');
//     break;
//     case 'Jul':console.log('30 Days');
//     break;
//     case 'Aug':console.log('31 Days');
//     break;
//     case 'Sep':console.log('30 Days');
//     break;
//     case 'Oct':console.log('31 Days');
//     break;
//     case 'Nov':console.log('30 Days');
//     break;
//     case 'Dec':console.log('31 Days');
//     break;
// }

// Type Coersion
// 1. STRING
// console.log(typeof(String(123)))
// console.log(typeof(String(-12.3)))
// console.log(typeof(String(null)))
// console.log(typeof(String(undefined)))
// console.log(typeof(String(true)))
// console.log(typeof(String(false)))


// 2. Boolean
// console.log((Boolean('')))
// console.log((typeof(Boolean(''))))
// console.log(Boolean('hello'))
// console.log(typeof(Boolean('hello')))
// console.log(Boolean())
// console.log(typeof(Boolean()))
// console.log(Boolean(0))
// console.log(typeof(Boolean(0)))
// console.log(Boolean(200))
// console.log(typeof(Boolean(200)))
// console.log(Boolean(-0))
// console.log(typeof(Boolean(-0)))
// console.log(Boolean(-200))
// console.log(typeof(Boolean()))
// console.log(Boolean(NaN))
// console.log(typeof(Boolean(NaN)))
// console.log(Boolean(null))
// console.log(typeof(Boolean(null)))
// console.log(Boolean(undefined))
// console.log(typeof(Boolean(undefined)))
// console.log(Boolean(false))
// console.log(typeof(Boolean(false)))

// 3. Implicit Coersion
// console.log(true+false)
// console.log(12 / "6") 
//  console.log("number" + 15 + 3) 
//  console.log(15 + 3 + "number") 
//  console.log(1 > null) 
//  console.log("foo" + + "bar") 
//  console.log('true' == true) 
//  console.log(false == 'false') 
//  console.log(null === undefined) 
//  console.log(!!"false" == !!"true")


// 1. Array-problems
// var words= ['asdf', 'sd', 'something','right','position']
// var maxlength=0

// for(let i=0;i<words.length;i++){
//     var length=words[i].length
//     maxlength=Math.max(length,maxlength)
    
// }
// console.log(maxlength)

// 3.
// var numbers=[1,3,6,2,5,10]
// let firstNum=0
// let secondNum=0
// for(let i=0;i<numbers.length;i++){
//     if(i%2==0){
//         firstNum+=numbers[i]
//     }
//     else{
//         secondNum+=numbers[i]
//     }
// }
// console.log(firstNum+','+secondNum)

// 4.
// arr1 = [1,2,3];  
// arr2 = [3,4,5];

// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             console.log(arr1[i])
//         }
//     }
// }

// 5.
// var flag=true
// arr1=[1, 2, 3]; arr2=[100, 2, 1, 10]

// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             var flag=false;
//         }
//         if(flag==true){
//             console.log(arr2[i])
//         }
//     }
// }


// 1. Objects

// customers_data = {
//     Ben10: [22, 30, 11, 17, 15, 52, 27, 12],
//     Sameer: [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
//     Zeeshan: [22, 30, 11, 5, 17, 30, 6, 57],
//   };
//   for (i in customers_data) {
//     person = customers_data[i];
//     count =0
//     for (j in person) {
//       if (person[j] >= 20) {
//         count++
//       }
//     }
//     if(count>=5)
//     {
//       console.log(i+' can have premium membership')
//     }
//   }


// Q2. Write a JavaScript program to list the properties of a JavaScript object.
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
//     };
//     for(let key in student){
//         console.log(key)
//     }

    // Q3. Write a JavaScript program to delete the rollno property from the following object.
    // Also print the object before or after deleting the property
    // var student = {
    //     name : "David Rayy",
    //     sclass : "VI",
    //     rollno : 12
    //     }
    //     delete student.rollno
    //     console.log(student)
    // Q4. Write a JavaScript program to get the length of a JavaScript object.
    // student = {
    //     name : "David Rayy",
    //     sclass : "VI",
    //     rollno : 12
    //     }
    //     for(let key in student){
    //         console.log(Object.keys(student).length)
    //     }


    // Q5. Write a JavaScript program to display the reading status (i.e. display book name,
    // author name and reading status) of the following books.
    // library = [
    // {
    // author: 'Bill Gates',
    // title: 'The Road Ahead',
    // readingStatus: true
    // },
    // {
    // author: 'Steve Jobs',
    // title: 'Walter Isaacson',
    // readingStatus: true
    // },
    // {
    // author: 'Suzanne Collins',
    // title: 'Mockingjay: The Final Book of The Hunger Games',
    // readingStatus: false
    // }];
    // for(let key in library){
    //     if(library[key].readingStatus==true){
    //         console.log(`'You have already read ${library[key].title} by ${library[key].author}`)
    //     }
    //     if(library[key].readingStatus==false){
    //         console.log(`'You still need to read ${library[key].title} by ${library[key].author}.'`)
    //     }
    // }


    // 2. Array-problems
//     Q1. Write a JavaScript program to find the longest string from a given array.
// solution
// var words= ['asdf', 'sd', 'something','right','position']
//     var longString=words[0]
//     var longStringlength=longString.length
    
// for(let i=0;i<words.length;i++){
//     var currentString=words[i]
//     var currentStringLength=currentString.length
    
//     if(currentStringLength>longStringlength){
//         longString=currentString
//         longStringlength=currentStringLength
//     }
// }
//     console.log(`longest String in array is ${longString} and it's length is ${longStringlength} `)
// Q2. Write a JavaScript program to remove '0', false, undefined, null, NaN, '' from given array.
// var arr= [NaN, 0, 15, false, -22, '',undefined, 47, null,94]
// for(let i=0;i<arr.length;i++){
//     if(Boolean(arr[i])==false){
//         delete arr[i]
//         // console.log(arr)
//     }
// }
// var newArr=arr
// console.log(newArr)
// console.log(newArr.length)


// / Q3. Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on.
// var Arr= [1, 3, 6, 2, 5, 10]
// var firstSum=0;
// var secondSum=0;
// for(let i=0;i<Arr.length;i++){
//     if(i%2==0){
//         firstSum+=Arr[i]
//     }
//     else{
//         secondSum+=Arr[i]
//     }
// }
// console.log(firstSum+" "+secondSum)


// Q4. Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers.
// arr1 = [1,2,3];
// arr2 = [3,4,5];
// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             console.log(`the common value is `+arr1[i]);
//         }
//     }
// }


// // Q5. Write a JavaScript function to find the difference of two arrays.
// arr1=[1, 2, 3]; arr2=[100, 2, 1, 10]
// let difference=[]
// for(let i=0;i<arr1.length;i++){
//     if(!arr2.includes(arr1[i])){
//         difference.push(arr1[i])
//     }
// }
// for(let j=0;j<arr2.length;j++){
//     if(!arr1.includes(arr2[j])){
//         difference.push(arr2[j])
//     }
// }
// console.log(difference)

// Array-2 practice problems

// Q1. Write a JavaScript program to create a new array by reversing the elements of given 
// array

// var arr = [1,'a',2,'b',3,'c',6,'d',7,'e',8,'f']
// var newArr=[]
// let arr2=arr.reverse()
// console.log(arr2)

// Q2. Write a JavaScript program to check if there is at least one element which occurs in 
// two given sorted arrays of integers.

// arr1 = [4, 11, 12, 23, 46, 65, 70, 73, 98];  
// arr2 = [7, 13, 25, 46, 58, 70, 84];
// var res=[]
// for(i=0;i<=arr1.length;i++){
//     for(j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//         //  res.push(arr1[i]);
           
//         }
//     }
// }
// console.log(res)


// Q3. Write a JavaScript program to check whether a given array of integers represents 
// either a strictly increasing or a strictly decreasing sequence.  

//  var arr1=[4,5,6,7,8] 
//  var arr2=[3,4,6,6,7,8,9] 
//  var arr3=[34,23,45,55,67,77]

//  function increasing(arr1){

//  for(i=0;i<arr1.length-1;i++){
//     if(arr1[i]<arr1[i+1]){
//         flag=true;
//     }
//     else{
//         flag=false;
//         break;
//     }
//     console.log(i)
//  }
//  if(flag==true){
//     console.log(arr1+' is a strictly increasing sequence ')
//  }
//  else if(flag==false){
//     console.log(arr1+' is NOT a strictly increasing sequence')
//  }
// }

// increasing(arr1)

// Q4. Write a JavaScript function to convert an amount to coins.

// var num=46;
// var coins=[25,10,5,2,1]
// var coinList=[]
// for(i=0;i<coins.length;i++){
//     while(num>=coins[i]){
//         coinList.push(coins[i])
//         num=num-coins[i]
//         // console.log(coinList)
//     }
// }
// console.log(coinList)

// Q5. Write a JavaScript function to create a new array from given array by formatting the 
// numbers to human readable form with correct suffix like 1 to 1st, 2 to 2nd, 3 to 3rd and 
// 4 to 4th.

// var arr=[22,8, 301, 404, 35, 99]

// function readableNumber(arr){

// var newArr=[]

//    for(i=0;i<arr.length;i++){

//     if(arr[i]%10==1){
//         newArr.push(arr[i]+'st')
//     }
//     else if(arr[i]%10==2){
//         newArr.push(arr[i]+'nd')
//     }
//     else if(arr[i]%10==3){
//         newArr.push(arr[i]+'rd')
//     }
//     else{
//         newArr.push(arr[i]+'th')
//     }

//    }
//    console.log(newArr)
// }
// readableNumber(arr)

// Js-for loop practice

// Q1. Write a JavaScript program to encode a message in the language which hackers 
// use to communicate.

//  var sentence='Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. '

//  var new_sentence=""
//  for(let i=0;i<sentence.length;i++){
//     if(sentence[i]=='a'){
//        new_sentence=new_sentence.concat(4)
//     }
//     else if(sentence[i]=='e'){
//         new_sentence=new_sentence.concat(3)
//     }
//     else if(sentence[i]=='o'){
//         new_sentence=new_sentence.concat(0)
//     }
//     else if(sentence[i]=='i'){
//         new_sentence=new_sentence.concat(1)
//     }
//     else if(sentence[i]=='s'){
//         new_sentence=new_sentence.concat(5)
//     }
//     else{
//         new_sentence=new_sentence.concat(sentence[i])
//     }
//  }
//  console.log(new_sentence)

// Q2. Write a JavaScript program to find how many vowels are there in the sentence.

// var sentence="Good, better, best. Never let it rest. 'Til your good is better and your better is best."
// var count=0
// for(i=0;i<sentence.length;i++){
//     if(sentence[i]=='a'){
//         count++;
//     }
//     else if(sentence[i]=='e'){
//         count++;
//     }
//     else if(sentence[i]=='e'){
//         count++;
//     }
//     else if(sentence[i]=='i'){
//         count++;
//     }
//     else if(sentence[i]=='o'){
//         count++;
//     }
//     else if(sentence[i]=='u'){
//         count++;
//     }
// }
// console.log('No of vowels in this sentence is '+count)

// Q3. Write a JavaScript program which accepts a string as input and swap the case of 
// each character.

// Method-1
// var sentence='The Quick Brown Fox' 

// var new_word=""

// for(i=0;i<sentence.length;i++){
//     if(sentence[i]!==sentence[i].toUpperCase()){
//         new_word=new_word+(sentence[i].toUpperCase());
//     }
       
//     else if(sentence[i]!==sentence[i].toLowerCase()){
//         new_word=new_word+(sentence[i].toLowerCase());
//     }
    
    
// }
// console.log(new_word)

// Method-1

// var sentence='The Quick Brown Fox' 
// var new_word=''
// for(let i=0;i<sentence.length;i++){


// switch(sentence[i]){
//     case 'a':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'b':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'c':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'd':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'e':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'f':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'g':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'h':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'i':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'j':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'k':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'l':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'm':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'n':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'o':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'p':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'q':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'r':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 's':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 't':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'u':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'v':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'w':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'x':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'y':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'z':
//     new_word=new_word+(sentence[i].toUpperCase());
//     break;
//     case 'A':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'B':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'C':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'D':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'E':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'F':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'G':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'h':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'I':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'J':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'K':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'L':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'M':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'N':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'O':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'P':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'Q':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'R':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'S':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'T':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'U':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'V':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'W':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'X':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'Y':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
//     case 'Z':
//     new_word=new_word+(sentence[i].toLowerCase());
//     break;
    
// }
// }
// console.log(new_word)

// Q4. Write a JavaScript for loop that will iterate from 0 to 10. For each iteration, it will 
// check if the current number is odd or even, and display a message to the screen.

// for(i=0;i<=10;i++){
//     if(i%2==0){
//         console.log(i+' is even number')
//     }
//     else if(i%2==1){
//         console.log(i+' is odd number')
//     }
// }

// Q5. Write a JavaScript function that will reverse all the words which are of odd length. 
// The even length words are not changed

// var sentence='There is exactly one space between each word and no punctuation is used.'

// var words=sentence.split(" ")
// // console.log(words)
// var rev=""
// var res=[]
// for(i=0;i<words.length;i++){
//     if(words[i].length%2!==0){
//         for(j=words[i].length-1;j>=0;j--){
//             rev=rev+words[i][j];
//             // console.log(rev)
//         }
//     }
//     else{
//         rev=rev+" "+words[i]+" "
//     }
// }
// console.log(rev)

// Programs-while loop

// 1. Q1. Write a JavaScript program to find the GCD of two numbers : 15 and 25.

    // var num=25
    // var num2=15
    // var i=2;
    // while(i<num){
    //     if(num%i==num2%i){
            
    //         res=Math.max(num%i)
            
    //     }
    //     i++;
    // }
    // console.log('the gcd is '+res)






















// Q3. Write a JavaScript program to find the number of even values in sequence before 
// the first occurrence of a given number. [Hint: You can use while loop here] 

// var arr=[1,2,3,4,5,6,7,8,9,10,11,12]
// var i=8;
// var count=0

// while(i<=arr.length){
//     if(i%2==0){
//         count++
//     }
//     i++
// }
// console.log(count)

// Q4. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
// var i=0
// sum=0
// while(i<1000){
//     if((i%3==0)||(i%5==0)){
//         // console.log(i)
//         sum=sum+i
//     }
//     i++
// }
// console.log(sum)

// Q5. Write a JavaScript program which iterates the integers from 1 to 15. But for 
// multiples of three print "Fizz" instead of the number and for the multiples of five print 
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". 

// var i=0;
// while(i<15){
//     if(i%3==0){
//         console.log(i+' Fizz')
//     }
//     else if(i%5==0){
//         console.log(i+' Buzz')
//     }
//     else{
//         console.log(i)
//     }
//     i++;
// }