document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects-container');
    const projects = document.querySelectorAll('.individual-project-selector-only');

    // Show the entire container first
    setTimeout(() => {
        projectsContainer.classList.add('show');
    }, 200);

    // Add a delay for each project to "pop up" with bounce
    projects.forEach((project, index) => {
        setTimeout(() => {
            project.classList.add('show');
        }, index * 300);  // Delay each project by 300ms
    });
});
