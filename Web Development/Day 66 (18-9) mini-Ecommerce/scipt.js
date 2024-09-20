let ulTag = document.querySelector("aside ul")
let productbox = document.querySelector(".productInner")

let catdata = async ()=>{
    ulTag.innerHTML=''
    let catapi = await fetch(`https://dummyjson.com/products/category-list`);
    let finalcatRes = await catapi.json();
    let inUl='';
    finalcatRes.forEach((element,index) => {
        inUl+=`<li onclick =showItems('${element}')>${element}</li>`
    });
    ulTag.innerHTML=inUl
}
catdata();

let showItems= async (reqData='')=>{
    let apiUrl;
    if(reqData===''){
        apiUrl = `https://dummyjson.com/products`
    }
    else{
        apiUrl = `https://dummyjson.com/products/category/${reqData}`
    }

    let fetchApi = await fetch(apiUrl)
    let finalRes = await fetchApi.json()
    let {products} = finalRes;
    let pItems =''

    products.forEach((element,index)=>{
        console.log(element)
        pItems+=`<div class="productItems">
                <img src="${element.thumbnail}" alt="">
                <div class="productbottom">
                    <h3>${element.title} | Rs ${element.price}</h3>
                    <h4>Brand -- ${element.brand}</h4>
                </div>
            </div>`
    })
    productbox.innerHTML=pItems
}
showItems()