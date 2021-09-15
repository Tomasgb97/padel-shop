let usersCart = JSON.parse(localStorage.getItem("cart")) || []; // Finds cart on local storage and if it's absent it declares it as an empty array

const addProduct = (product) => {  //Func to add product to local storage.. it has its modified copy on store component, to treat it as state


   const indexOfProduct = usersCart.findIndex(element => element.Name == product.Name);

   if(indexOfProduct >= 0){

        if(isNaN(usersCart[indexOfProduct].Quantity)){

        usersCart[indexOfProduct].Quantity = 1

        }
        else{

        usersCart[indexOfProduct].Quantity += 1
        }
        
   }
   else{

        product.Quantity = 1;
        usersCart.push(product);
   }

    localStorage.setItem("cart", JSON.stringify(usersCart));
};

const deleteProduct = (product) => {      //Func to delete product from local storage.. it has its modified copy on store component, to treat it as state
   
    const indexOfProduct = usersCart.findIndex(element => element.Name == product.Name);

    if(indexOfProduct >= 0){
 
        usersCart.splice(indexOfProduct, 1);
     }
    
    localStorage.setItem("cart", JSON.stringify(usersCart));
};

const clearCart = () => { localStorage.removeItem("cart")}  //Func to clear cart. it hasnt been added to local storage in order to manage state yet.

export {usersCart, addProduct, deleteProduct, clearCart}


