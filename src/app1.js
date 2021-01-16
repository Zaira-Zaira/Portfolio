document.addEventListener('DOMContentLoaded', ()=>{
    console.log("Loaded");


    let title = document.querySelector('.titleSkills');
    let titleSoftware = document.querySelector('.titleSoftware');
    let titleExperience = document.querySelector('.titleExperience');
    let titleFormation = document.querySelector('.titleFormation');
    let titleVeille = document.querySelector('.titleVeille');
    let titleStageAlternance = document.querySelector('.titleStageAlternance');
    let titleLoisirs = document.querySelector('.titleLoisirs');
    let titlePortfolio = document.querySelector('.titlePortfolio');
    let titleProjects = document.querySelector('.titleProjects');
    let navbarbtn = document.querySelector('.navbar > i');

    let skills = document.querySelector('.sectionAppear');
    let software = document.querySelector('.sectionSkillsAppear');
    let experiences = document.querySelector('.sectionExperienceAppear');
    let formation = document.querySelector('.sectionFormationAppear');
    let veilleTechno = document.querySelector('.veilleTechnoAppear');
    let myWork = document.querySelector('.sectionMyworkAppear');
    let loisirs = document.querySelector('.loisirsAppear');
    let portfolio = document.querySelector('.cubeAppear');
    let projects = document.querySelector('.projectsAppear');
    let navbar = document.querySelector('.navbarLinks');
    let navlinks = document.querySelector('.navbarLinks > li a');



    title.addEventListener('click', ()=>{
        skills.classList.toggle('listCompetences');
    });

    titleSoftware.addEventListener('click',  ()=>{
        software.classList.toggle('listSoftwareAppear');
    });

    titleExperience.addEventListener('click', ()=>{
        experiences.classList.toggle('listExperiences');
    })

    titleFormation.addEventListener('click', ()=>{
        formation.classList.toggle('listFormations');
    })

    titleVeille.addEventListener('click', ()=>{
        veilleTechno.classList.toggle('veilleTechnologie');
    })

    titleStageAlternance.addEventListener('click', ()=>{
        myWork.classList.toggle('myWork');
    })

    titleLoisirs.addEventListener('click', ()=>{
        loisirs.classList.toggle('listLoisirs');
    })

    titlePortfolio.addEventListener('click', ()=>{
        portfolio.classList.toggle('cube');
    })

    titleProjects.addEventListener('click', ()=>{
        projects.classList.toggle('listProjects');
    })

    navbarbtn.addEventListener('click', ()=>{
        console.log("ok");
        navbar.classList.toggle('navbarAppear');
    })

    navlinks.addEventListener('click', ()=>{
        console.log("ok");
        navbar.classList.add('navbarLinks');
    })
})