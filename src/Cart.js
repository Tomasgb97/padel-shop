let usersCart = JSON.parse(localStorage.getItem("cart")) || [];

const addProduct = (product) => {


   const indexOfProduct = usersCart.findIndex(element => element.Name == product.Name);

   if(indexOfProduct >= 0){

        if(isNaN(usersCart[indexOfProduct].Quantity)){
        usersCart[indexOfProduct].Quantity = 1}
        else{usersCart[indexOfProduct].Quantity += 1}
        
   }
   else{

        product.Quantity = 1;

        usersCart.push(product);
   }

    console.log(usersCart)
    localStorage.setItem("cart", JSON.stringify(usersCart));
};

const deleteProduct = (product) => {
   
    const indexOfProduct = usersCart.findIndex(element => element.Name == product.Name);

    if(indexOfProduct >= 0){
 
        usersCart.splice(indexOfProduct, 1);
         console.log(usersCart)
         
    }
    
    
    localStorage.setItem("cart", JSON.stringify(usersCart));
};

const clearCart = () => { localStorage.removeItem("cart")
console.log(usersCart)};

export {usersCart, addProduct, deleteProduct, clearCart}


