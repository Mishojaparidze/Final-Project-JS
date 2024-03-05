//  კალკულატორი
 function calculator() {
   let num1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));
   let num2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));

  if (isNaN(num1) || isNaN(num2)) {
      alert("შეყვანილი მონაცემები არ არიან ვალიდური. გთხოვთ, შემოიყვანოთ რიცხვები.");
       return;
   }

 
   let operation = prompt("აირჩიეთ ოპერაცია: +, -, *, /");

  
   if (!["+","-","*","/"].includes(operation)) {
       alert("შეყვანილი ოპერაცია არ არის ვალიდური. გთხოვთ, აირჩიოთ +, -, *, /");
       return;
   }

   let result;
   switch (operation) {
       case "+":
           result = num1 + num2;
           break;
       case "-":
           result = num1 - num2;
           break;
      case "*":
           result = num1 * num2;
           break;
       case "/":
        
           if (num2 === 0) {
               alert("მეორე რიცხვი არ შეიძლება იყოს 0.");
               return;
           }
           result = num1 / num2;
           break;
   }

   alert(`შედეგი: ${result}`);
 }


 calculator();