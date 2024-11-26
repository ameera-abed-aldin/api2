
const  fetchApi=async(url)=>{
    const {data}=await axios.get(url);
    return data;
}

const displayCatogry= async()=>{
    const data=await fetchApi("https://dummyjson.com/products/category-list");
    const result=data.map(ele=>{
        return`
        <div class="category">
        <p>${ele}</p>
        <a href="../pages/catogroy.html?catgory=${ele}">details</a></div>`
    }).join("");
    document.querySelector(".container .catogray-cont").innerHTML=result;
}

const getProduct=async()=>{
    const data=await fetchApi('https://dummyjson.com/products');
    
    const result=data.products.map(ele=>{
        return `<div class="card">
        <img src="${ele.thumbnail}" alt="${ele.description}" />
        <h3>${ele.title}</h3>
        <p>${ele.price}</p>
         </div>`
    }).join("");
    document.querySelector(".products").innerHTML=result;
}

displayCatogry();
getProduct();

