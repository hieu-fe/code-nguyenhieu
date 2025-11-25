//Thứ Năm: Làm Việc với API và Fetch

//- Viết chương trình sử dụng fetch để lấy dữ liệu từ một API công khai và hiển thị dữ liệu lên giao diện.
const listObject = 'https://jsonplaceholder.typicode.com/posts';
const postBlock = document.getElementById('postBlock');
const getBtn = document.getElementById('getObject');
const form = document.getElementById('create-form');
const result = document.getElementById('result');

getBtn.addEventListener('click', function(){
    fetch(listObject)
    .then(function(response){
        return response.json();
    })
    .then(function(posts){
        const listData = posts.slice(0,10).map(function(post){
            return `
                <h3>${post.title}</h3>
                <p>${post.body}</p>`;
        }).join('');
        postBlock.innerHTML = listData;
    })
    .catch(function(err){
        console.log(err);
    });
});

//- Tạo form để gửi dữ liệu đến một API giả lập bằng phương thức POST.
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const newPost = { title, body, userId: 1 };
    try {
        const res = await fetch(listObject, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        });
        if (!res.ok) throw new Error('Tạo post thất bại');
        const resultPost = await res.json();
        document.getElementById('result').innerHTML = JSON.stringify(resultPost);
        console.log(resultPost);
        form.reset();
        getBtn.click();
    } catch(err) {
        document.getElementById('result').innerHTML = 'Có lỗi xảy ra!';
        console.error(err);
    }
});
