// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let get_amount=localStorage.getItem("amount")
let append=document.getElementById("wallet")
append.innerText=get_amount;

let input=document.getElementById("search")
input.addEventListener('keypress', enterFun)
function enterFun(){
    let Search= document.getElementById("search").value
    console.log("Inside function")
    const url=`https://www.omdbapi.com/?apikey=b56bd6f5&s=${Search}`
    fetch(url)
        .then(function(res){
            return res.json();
        })
        .then(function(res){
            console.log(res.Search);
            appending(res.Search)
            bookNow(res.Search)
        })
        .catch(function(err){
            console.log(err);
        })

}
function appending(data){
    var container=document.getElementById("movies")
    container.innerHTML=null;
    data.forEach(function(el){
        let img=document.createElement("img")
        img.src=el.Poster;

        let title=document.createElement("p")
        title.innerText=el.Title

        let btn=document.createElement("button")
        btn.innerText="Book Now"
        btn.setAttribute("onclick","bookNow()")
     

        let div=document.createElement("div")
        

        div.append(img,title,btn);
        container.append(div)
        console.log(img);
    })
  
}
function bookNow(data){
    console.log("Inside fun")
    data.forEach(function(el){
        console.log(el);
    })
}
