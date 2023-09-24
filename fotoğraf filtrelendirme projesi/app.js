const filterbutton=document.querySelectorAll(".filter-butons button");
const filtertablecards=document.querySelectorAll(".filterable-card .card");




const filtercards = e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active"); //tıkladığımızda diğer butonlarda active classını alması için;
    
    filtertablecards.forEach(card =>{
       card.classList.add("hide") ;
       if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all" ){
        card.classList.remove("hide")
       }
    });

   
};


filterbutton.forEach(button => button.addEventListener("click",filtercards));