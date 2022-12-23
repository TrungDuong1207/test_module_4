
// const axios = require("axios");



const searchProduct2 = (value) => {
  axios.get('/admin/search-product', {
      params:{
          keyword: value
      }
  }).then (res =>{
      let products = res.data;
      let html = '';
      console.log(products)
      products.forEach((product, index) => {
          html += '<tr>';
          html += `<td>${index + 1} </td>`;
          html += `<td><img src="/image/upload/${product.image}"></td>`
          html += `<td>${product.name}</td>`;
          html += `<td>${product.amount}</td>`;
          html += `<td>${product.price}</td>`;
          html += `<td>${product.category.name}</td>`;
          html += `<td>${product.description}</td>`;
          html += `<td>
                    <a href="/admin/update-product/${product._id}" class="btn btn-primary">Sửa</a>
                    <a onclick="return confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')" href="/admin/delete-product/${product._id}/" class="btn btn-danger">Delete</a></td>`;
          html += '</tr>';
      })

      document.getElementById('list-product').innerHTML = html;
  })
}