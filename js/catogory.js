
const getProducts=async()=>{
    const parm=new URLSearchParams(window.location.search).get("catgory");
    console.log(parm);
   const {data}= await axios.get(`https://dummyjson.com/products/category/${parm}`);
  console.log(data.products);
    return data.products;
}

const displayProducts=async()=>{
    const data=await getProducts();
    const result=data.map(ele=>{
        return `<div class="card">
       <img src="${ele.thumbnail}" alt="${ele.description}" />
       <h3>${ele.title}</h3>
       <p>${ele.price}</p>
        </div>`
    }).join("");
    document.querySelector(".container .product-cat").innerHTML=result;

}
displayProducts();