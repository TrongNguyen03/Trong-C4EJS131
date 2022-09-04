const change = document.getElementById('change');
const nope = document.getElementById('nope');
const name = document.getElementById('name');
const password = document.getElementById('pass');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
      messages.push('username không được để trống')
    }
  
    if (password.value.length <= 6) {
      messages.push('mật khẩu ít nhất là 6 ký tự')
    }
  
    if (password.value === 'pass') {
      messages.push('Password cannot be password')
    }
  
    if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
    }
  });

function changetext() {
    const p = document.getElementsByTagName('p')[0];
    if(p.innerHTML === 'TÔI NGHÈO') {
        p.innerHTML = 'TÔI GIÀU NHỜ HỌC'
     }else if(p.innerHTML === 'TÔI GIÀU NHỜ HỌC') {
         p.innerHTML = 'TÔI NGHÈO'
     }
     return false
};
change.onclick = changetext;

function changenope() {
    {
        let x = confirm("Bạn có chắc không muốn thay đổi cuộc đời");
        if (x)
            return alert('bạn lười quá :))');
        else
          return false;
      }
}