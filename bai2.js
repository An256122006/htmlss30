let books = [];
let choice;
let cart=[];
do {
    choice = +prompt(`
        1. Hiển thị danh sách sách theo thể loại.
        2. Thêm sách mới vào kho.
        3. Tìm kiếm sách theo tên hoặc id.
        4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
        5. Sắp xếp sách theo giá.
        6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng.
        7. Hiển thị tổng số lượng sách trong kho.
        8. thoat.
    `);

    switch (choice) {
        case 1:
            displaybook();
            break;
        case 2:
            updatebook();
            break;
        case 3:
            searchbook();
            break;
        case 4:
            buybook();
            break;
        case 5:
            arrange();
            break;
        case 6:
            sumprice();
            break;
        case 7:
            sumquantity();
            break;
        case 8:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Vui lòng chọn từ 1 đến 8.");
            break;
    }
} while (choice != 8);
function updatebook(){
    let a = +prompt("Mời bạn nhập số lượng sách: ");
    for (let i = 0; i < a; i++) {
        let id = +prompt("Nhập ID : ");
        let name = prompt("Nhập tên liên hệ: ");
        let price  = +prompt("Nhập giá: ");
        let quantity = +prompt("Nhập số lượng: ");
        let category = prompt("Nhập thể loại: ");
        books.push({ id, name, price, quantity, category});
    }
};
function displaybook(){
    let newcategory=prompt("moi ban nhap the loai sach:");
    let newbook=books.filter(b => b.category == newcategory);
    newbook.forEach(function (arr) {
        console.log("=========================================");
        console.log(arr.id);
        console.log(arr.name);
        console.log(arr.price);
        console.log(arr.quantity);
        console.log(arr.category);
        console.log("=========================================");
    });
};
function searchbook(){
    let searchname=prompt("moi ban nhap ten tim kiem:");
    let searchId=+prompt("moi ban nhap Id:");
    let newbook2=books.filter(b=> b.name.includes(searchname)|| b.id==searchId);
    newbook2.forEach(function (arr) {
        console.log("=========================================");
        console.log(arr.id);
        console.log(arr.name);
        console.log(arr.price);
        console.log(arr.quantity);
        console.log(arr.category);
        console.log("=========================================");
    });
};
function buybook(){
    let idmua = +prompt("moi ban nhap id mua:");
    let index = books.findIndex(b => b.id === idmua);
    if (index !== -1) {
        let quantitys = +prompt("moi ban nhap so luong muon mua");
        if (books[index].quantity >= quantitys) {
            let cartindex = cart.findIndex(b => b.id === idmua);
            if (cartindex !== -1) {
                cart[cartindex].quantity += quantitys;
            } else {
                cart.push({ ...books[index], quantity: quantitys });
            }
            books[index].quantity -= quantitys;
        } else {
            console.log("san pham so luong khong du trong cua hang");
        }
    } else {
        console.log("san pham khong co trong cua hang");
    }
};
function arrange(){
    let choice2;
    do {
        choice2 = +prompt(`
            1.tang dan.
            2.giam dan.
            3.thoat.
            `);
        switch (choice2) {
            case 1:
                books.sort((a,b)=> a.price-b.price);
                books.forEach(function (arr) {
                    console.log("=========================================");
                    console.log(arr.id);
                    console.log(arr.name);
                    console.log(arr.price);
                    console.log(arr.quantity);
                    console.log(arr.category);
                    console.log("=========================================");
                });
                break;
            case 2:
                books.sort((a,b)=> b.price-a.price);
                books.forEach(function (arr) {
                    console.log("=========================================");
                    console.log(arr.id);
                    console.log(arr.name);
                    console.log(arr.price);
                    console.log(arr.quantity);
                    console.log(arr.category);
                    console.log("=========================================");
                });
                break;
             case 3:
                break;   
            default:
                break;
        }
    }while(choice2!=3);
};
function sumprice(){
    let sum=0;
    if(cart.length>0){
        cart.forEach(function(arr){
           return sum+= arr.quantity*arr.price;
        });
        console.log(sum);
    }else{
        console.log(sum);
    }
}
function sumquantity(){
    let sum2=0;
    if(books.length>0){
        books.forEach(function(arr){
           return sum2+= arr.quantity;
        });
        console.log(sum2);
    }else{
        console.log(sum2);
    }
}