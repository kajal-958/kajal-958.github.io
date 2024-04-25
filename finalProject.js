let sections = document.querySelectorAll('section');
 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
 
        if(top >= offset && top < (offset + height)) {
            navlinks.forEach.apply(links => {
                navlinks.classList.remove('active');
                document.querySelector('headings nav a[href*=' + id + ']').classList.add('active');
            });
        };
 
    });
};

document.querySelector('.fa-bars').addEventListener('click', function() {
    document.querySelector('.navlist').classList.toggle('show');
    const menuIcon = document.querySelector('.fa-bars');
    const navList = document.querySelector('.navlist');
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navList.classList.toggle('active');
    };
});
  