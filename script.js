const sections = document.querySelectorAll('[data-id="section-for-toggle"]')
const navBarLinks = document.querySelectorAll('.navBarLink');
const projectTabBtns = document.querySelectorAll('[data-id="tab-btn"]');
const projects = [...document.querySelectorAll('.projectItem')];

const projectsNum = [
  [0, 1, 2, 3, 4, 5],
  [2, 3, 4],
  [5],
  [0, 1],
]

navBarLinks.forEach((navBarLink, index) => {
  navBarLink.addEventListener('click', (e) => {
    e.preventDefault();

    navBarLinks.forEach(navBarLink => {
      navBarLink.classList.remove('active')
    });

    sections.forEach((section, sectionIndex) => {
      section.classList.remove('visible');

      if (sectionIndex === index) {
        section.classList.add('visible')
      }
    })

    navBarLink.classList.add('active');
  })
})

projectTabBtns.forEach((projectBtn, projectBtnIndex) => {
  projectBtn.addEventListener('click', (e) => {
    e.preventDefault();

    projectTabBtns.forEach((projectBtn) => {
      projectBtn.classList.remove('active')
    })

    projectBtn.classList.add('active')

    projects.forEach(project => {
      project.classList.remove('active')
    });

    projectsNum[projectBtnIndex].forEach(projectIndex => {
      projects[projectIndex].classList.add('active')
    });
  })
})