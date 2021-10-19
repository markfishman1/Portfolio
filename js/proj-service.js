'use strict'

var gProjects;
var KEY = 'projects';

_createProjects();


function _createProject(id, name, title, url) {
    return {
        id: id,
        name: name,
        title: title,
        desc: makeLorem(30),
        url: url,
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    }
}

function _createProjects() {
    var projects = loadFromStorage(KEY);
    if (!projects || !projects.length) {
        projects = []
        projects.push(_createProject('sokoban', 'Sokoban', 'Push Those Boxes', './img/portfolio/sokoban.png'));
        projects.push(_createProject('space invaders', 'Space Invaders', 'Save Planet Earth', './img/portfolio/spaceinvaders.png'));
        projects.push(_createProject('pacman', 'Pacman', 'Beware of the ghosts', './img/portfolio/pacman.png'));
        projects.push(_createProject('mine sweeper', 'Mine Sweeper', 'Clear The Mine Field', './img/portfolio/minesweeper.png'));
        projects.push(_createProject('ball board', 'Ball Board', 'Collect Those Balls', './img/portfolio/ballboard.png'));
    }
    gProjects = projects;
    console.log(gProjects);
}

function getProjectById(projectId) {
    var project = gProjects.find(project => projectId === project.id)
    if (!project) return

    return project
}

function getProjects() {
    return gProjects
}