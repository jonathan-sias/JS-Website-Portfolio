/*allows for the lines in the menu icon to move on click*/
let menu = document.querySelector(".menu-icon");

menu.onclick = () => {
    menu.classList.toggle("move");
};

// Reviews Swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3600,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// Email Js
function validate(){
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    })
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_b2vzn8a","template_j2hubu7",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}

// when fields are empty error popup will appear
function emptyerror(){
    swal({
        title: "Error!",
        text: "Fields cannot be empty! Try again.",
        icon: "error",
      });
}
// when all fields are filled success popup will appear
function success(){
    swal({
        title: "Email sent successfully!",
        text: "Thank you! Have a great day!",
        icon: "success",
      });
}
// header bkg change on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

// scroll top

let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY > 0);
});