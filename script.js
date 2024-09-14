document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const correctUsername = 'Chicken1150'; // กำหนด Username ที่ต้องการ
    const correctPassword = 'Skibididopdop555'; // กำหนด Password ที่ต้องการ
    const userUsername = document.getElementById('username').value;
    const userPassword = document.getElementById('password').value;
    const resultElement = document.getElementById('result');

    if (userUsername === correctUsername && userPassword === correctPassword) {
        resultElement.textContent = 'Username and Password correct!';
        resultElement.style.color = 'green';
        // นำทางไปยังเว็บไซต์อื่น
        window.location.href = 'https://sites.google.com/view/youdidgreatbro/home'; // แทนที่ด้วย URL ที่คุณต้องการ
    } else {
        resultElement.textContent = 'Username or Password Not correct!';
        resultElement.style.color = 'red';
    }
});
