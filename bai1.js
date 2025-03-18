let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
];
let cart = [];
let choice;
do {
    choice = +prompt(`
        1.Hiển thị các sản phẩm theo tên danh mục.
        2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
        3.Sắp xếp các sản phẩm trong cửa hàng theo giá.
        4.Tính số tiền thanh toán trong giỏ hàng.
        5.thoat.
        `);
    switch (choice) {
        case 1:
            hienThisanpham();
            break;
        case 2:
            mua();
            cart.forEach(function (arr) {
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
            sapxep();
            break;
        case 4:
            tongtien();
            break;
        default:
            break;
    }
} while (choice != 5);
function hienThisanpham() {
    let names = prompt("moi ban nhap ten danh muc");
    let sanpham = products.filter(sp => sp.category.includes(names));
    sanpham.forEach(function (arr) {
        console.log("=========================================");
        console.log(arr.id);
        console.log(arr.name);
        console.log(arr.price);
        console.log(arr.quantity);
        console.log(arr.category);
        console.log("=========================================");
    });
};
function mua() {
    let idmua = +prompt("moi ban nhap id mua:");
    let index = products.findIndex(b => b.id === idmua);
    if (index !== -1) {
        let quantitys = +prompt("moi ban nhap so luong muon mua");
        if (products[index].quantity >= quantitys) {
            let cartindex = cart.findIndex(b => b.id === idmua);
            if (cartindex !== -1) {
                cart[cartindex].quantity += quantitys;
            } else {
                cart.push({ ...products[index], quantity: quantitys });
            }
            products[index].quantity -= quantitys;
        } else {
            console.log("san pham so luong khong du trong cua hang");
        }
    } else {
        console.log("san pham khong co trong cua hang");
    }
}
function sapxep() {
    let choice2;
    do {
        choice2 = +prompt(`
            1.tang dan.
            2.giam dan.
            3.thoat.
            `);
        switch (choice2) {
            case 1:
                products.sort((a,b)=> a.price-b.price);
                products.forEach(function (arr) {
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
                products.sort((a,b)=> b.price-a.price);
                products.forEach(function (arr) {
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
}
function tongtien(){
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