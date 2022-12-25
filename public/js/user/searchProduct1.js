const searchProduct1 = (value) => {
    axios.get('/user/search-product', {
        params:{
            keyword: value
        }
    }).then (res =>{
        let products = res.data;
        let html = '';
        console.log(products)
        products.forEach(item => {
            html += `<div className="double-product">
                <!-- Single Product Start -->
                <div className="single-product">
                    <!-- Product Image Start -->
                    <div className="pro-img">
                        <a href="/user/product/${item._id}">
                            <img className="primary-img" src="/image/upload/<${item.image}"
                                 alt="single-product">

                        </a>
                        <a href="#" className="quick_view" data-toggle="modal"
                           data-target="#myModal" title="Quick View"><i
                            className="lnr lnr-magnifier"></i></a>
                    </div>
                    <!-- Product Image End -->
                    <!-- Product Content Start -->
                    <div className="pro-content">
                        <div className="pro-info">
                            <h4><a href="/user/product/<${item._id}"><%=item.name%></a></h4>
                                <p><span className="price">$${item.price}</span></p>
                        </div>
                        <div className="pro-actions">
                            <div className="actions-primary">
                                <a href="#quick-view" onClick="showAddCart2('${item._id}')" title="Add to Cart"> +Thêm vào giỏ</a>
                            </div>

                        </div>
                    </div>
                    <!-- Product Content End -->
                </div>
                <!-- Single Product End -->

            </div>`
        })

        document.getElementById('list-product').innerHTML = html;
    })
}