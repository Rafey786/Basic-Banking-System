let myBal = parseInt(document.getElementById("myBal").innerText);

function transferMoney(){
   var selectName = document.getElementById("selectName").value;
   var Amount = parseInt(document.getElementById("Amount").value);

   if (Amount > 20000) {
      alert("Insufficient Balance. Please deposite money in your account")
   } else {
      var UserID = selectName + "BankBalance";
      var UserUpdatedAmount = parseInt(document.getElementById(UserID).innerHTML) + Amount;
      var myBal = parseInt(document.getElementById("myBal").innerText) - Amount
      document.getElementById("myBal").innerText = myBal
      document.getElementById(UserID).innerHTML = UserUpdatedAmount;
      alert(`Rs.${Amount} is transferred to ${selectName} whose Gmail-Id is ${selectName}@gmail.com.`)

      var transferList = document.createElement("li");
      var showText = document.createTextNode(`Rs.${Amount} is transferred to ${selectName} whose Gmail-Id is ${selectName}@gmail.com on ${Date()}.`);
      transferList.appendChild(showText);
      var historyList = document.getElementById("transaction-history");
      historyList.insertBefore(transferList, historyList.firstChild);
   }
}
