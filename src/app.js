document.addEventListener('DOMContentLoaded', ()=>{
    console.log("Loaded")

    // let navbarBtn = document.querySelector('.navbarbtn');
    // let navbar = document.querySelector('.navbarLinks')
    // let navLinks = document.querySelector('.link');
    // let frontImage = document.querySelector('.frontImage')
    // navbarBtn.addEventListener('click', ()=>{
    //     console.log("ok")
    //      navbar.classList.toggle('navAppear');
    // })


    let navbarBtn = document.querySelector('nav > i');
    let navbarLinks = document.querySelector('.navbarLinks')
    let links = document.querySelectorAll('.navbarLinks > li')
    let body = document.querySelector('body');
    navbarBtn.addEventListener('click', ()=>{
          navbarLinks.classList.toggle('navActive')
          
          

          
    links.forEach((link, index) => {
      console.log(link)
      link.style.animation =`navbarLinkFade 0.5s ease forwards ${index / 7}s`
});


    })
    



     // loisirs 

     let imagePiano = document.querySelector('.imagePiano');
     let imageDanse = document.querySelector('.imageDanse');
     let imageBooks = document.querySelector('.imageBooks');

     imagePiano.addEventListener('mouseover', ()=>{
           console.log("ok")
        
     })

    


})