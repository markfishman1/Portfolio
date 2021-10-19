'use strict'

function onInit() {
    renderProjects();
}


function renderProjects() {
    var projects = getProjects();
    // var strHtml = ` <div class="row">`
    var strHTML = projects.map(project => {
        var str = '';
        str += `<div class="col-md-4 col-sm-6 portfolio-item" onclick="openModal('${project.id}')"> 
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1"> 
        <div class="portfolio-hover"> 
        <div class="portfolio-hover-content">
         <i class="fa fa-plus fa-3x"></i> 
         </div> </div> <img class="img-fluid" src="${project.url}" >
          </a> <div class="portfolio-caption"> 
          <h4>${project.name}</h4> 
          <p class="text-muted">${project.title}</p> 
          </div>
           </div>`
        return str;
    }
    )
    document.querySelector('#portfolio-row').innerHTML = strHTML.join('');
}

function renderModal(project) {

    var strHTML = `<h2>${project.name}</h2>
    <p class="item-intro text-muted">${project.title}.</p>
    <img class="img-fluid d-block mx-auto" src="${project.url}" alt="">
    <p>${project.desc}</p>
    <ul class="list-inline">
      <li>Date: January 2017</li>
      <li>Client: Threads</li>
      <li>Category:Web Development</li>
    </ul>
    <button onclick="closeModal()" class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Close Project</button>
    `
    //   <button onclick="goTo(${project})">Go To Project</button>


    document.querySelector('.modal-body').innerHTML = strHTML;

}

function openModal(projectId) {
    var project = getProjectById(projectId);
    console.log('project', project);
    renderModal(project);
    console.log('opening modal');
    document.querySelector('.portfolio-modal').style.display = 'flex';
}

function closeModal() {
    document.querySelector('.portfolio-modal').style.display = 'none';

}
function onSendMessage() {
    var email = document.querySelector('#email').value;
    var subject = document.querySelector('#subject').value;
    var body = document.querySelector('#body').value;
    console.log('email', email);
    console.log('subject', subject);
    console.log('body', body);
    var url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&b
    ody=${body}`;
    window.open(url, '_blank');
}

function goTo(project) {

}
