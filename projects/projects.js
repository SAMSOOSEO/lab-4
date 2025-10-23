import { fetchJSON, renderProjects } from '../global.js';

const projectsContainer = document.querySelector('.projects');
const projectsTitle = document.querySelector('.projects-title');

// JSON 데이터 가져오기
const projects = await fetchJSON('../lib/projects.json');

// 프로젝트 개수 표시
if (projectsTitle) {
    projectsTitle.textContent = `Projects (${projects.length})`;
}

// 프로젝트 렌더링
renderProjects(projects, projectsContainer, 'h2');