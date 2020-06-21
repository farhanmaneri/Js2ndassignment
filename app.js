// chapter # 21- 25.
// task 1
            // var firstName = prompt("enter your first name");
            // var lastName  = prompt("enter your last name");
            // var fullName  = firstName+ " " + lastName;
            // document.write("Full Name:" + " " +fullName);

// // task 2
//             var favMob = prompt("enter your favorite mob Name");
//                 var mob = favMob;
//             var lengthOfString = favMob.length;
//              document.write("My favorite Phone is:"+ " "+ mob + "<br>"+ "Length of String:" + " " + lengthOfString);
        
// task 3
            // var string = "Pakistan";
            // var indexOfN = string.indexOf("n");
            // document.write("String:"+" " + string + "<br>"+ "Index of n:" + " " + indexOfN);

// task 4
            // var a = "Hello World";
            // var indexOfL = a.lastIndexOf("l");
            // document.write("String:"+ " " + a + "<br>" + "Last index of L:" + " " + indexOfL);

// task 5
            // var a = "Pakistan";
            // var b = a.charAt(3);
            // document.write( "String:" + " " + a + "<br>" + "character at index 3:"+ " " + b);

// task 6
            // var firstName = prompt("enter your first name");
            // var lastName  = prompt("enter your last name");
            // var fullName  = firstName.concat(" ", lastName);
            // document.write("Full Name:" + " " + fullName);

// task 7.
            // var city = "Hyderabad";
            // var cityChange = city.replace("Hyder", "Islam");
            // document.write("City:" + " " + city+ "<br>"+ "After Replacement:"+ " "+ cityChange);

// task 8.
            // var message = "Ali and Sami are best friends. They play cricket and football together.";
            // var newMassage = message.replace(/and/g, "&");
            // document.write(message+ "<br>"+ "New Massage after replacement:" + "<br>" + newMassage);

// task 9.
            // var string = "472";
            // var number = Number(string);
            // document.write( "String:" + " " + string + "<br>" + "Number:"+ " " + number);

// task 10
            // var text = prompt("enter text");
            // var upperCase  = text.toUpperCase();
            // document.write("User Input:"+" "+ text  + " " + "<br>" + "Upper Case: " + " " + upperCase);

// task 11.
            // var name = prompt("enter  your name");
            // var firstChar = name.slice(0,1);
            // var otherChar = name.slice(1);
            //    firstChar = firstChar.toUpperCase();
            //    otherChar = otherChar.toLowerCase();
            // var cappedName = firstChar.concat(otherChar);  //firstChar+otherChar;
            // document.write(cappedName);
            
// task 12
            // var num = 35.36;
            // var str = num.toString();
            // document.write("Number:" + num + "<br>"+ "String"+ " "str);

// task   13



// task 14
            // var A = [ "cake", "apple pie", "cookie" , "chips", "patties"];
            // var B = prompt("serach");
            //     B = B.toLowerCase();
            // for( let i= 0; i < A.length; i++){
            //     if ( B === A[i]){
            //         document.write("Available");
            //  }else if(( A[i] === B.length-1) && (A[i] !== B)){
            //         document.write("unavailable");
            //     }
            // }

// task 15


// Task 16
                // var str = "universtiy of Karachi";
                // var arr = str.split("");
                // document.write(arr);

// task 17
                // var name = prompt("enter name");
                // var lastChar = name.charAt(name.length-1);
                // document.write("User Input" + " " +name + "<br>"+ 
                //                "Last character of Input:" + " " + lastChar);

// task 18
                // var text = "The quick brown fox jumps over The lazy dog";
                // var accur = text.match(/The/g);
                // var numAccur = accur.length;
                // document.write("Text:"+ text+ "<br>" 
                //              + "There are " + " " + numAccur + " "+"Occurrence of word 'The'");

// chapter 26-30.
    
// task 1
                // var num = prompt("enter value");
                // var positiveNuber = Math.abs(num);
                // var round  =  Math.round(positiveNuber);
                // var floor  = Math.floor(positiveNuber);
                // var ceil   = Math.ceil(positiveNuber);
                // document.write("Number: " +" " +positiveNuber + "<br>" + "round off value:"+ " "+ round+ 
                //                "<br>"+ " "+ "floor value:"+  floor+ "<br>"+ "ceil value:"+ " "+ ceil);

// task 2
                // var num = prompt("enter value");
                // var number = num;
                // var round  =  Math.round(number);
                // var floor  = Math.floor(number);
                // var ceil   = Math.ceil(number);
                // document.write("Number: " +" " +number + "<br>" + "round off value:"+ " "+ round+ 
                //                "<br>"+ " "+ "floor value:"+  floor+ "<br>"+ "ceil value:"+ " "+ ceil);

// task 3
                // var num = prompt("enter a number");
                // var absNum = Math.abs(num);
                // document.write("the absolute value of :" +
                //                  " " + num + " "+ "is" + " " + absNum);

// task 4
                // var number = Math.random();
                // var diceNumber = (number*6);
                // var numberOfDice = Math.ceil(diceNumber);
                // document.write("random dice value:" + " "+ numberOfDice);
// Test 5.  
                // var number = Math.random()*2;
                // var headTail = Math.ceil(number);
                // if(headTail === 2){
                //     alert("radom coin value:" + " " + "Head");
                // }else{
                //     alert("radom coin value:" + " " + "Tail");
                // }

// task 6
                // var num = Math.random()*100;
                // var newNum = Math.ceil(num);
                // document.write("rondom number between 1 and 100:" + " " +newNum);

// task 7
                // var weight = prompt("enter your weight");
                // var newWeight = parseFloat(weight);
                // document.write("The weight of user is "+ " "+newWeight+ " "+ "kilograms");  


// task 8     
                // var num = prompt("enter a number from 1 - 0");
                // var num1 = Math.random()*10;
                // var secNum = Math.ceil(num1);
                // if(num == secNum){
                //     alert("user input equals to secret number. Congratulation!" )
                // }else{
                //     alert('try agian'+ " " + "secret is:"+" "  +secNum+ "your enter"+ num); 
                // }

// chapter 31-34

// task 1
                // var rightNow = new Date();
                // document.write(rightNow);

// task 2   
                // monthNames = [ "Januar", "February", "March", "April", "May", "June", "July", "Auguest",
                //                 "September", "October", "November", "December"]
                // var d = new Date();
                // var currentMonth = d.getMonth()
                // var theMonth = monthNames[currentMonth];
                // document.write(theMonth);

// task 3
                // var rightNow = new Date();
                // var date    = rightNow.toString()
                // var today = date.slice(0,3);
                // alert("Today is:" + " " + today);

// task 4   
                // var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
                // var now = new Date();
                // var theDay = now.getDay();
                // var nameOfDay = dayNames[theDay];
                // if(nameOfDay == "Sun" || nameOfDay == "Sat"){
                //     document.write("It's a Fun Day!" + " :"+ nameOfDay);
                // }else{
                //     document.write("It's not a Fun Day:" + " "+ nameOfDay);
                // }

// task 5



// task 6
            //    var  today = new Date();
            //     var time = today.getTime();
            //     var minuteSince = time/(1000*60);
            //     document.write("Current Date:"+ " "+ today+ "<br>"
            //                  + "Elapsed milliseconds since January 1, 1970:"+
            //                   " "+ time+ "<br>" + "Elapsed minutes since January 1, 1970:" 
            //                     + " " +  minuteSince);


 
// task 10

            // var date = new Date("Jan 1, 2015");
            // var today = date.getTime();
            // var refDate = new Date();
            // var seconds = today/(1000*60*60);
            // document.write("Our refrence date:"+ " "+ refDate+ "<br>"
            //                 + seconds + " " + "seconds had passed since beginning of 2015" )

// task 13
            // var dob = new Date(prompt("enter your date of birth", "Jan 1, 1970"));
            // var dobMiill = dob.getTime();
            // var today    = new Date();
            // var todyMilli = today.getTime();
            // var diff = todyMilli - dobMiill;
            // var diffYears = diff/ (1000*60*60*24*30*12);
            // var accrAge = Math.floor(diffYears);
            // document.write( accrAge);

// chapter 35-38
// task 1.
                    // function date(){
                    //     var today = new Date();
                    //     document.write(today);
                    // }
                    // date();

// task 2
                    // function greet(){
                    //     var firstName = prompt("enter your first Name");
                    //     var lastName = prompt("enter your last Name");
                    //     var fullName  = firstName.concat(" " +lastName);
                    //     document.write("Hello:"+ " " +fullName)
                    // }
                    // greet();

// task 3
                    // function add(a,b){
                    //     var a = prompt("enter a number");
                    //     var b = prompt("enter a number");
                    //     var c = a + b 
                    //     return c;
                        
                    // }
                    // add(a,b)
                   
                   
                    // document.write(c);
 
// task 4.
                    // var num1 = +prompt("enter number");
                    // var opert = prompt("enter operator");
                    // var num2 = +prompt("enter number");
                   
                    // function calc(){
                    //     if (opert == "+"){
                    //         document.write(+(num1)+(+num2));
                    //        }if (opert == "-"){
                    //         document.write(num1-num2);                      
                    //           }   if(opert == "*"){
                    //             document.write(num1*num2);
                            
                    //             }
                    //     }
                    
                    // calc();

// task 5
                    // function squre(a,b){
                    //     var x = (a+b);
                    //     var y = Math.pow(x,2);
                    //     return y;
                    // }
                    // var g = squre(5,4);
                    // document.write(g);

// task 6
                    // function fact(a,b){
                    //         var x = a%b
                    //         return x;
                    // }
                    // var z = fact(9,2);
                    // document.write(z);

// task 7
                    // function add(a,b){
                    //     var x = +(a) + (+b)
                    //     return x;
                    // }
                    // var z = add(prompt("enter number"), prompt("enter number"));
                    // document.write(z);

// task 8
                    // function hypo(base,perp){
           
                    //    var x = Math.pow(base,2)
                    //    var y = Math.pow(perp,2)
                    //    var z = x + (+y);
                    //    return z;
                    // }
                    // var hypotenuse = hypo(prompt("enter number"), prompt("enter number"));
                    // document.write(hypotenuse);

// task 9
                    // function area(width,height){
                    //     var x  = width*height
                    //     return x; 
                    // }
                    //  var z = area(5, 8); // value
                    //  var y = area(width, height) // veriable
                    //  document.write(z);

// task 11.
                //     function capitalize(str){
                //         str = str.split(" ");
                //         for (var i = 0, x = str.length; i < x; i++) {
                //             str[i] = str[i][0].toUpperCase() + str[i].substr(1);
                //         }
                        
                //         return str.join(" ");
                //     }
                    
                // document.write(capitalize("a quick brown fox"));


// task 11/second method 
                            // function titleCase(str){
                            //      return str.toLowerCase().split(' ').map(function(word){
                            //         return word.replace(word[0],word[0].toUpperCase());
                            //     }).join(' ');
                            // }
                            //     document.write(titleCase("a quick brown fox jump over a lazy dog"));


// task 12
   