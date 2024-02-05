const sections = document.querySelectorAll('[data-id="section-for-toggle"]')
const navBarLinks = document.querySelectorAll('.navBarLink');

// navBarLinks.forEach(navBarLink => {
//   navBarLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     navBarLinks.forEach(navBarLink => {
//       !navBarLink.classList.contains('hide') ? navBarLink.classList.add('hide') : ""
//     })
//     navBarLink.classList.remove('hide');
//   })
// })