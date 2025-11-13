const button = document.getElementById('myButton');
const text = document.getElementById('myText');
const input = document.getElementById('myInput')

button.addEventListener('click' , () => 
{
    console.log('Thông báo bên dưới');
    let n = Number(input.value);
    let t = true;

    if (n < 2) t = false;
    for (let i=2; i<=n-1; i++){
        if(n%i===0){
            t = false;
            break;
        }
    }
    if (t){
        alert('Đây là số nguyên tố :))');
        console.log(`Số ${n} là số nguyên tố`);
    } else {
        alert('Đây không phải là số nguyên tố :((');
        console.log(`Số ${n} không phải là số nguyên tố`);
    }
    text.innerHTML = 'Vào console để đọc thông báo !!!';
});