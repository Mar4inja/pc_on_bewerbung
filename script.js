document.addEventListener('DOMContentLoaded', () => {
    const square = document.getElementById('square');
    const button = document.getElementById('colorToggleButton');
    const loadingPage = document.querySelector('.loadingPage');
    const blackCover = document.querySelector('.blackCover');
    const desktop = document.querySelector('.desktop');
    const tooltip = document.getElementById('tooltip');
    const pdfViewer = document.getElementById('pdfViewer');
    const icons = document.querySelectorAll('.icon');

    let isPCOn = false;

    button.addEventListener('click', () => {
        if (isPCOn) {
            blackCover.style.display = 'block';
            loadingPage.style.display = 'none';
            square.classList.remove('squareBlue');
            square.classList.add('squareRed');
            square.style.display = 'block';

            desktop.style.display = 'none';

            isPCOn = false;
        } else {
            square.classList.remove('squareRed');
            square.classList.add('squareBlue');
            square.style.display = 'block';

            blackCover.style.display = 'block';
            loadingPage.style.display = 'block';

            setTimeout(() => {
                loadingPage.style.display = 'none';
                blackCover.style.display = 'none';
                desktop.style.display = 'flex';
            }, 5000);

            isPCOn = true;
        }
    });

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const pdfUrl = icon.getAttribute('data-pdf'); // Get the PDF URL
            pdfViewer.src = pdfUrl; // Set the PDF URL in iframe
            tooltip.style.display = 'block'; // Show the tooltip
            tooltip.style.left = `${window.innerWidth / 2 - tooltip.offsetWidth / 2}px`;
            tooltip.style.top = `${window.innerHeight / 2 - tooltip.offsetHeight / 2}px`;
        });
    });

    document.addEventListener('click', (e) => {
        if (!tooltip.contains(e.target) && !e.target.closest('.icon')) {
            tooltip.style.display = 'none';
        }
    });
});
