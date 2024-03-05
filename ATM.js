// ATM

class BankomatApp {
  constructor() {
    this.users = [];
  }
 addUser(username, balance = 0) {
    const user = {
      username,
      balance,
    };
    this.users.push(user);
    console.log(`მომხმარებელი ${username}-ს დაემატა`);
  }


  checkBalance(username) {
    const user = this.findUser(username);
    if (user) {
      console.log(`${username}-ის ბალანსი: ${user.balance}`);
    } else {
      console.log(`მომხმარებელი ${username}-ი არ მოიძებნა`);
    }
  }

 
  deposit(username, amount) {
    const user = this.findUser(username);
    if (user) {
      user.balance += amount;
      console.log(`${amount}-ის შეტანა ${username}-ის ანგარიშზე. ბალანსი: ${user.balance}`);
    } else {
      console.log(`მომხმარებელი ${username}-ი არ მოიძებნა`);
    }
  }

  withdraw(username, amount) {
    const user = this.findUser(username);
    if (user) {
      if (user.balance >= amount) {
        user.balance -= amount;
        console.log(`${amount}-ის გატანა ${username}-ის ანგარიშიდან. ბალანსი: ${user.balance}`);
      } else {
        console.log(`ბალანსი არ არის საკმარისი ${amount}-ის თანხის გატანისთვის`);
      }
    } else {
      console.log(`მომხმარებელი ${username}-ი არ მოიძებნა`);
    }
  }

  findUser(username) {
    return this.users.find(user => user.username === username);
  }
}

const bankomatApp = new BankomatApp();

bankomatApp.addUser("user1", 100);
bankomatApp.addUser("user2", 50);

bankomatApp.checkBalance("user1"); 
bankomatApp.checkBalance("user3"); 

bankomatApp.deposit("user1", 20); 

bankomatApp.withdraw("user2", 30); 
bankomatApp.withdraw("user1", 150); 
