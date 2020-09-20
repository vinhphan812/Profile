const name = 'Phan Thanh Vinh';
const skill = ['html', 'css', 'js', 'cs'];
const info = ['Đại Học Ngoại Ngữ-Tin Học (HUFLIT)', '24/10/2001', 'Thành Phố Hồ Chí Minh']
const avatarUrl = 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/68391052_2348151482130650_4214272256441843712_n.jpg?_nc_cat=102&_nc_sid=7aed08&_nc_ohc=BAl-F1G0mGEAX8EeSxb&_nc_ht=scontent-hkt1-1.xx&oh=4bb5db04dbce72eb7bd2d9075e87155a&oe=5F8CDEE8';
const elSkill = document.getElementsByClassName('language');
const elSub = document.getElementsByClassName('info')[0];
const el = document.getElementById('name');
const ava = document.getElementById('avatar');
var index = 0, j = 0; 

ava.src = avatarUrl;

typeWriter();
for(var i = 0; i < elSkill.length; i++){
     elSkill[i].classList.add(skill[i]);
}
setTimeout(function(){
          activeEl();
          setTimeout(function(){
               activeEl();
               setTimeout(function(){
                    activeEl();
               }, 1000)
          }, 1000)
}, 1000)

function typeWriter() {
     if (j < name.length) {
          el.innerHTML += name.charAt(j);
          j++;
          setTimeout(typeWriter, 50);
     }
}

function activeEl(){
     elSub.children[index].classList.add('active')
     elSub.children[index].children[1].children[1].innerHTML = info[index];  
     index++;
}