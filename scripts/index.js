
fetch('../db/skills.json')
.then(response => response.json())
.then(data => {
  const skillsContainer = document.getElementById('skills-container');
  skillsContainer.className = "skills-container"

  const skillLanguage = document.getElementById('skill-language')
  const skillOther = document.getElementById('skill-other')
  const skillFrontend = document.getElementById('skill-frontend')
  const skillBackend = document.getElementById('skill-backend')
  const skillMobile = document.getElementById('skill-mobile')
  const skillDatabase = document.getElementById('skill-database')

  const languageName = document.createElement('p')
  const otherName = document.createElement('p')
  const frontendName = document.createElement('p')
  const backendName = document.createElement('p')
  const mobileName = document.createElement('p')
  const databaseName = document.createElement('p')
  
  languageName.className = 'skill-title'
  otherName.className = 'skill-title'
  frontendName.className = 'skill-title'
  backendName.className = 'skill-title'
  mobileName.className = 'skill-title'
  databaseName.className = 'skill-title'

  languageName.textContent = 'Lenguajes'
  otherName.textContent = 'Otros'
  frontendName.textContent = 'Frontend'
  backendName.textContent = 'Backend'
  mobileName.textContent = 'Moviles'
  databaseName.textContent = 'Base de Datos'

  

  skillLanguage.appendChild(languageName)
  skillFrontend.appendChild(frontendName)
  skillBackend.appendChild(backendName)
  skillMobile.appendChild(mobileName)
  skillDatabase.appendChild(databaseName)
  skillOther.appendChild(otherName)

 

  data.forEach(skill => {
    const skillCard = document.createElement('div')
    skillCard.className = "skill-card"
    
    const skillName = document.createElement('p');
    const skillLogo = document.createElement('i');

    skillName.className = "skill-name"
    skillLogo.className = "skill-logo"

    skillName.textContent = skill.name;
    skillLogo.className = skill.icon;

    
    skillLogo.classList.add("colored")

    skillCard.appendChild(skillLogo)
    skillCard.appendChild(skillName)

    if(skill.type === 'language'){
      skillLanguage.appendChild(skillCard)
    }
    else if(skill.type === 'frontend'){
      skillFrontend.appendChild(skillCard)
    }
    else if(skill.type === 'backend'){
      skillBackend.appendChild(skillCard)
    }
    else if(skill.type === 'mobile'){
      skillMobile.appendChild(skillCard)
    }
    else if(skill.type === 'database'){
      skillDatabase.appendChild(skillCard)
    }
    else if(skill.type === 'other'){
      skillOther.appendChild(skillCard)
    }
    skillsContainer.appendChild(skillLanguage)
    skillsContainer.appendChild(skillFrontend);
    skillsContainer.appendChild(skillBackend);
    skillsContainer.appendChild(skillMobile);
    skillsContainer.appendChild(skillDatabase);
    skillsContainer.appendChild(skillOther)
  });
})
.catch(error => console.error(error));

fetch('../db/projects.json')
.then(response => response.json())
.then(data => {
  const projectsContainer = document.getElementById('projects-container');
  projectsContainer.className = "projects-container"

  data.forEach(project => {
    const projectCard = document.createElement('div')
    projectCard.className = "project-card"
    const projectName = document.createElement('h1')
    const projectDescription = document.createElement('p')
    const projectFramework = document.createElement('p')
    const projectType = document.createElement('p')
    const repositoryUrl = document.createElement('a')
    const repositoryIcon = document.createElement('i')
    const webUrl = document.createElement('a')
    const webIcon = document.createElement('i')
    const linksContainer = document.createElement('div')
    const projectImg = document.createElement('img')

    linksContainer.className = "links-container"
    projectName.className = "project-name"
    projectFramework.className = "project-framework"
    projectDescription.className = "project-description"
    projectType.className = "project-type"
    repositoryUrl.className = "project-repository"
    repositoryIcon.className = "repository-icon"
    webUrl.className = "web-repository"
    webIcon.className = "web-icon"
    // <i class="fa-solid fa-link"></i>
    projectName.textContent = project.name
    projectDescription.textContent = project.description
    projectImg.src =project.img
    projectType .textContent= project.type
    repositoryUrl.href = project.repository
    repositoryUrl.target = "_blank"

    webUrl.href = project.deploy
    webUrl.target = "_blank"
    projectFramework.textContent   = project.framework
    repositoryIcon.className ="devicon-github-original"
    webIcon.className = "fas fa-external-link-alt"
    repositoryUrl.style.textDecoration = "none"
    webUrl.style.textDecoration = "none"
    projectFramework.style.display = "none"

   


    repositoryUrl.appendChild(repositoryIcon)
    webUrl.appendChild(webIcon)

    projectCard.appendChild(projectImg)
    projectCard.appendChild(projectType)

    projectCard.appendChild(projectName)
    projectCard.appendChild(projectDescription)
    
    projectCard.appendChild(projectFramework)
    linksContainer.appendChild(repositoryUrl)
    linksContainer.appendChild(webUrl)
    projectCard.appendChild(linksContainer)

    projectsContainer.appendChild(projectCard);

   
  });
})
.catch(error => console.error(error));


function downloadCV() {
  var link = document.createElement('a');
  link.style.display = 'none';
  link.setAttribute('download', 'CV.pdf');
  link.setAttribute('href', '../files/CV.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}