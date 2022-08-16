// Store the wallet amount to your local storage with key "amount"
 
 function addWallet(){
    let amt=document.getElementById("amount").value;
    let append=document.getElementById("wallet")
    append.innerText=amt;
    let get_amt=localStorage.getItem("amount")
    localStorage.setItem("amount", amt)
 }

 function bookMovies(){
    window.location.href="movies.html";
 }