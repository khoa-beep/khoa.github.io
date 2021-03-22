function Old(n) {
    return (n % 2 == 0);
}

function even(n) {
    return n >=0 ;
}
function Every(datas) {
    var s = "";
    var arr = datas.every(Old);
    if (arr) {
        s = "Yes";
    }
    else {
        s = "No";
    }
    return s;
}

// phuong thuc concat dung de tra ve 1 mang moi
function Con_cat(a, b) {
    a = ['a', 'b', 'c'];
    b = [1, 2, 3];
    var new_arr = a.concat(b);
    console.log(new_arr);
}

// ham some dung de kiem tra xem it nhat mot vai phan tu trong mang
function Some(datas) {
    var data_array = datas.some(Old);
    if (data_array == true) return "Yes";
    return "No";
}

// ham filter() la tao ra mang moi voi tat ca gia tri can kiem tra va duoc cung cap bang  ham

function Filter(datas) {
    var data_value = datas.filter(even);
    console.log(data_value);
}

// ham find tra ve gia tri phan tu dau tien trong mang neu no thoa dieu kien kiem tra
// ham findindex tra ve chi muc phan tu dau tien , nguoc tra ve - 1 

function Find_Findindex(data) {
    var Value_find = data.find(even);
    var Value_index =  data.findIndex(even);

    if(Value_index <= -1 || Value_find == "undefined")
    {
        console.log("No result");
    }
    else if(Value_find !="undefined" || Value_index >0)
    {
        console.log(Value_index + " " + Value_find);
    }
}

Con_cat(3, 3);
var a = [-1,-2,3,4,-5];
console.log(Every(a));
console.log(Some(a));
Filter(a);
Find_Findindex(a);