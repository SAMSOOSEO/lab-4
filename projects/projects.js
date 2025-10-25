import { fetchJSON, renderProjects } from '../global.js';

const projectsContainer = document.querySelector('.projects');
const projectsTitle = document.querySelector('.projects-title');

// JSON 데이터 가져오기
const projects = await fetchJSON('../lib/projects.json');

// 프로젝트 개수 표시
/*if (projectsTitle) {
    projectsTitle.textContent = `Projects (${projects.length})`;
}*/

const descriptionText = `This project investigates whether Korea's economic growth from 2014 to 2023 was truly equitable—across industries, regions, and social classes.

To test this claim, we analyzed:
• Trends in Gross National Income (GNI) and the Gini coefficient,
• Three key inequality indicators: "Elderly Poverty Rate," "Living in Equality," and "Relative Poverty Rate."

Furthermore, to demonstrate structural inequities in growth, we examined:
• Disparities in export shares among major industries,
• Regional gaps in real estate prices across the country.`;


const descriptionEl = document.createElement('p');
descriptionEl.textContent = descriptionText;
descriptionEl.style.fontSize = '1.3em';
descriptionEl.style.marginTop = '0.5rem';
descriptionEl.style.color = 'var(--text-color, inherit)';
descriptionEl.className = 'projects-description';
descriptionEl.style.whiteSpace = 'pre-line';

projectsTitle?.after(descriptionEl);



// 프로젝트 렌더링
renderProjects(projects, projectsContainer, 'h2');

