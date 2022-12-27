const filterBranch = value => {
    axios.get('/employees/filter-branch', {
        params: {
            branchId: value
        }
    }).then(res => {
        let data = res.data;
        let html = '';
        data.forEach((employee, index) => {
            html += `<tr>`;
            html += `<td>${employee._id}</td>`;
            html += `<td>${employee.name}</td>`;
            html += `<td>${employee.age}</td>`;
            html += `<td>${employee.name}</td>`;
            html += `<td>${employee.branch.name}</td>`;
            html += `<td>
                          <a onclick="return confirm('Do you want to delete?')"
                                               href="/employee/delete/${employee._id}" class="btn btn-danger">Delete</a>
                          <a href="/employee/update/${employee._id}"
                                               class="btn btn-primary">Update</a>
                     </td>`;
        })
        document.getElementById('list-employees').innerHTML = html;
    })
}