const showAddCart2 = (value) => {
    axios.get('/user/cart-add', {
        params:{
            id: value
        }
    }).then (res =>{
        let products = res.data;
        axios.post('/user/cart-add',{cart: products})
        .then (res =>{
            let carts = res.data;
            document.getElementById("cart-length").innerText = carts.items.length; 
        })     
    })
}

