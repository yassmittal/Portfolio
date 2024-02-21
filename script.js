const sections = document.querySelectorAll('[data-id="section-for-toggle"]')
const navBarLinks = document.querySelectorAll('.navBarLink');

navBarLinks.forEach((navBarLink, index) => {
  navBarLink.addEventListener('click', (e) => {
    e.preventDefault();

    navBarLinks.forEach(navBarLink => {
      navBarLink.classList.remove('active')
    });

    sections.forEach((section, sectionIndex) => {
      section.classList.remove('visible');

      console.log(sectionIndex)
      console.log(index)
      console.log(' ')

      if (sectionIndex === index) {

        section.classList.add('visible')
      }
    })

    navBarLink.classList.add('active');





    //     navBarLinks.forEach((navBarLink, index) => {
    //       // !navBarLink.classList.contains('hide') ? navBarLink.classList.add('hide') : "";
    //     })

    //     sections.forEach((section, sectionIndex) => {
    //       !section.classList.contains('hide') ? section.classList.add('hide') : "";
    //     })
    //     navBarLink.classList.remove('hide');
  })
})