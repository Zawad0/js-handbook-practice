function createBankAccount(initial){

    let balance = initial;

    const account ={

        deposit(amount){
                balance+=amount;
                return;
        },


        getBalance(){
                return balance;
        },
    }

    return account;
}

const a1 = createBankAccount(1000);
console.log(a1.getBalance());
a1.deposit(200);
console.log(a1.getBalance());
