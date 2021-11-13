/* Bài 1
let people = prompt("Số lượng người tham gia là: ");
let pizza = prompt("Số lượng pizza là: ");
let pizzaPiece = pizza * 8 / people;

for(people > 0; people--;) {
   let name = prompt("Tên của người tham gia là: ");
   let age = prompt("Tuổi của người tham gia là: "); 
}
console.log("Số miếng pizza mỗi người được ăn là: " + pizzaPiece);
*/

/* Bài 2:
let temperature = Number(prompt("Nhiệt độ hôm nay là: "));
if (temperature < 40) {
    console.log("Nóng");
} else if (temperature < 25) {
    console.log("Mát");
} else if (temperature < 15) {
    console.log("Lạnh");
} else if (temperature < 0) {
    console.log("Siêu lạnh");
}  else {
    console.log("Không sống được")
}
*/

/* Bài 3:
let user = 10;
for(user > 0; user --;) {
    let userName = prompt("Tên người dùng là: ");
}
*/

/* Bài 4:
function sumCaculator(x, y) {
    let z = x + y;
    console.log(z)
}
sumCalculator(1,2);
sumCalculator(5,3);
sumCalculator(7,10);
*/

/* Bài 5:
let studentInfo = {
    Name: David,
    Job: Coder,
    Address: America,
    Age: 40,
}
*/
/* Bài 6 và Bài 7:
var shop = ['Jeans', 'T-shirt', 'Short'];
let statement = String(prompt("Bạn muốn làm gì: Create, Read, Update, Delete?"));
if(statement == "Create") {
    let items = Number(prompt("Số lượng items muốn thêm là: "))
    while(items > 0) {
    let itemsName = prompt("Tên sách muốn nhập là: ");
    items--;
    alert("Số lượng sách hiện giờ là: " + items);
    let items = String(prompt("Thêm đồ muốn thêm: "))
    console.log(shop.push(itemsName));
    }
} else if (statement == "Read") {
    console.log(...shop);
} else if (statement == "Update") {
    let positionName = String(prompt("Tên đồ bạn muốn thêm vào là: "));
    shop.push(positionName);
    alert(shop);
} else if (statement == "Delete") {
    let itemsDeletle = Number(prompt("Vị trí sản phẩm muốn xóa: "));
    delete shop[itemsDeletle];
} else {
    alert("Nhập lại")
}
*/
