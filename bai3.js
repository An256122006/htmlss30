let phone = [];
let cart = [];
let choice;
do {
    choice = +prompt(`
        1. Hiển thị danh sách điện thoại theo hãng.
        2. Thêm điện thoại mới vào cửa hàng.
        3. Tìm kiếm điện thoại theo tên hoặc id.
        4. Mua điện thoại.
        5. Thanh toán tất cả điện thoại trong giỏ hàng.
        6. Sắp xếp điện thoại theo giá.
        7. Hiển thị tổng số tiền của các điện thoại trong kho.
        8. Hiển thị tổng số lượng điện thoại theo từng hãng.
        9. Thoát chương trình.
        `);
    switch (choice) {
        case 1:
            showByCompany();
            break;
        case 2:
            addPhone();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            checkout();
            break;
        case 6:
            sortByPrice();
            break;
        case 7:
            totalInventoryValue();
            break;
        case 8:
            totalByCompany();
            break;
        case 9:
            break;
        default:
            console.log('Lựa chọn không hợp lệ, vui lòng nhập lại.');
    }
} while (choice !== 9);
function showByCompany() {
    let newcompany = prompt("moi ban nhap the loai dien thoai:");
    let newphone = phone.filter(b => b.company == newcompany);
    newphone.forEach(function (arr) {
        console.log("=========================================");
        console.log(arr.id);
        console.log(arr.name);
        console.log(arr.price);
        console.log(arr.quantity);
        console.log(arr.company);
        console.log("=========================================");
    });
};
function addPhone() {
    let id = +prompt('Nhập ID:');
    let name = prompt('Nhập tên điện thoại:');
    let price = +prompt('Nhập giá:');
    let quantity = +prompt('Nhập số lượng:');
    let company = prompt('Nhập hãng:');
    phone.push({ id, name, price, quantity, company });
    console.log('Đã thêm điện thoại thành công!');
}
function searchPhone() {
    let searchname = prompt("moi ban nhap ten tim kiem:");
    let newphone = phone.filter(b => b.name.includes(searchname));
    newphone.forEach(function (arr) {
        console.log("=========================================");
        console.log(arr.id);
        console.log(arr.name);
        console.log(arr.price);
        console.log(arr.quantity);
        console.log(arr.company);
        console.log("=========================================");
    });
};
function buyPhone() {
    let idmua = +prompt("moi ban nhap id mua:");
    let index = phone.findIndex(b => b.id === idmua);
    if (index !== -1) {
        let quantitys = +prompt("moi ban nhap so luong muon mua");
        if (phone[index].quantity >= quantitys) {
            let cartindex = cart.findIndex(b => b.id === idmua);
            if (cartindex !== -1) {
                cart[cartindex].quantity += quantitys;
            } else {
                cart.push({ ...phone[index], quantity: quantitys });
            }
            phone[index].quantity -= quantitys;
        } else {
            console.log("san pham so luong khong du trong cua hang");
        }
    } else {
        console.log("san pham khong co trong cua hang");
    }
}