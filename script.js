//header toggle ' '

let MenuBtn =document.getElementById('MenuBtn')

MenuBtn .addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('Mobile-nav-active');
    this.classList.toggle('close-circle')
})


//typing effect
let typed = new typed('.auto-input',{
    strings:['Front-End Developer!','DJ-Producer!','passive writer!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:200,
    loop:true,
})

