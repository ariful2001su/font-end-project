function handlesearch(){
   // loading Animation starts
   
    loadingAnimationToggle(true);
    const searchInputElement= document.getElementById("search-input-field");
    const searchInputvalue=searchInputElement.value;
    
    loadphone(searchInputvalue);
}
function loadingAnimationToggle(isloading){
    const loaderanimation = document.getElementById("loader-animation");
    if(isloading){
        loaderanimation.classList.remove("hidden");
    }
    else
    { loaderanimation.classList.add("hidden");}

}

const loadphone =async(searchText) =>{

const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);

console.log("server response:",res);

const serverData = await res.json();

displayPhone(serverData.data);
};
const displayPhone= (data) => {
    console.log(data);
   const cardContainer = document.getElementById("card-section");
   cardContainer.innerHTML ="";
   data.forEach( Phone => {
    const productCard = document.createElement("div");
    productCard.classList.add("card");
    productCard.innerHTML = `

    <div class="card-image">
    <img src=${Phone.image} alt="phone-image"/>

</div>
<h3 class="card-tittle">${Phone.phone_name}
</h3>
<p class="card-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<div class="card-price">
<span>$</span>
<span id="card-item-price">4000</span>
<div id="card-button">
    <button class="btn">
        Show Details
    </button>
</div>
    `;
    cardContainer.appendChild(productCard);
    
   });

  // loading animation ends here
  loadingAnimationToggle(false);
};


