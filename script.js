// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        if (targetSection) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Hover effect for project cards
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseover', () => {
        project.style.backgroundColor = '#e67e22';
    });
    project.addEventListener('mouseleave', () => {
        project.style.backgroundColor = '#fff';
    });
});

// Floating icon animation
const icons = document.querySelectorAll('.floating-icon');
icons.forEach(icon => {
    icon.style.top = Math.random() * 100 + 'vh';
    icon.style.left = Math.random() * 100 + 'vw';
    icon.style.animationDelay = Math.random() * 5 + 's';
});

// Expandable interactivity for Languages and Certificates
document.querySelectorAll('#about ul li, #certificates ul li').forEach(item => {
    item.addEventListener('click', () => {
        // Toggle the details visibility
        let details = item.querySelector('.details');
        
        if (details) {
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        } else {
            // If no details exist, create a sample description (replace with specific details as needed)
            details = document.createElement('p');
            details.classList.add('details');
            details.innerText = "Click to learn more!";
            item.appendChild(details);
        }
    });
});
