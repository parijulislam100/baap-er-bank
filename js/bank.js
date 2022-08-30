function getInputValue(inputId){
    debugger;
    const inputField = document.getElementById(inputId);
    const newInputFieldText=inputField.value;
    const newInputAmount = parseFloat(newInputFieldText);
    inputField.value = "";
    return newInputAmount;

   
};

function totalUpdateFiled(totalFieldId,amount){
    // debugger;
    const totalElement= document.getElementById(totalFieldId);
    const totalText=totalElement.innerText;
    const previousText=parseFloat(totalText)
    totalElement.innerText=amount + previousText
}

function getCurrenceBalance(){
    const balanceTotal = document.getElementById("balance-total");
    const balanceText = balanceTotal.innerText;
    const balanceAmount=parseFloat(balanceText);
    return balanceAmount;
}
function updateBalance(newDepositInputAmount,isAdd){
    const balanceTotal = document.getElementById("balance-total");
    // const balanceText = balanceTotal.innerText;
    // const balanceAmount=parseFloat(balanceText);
    const balanceAmount = getCurrenceBalance()
    // balanceTotal.innerText = balanceAmount + newDepositInputAmount;
    if(isAdd == true){
        balanceTotal.innerText = balanceAmount + newDepositInputAmount;
    }
    else{
        balanceTotal.innerText = balanceAmount - newDepositInputAmount;
        
    }
}
document.getElementById("deposit-button").addEventListener("click", function(){
    // // console.log("clicked");
    // const depositInput = document.getElementById("deposit-input");
    // // console.log(depositInput)
    // const newDepositInputText=depositInput.value;
   // const newDepositInputAmount = parseFloat(newDepositInputText)
// const newDepositInputAmount = getInputValue("deposit-input")

    // ------------get and update deposite total  ------------
    // const totalDeposit= document.getElementById("total-deposit");
    // const previousTotalDepositText=totalDeposit.innerText;
    // const previousTotalDepositAmount=parseFloat(previousTotalDepositText)
    // totalDeposit.innerText=newDepositInputAmount + previousTotalDepositAmount
// totalUpdateFiled("total-deposit" ,newDepositInputAmount);
    // ------------get and update balance total --------------
    // const balanceTotal = document.getElementById("balance-total");
    // const balanceText = balanceTotal.innerText;
    // const balanceAmount=parseFloat(balanceText);
    // balanceTotal.innerText = balanceAmount + newDepositInputAmount;
// updateBalance(newDepositInputAmount ,true);
   const newDepositInputAmount = getInputValue("deposit-input");
   if(newDepositInputAmount > 0){
        totalUpdateFiled("total-deposit" ,newDepositInputAmount);
        updateBalance(newDepositInputAmount ,true);
   }
});

// withdraw button 
document.getElementById("withdraw-button").addEventListener("click",function(){
    // const withdrawInput = document.getElementById("withdraw-input");
    // const newWithdrawAmoutText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(newWithdrawAmoutText);
// const newWithdrawAmount = getInputValue("withdraw-input");

    // const withdrawTotal= document.getElementById("withdraw-total");
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawAmount = parseFloat(previousWithdrawText);

    // withdrawTotal.innerText = newWithdrawAmount + previousWithdrawAmount;

// totalUpdateFiled("withdraw-total",newWithdrawAmount)
   // ------------get and update balance total -----------
    // const balanceTotal = document.getElementById("balance-total");
    // const previousBalanceTotalText =balanceTotal.innerText;
    // const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);
    // balanceTotal.innerText = previousBalanceTotalAmount - newWithdrawAmount;
// updateBalance(newWithdrawAmount,false);

    const newWithdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrenceBalance()
    if(newWithdrawAmount>0 && newWithdrawAmount < currentBalance){
        totalUpdateFiled("withdraw-total",newWithdrawAmount);
        updateBalance(newWithdrawAmount,false);
    }
    if(newWithdrawAmount > currentBalance){
        console.log("you can not withdraw more than what in have  in your account")
    }
});