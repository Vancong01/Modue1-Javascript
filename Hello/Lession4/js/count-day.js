function tinh(){
    var nhap = document.getElementById("text1").value;
    var nhapvalue = parseInt(nhap);
    var ketqua ;
    switch(nhapvalue)
    {
        case 2:
            ketqua =alert('Tháng 2 có 28 ngày hoặc 29 ngày');
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
        case 11:
            ketqua =alert('Tháng '+nhap +' có 31 ngày');
            break;
        case 4:
        case 6:
        case 8:
        case 10:
        case 12:
            ketqua =alert('Tháng '+ nhap+' có 30 ngày');
            break;
    }
}
