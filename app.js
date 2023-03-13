function withdrawAmount(){
    var totalAmount = document.getElementById("total-amount");
    var withdraw = document.getElementById("withdraw");
    var amount =document.getElementById("amount");

    
    if(totalAmount.innerText > 0){
        var strtonumAmount = parseInt(amount.value);
        var strtonumWithdraw = parseInt(withdraw.innerText);
        var strtonumTotalAmount = parseInt(totalAmount.innerText);

        totalAmount.innerText = strtonumTotalAmount - strtonumAmount;
        withdraw.innerText = strtonumWithdraw + strtonumAmount;
    }
}

function dipositAmount(){
    var totalAmount = document.getElementById("total-amount");
    var amount =document.getElementById("amount");
    var diposit =document.getElementById("diposit");

    
    
    var strtonumAmount = parseInt(amount.value);
    var strtonumDiposit = parseInt(diposit.innerText);
    var strtonumTotalAmount = parseInt(totalAmount.innerText);

    totalAmount.innerText = strtonumTotalAmount + strtonumAmount;
    diposit.innerText = strtonumAmount + strtonumDiposit;
        
    
}

function loanGive(){
    var loanAmount = document.getElementById("loan-amount");
    var intotalLoan = document.getElementById("loan");

    if(intotalLoan.innerText >= 0){
        var strtonumloanAmount = parseInt(loanAmount.value);
        var strtonumIntotalLoan = parseInt(intotalLoan.innerText);

        intotalLoan.innerText = strtonumIntotalLoan - strtonumloanAmount;
    }
}

function loanTake(){
    var loanAmount = document.getElementById("loan-amount");
    var intotalLoan = document.getElementById("loan");

    if(intotalLoan.innerText >= 0){
        var strtonumloanAmount = parseInt(loanAmount.value);
        var strtonumIntotalLoan = parseInt(intotalLoan.innerText);

        intotalLoan.innerText = strtonumIntotalLoan + strtonumloanAmount;
    }
}

