let url = "https://makeup-api.herokuapp.com/api/v1/products.json";
//let url ="https://makeup-api.herokuapp.com/";
let list = document.getElementById("items-container")
let items = []


function handleSearch(target) {
    const search = target.value.toLowerCase();      
    const searchMatch = items.filter((element) => {
      const name = element.brand
      return name.includes(search);
    });
    renderCards(searchMatch);
  }

async function fetchdata(){
    let response = await fetch(url);
    let data = await response.json();
    if(data.length > 0){
        items = [...data]
       rendercard(items)
    }
}
  fetchdata()

function rendercard(data=[]){
    let cards = [];
    for(let i=0;i<data.length;i++){
        cards.push(createcard(data[i]))
    }
    list.append(...cards);
}


function createcard(data={}){
    let detail = document.createElement("div");
    detail.setAttribute("class","insert")
    let brandnam = document.createElement("h3");
    let productname = document.createElement("p");
    let rate = document.createElement("p");
    let img = document.createElement("p");
    let pdlink = document.createElement("p");
    let descp = document.createElement("p");

     let {brand ="", name = "", price="", image_link="", product_link="", description=""} = data;
     brandnam.innerText= brand;
     productname.innerText= "product Name:" + name;
     rate.innerText= "price:" + price;
     img.innerText="image-link:" + image_link;
     pdlink.innerText= "product-link:" + product_link;
     descp.innerText = "Description:" + description;


    detail.append(brandnam, productname,rate,img,pdlink,descp)
    return detail;

}