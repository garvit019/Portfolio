document.addEventListener('DOMContentLoaded', function () {
    const loadingContainer = document.querySelector('.loading-container');
    const mainPage = document.querySelector('.main-page');

    // Play the animation after a delay
    setTimeout(() => {
        loadingContainer.style.animationPlayState = 'running';
    }, 1000); // Adjust the delay as needed

    // Hide the loading container and show the main page after the animation
    setTimeout(() => {
        loadingContainer.style.display = 'none';
        mainPage.style.display = 'block';
        mainPage.style.opacity = '1';
    }, 3500); // Adjust the delay to match the duration of your animation
});

let proj1 = document.getElementById("proj1");
let proj2 = document.getElementById("proj2");

let proj1Title = proj1.querySelector('.projcontent');
let proj2Title = proj2.querySelector('.projcontent');

let initialTitle1 = proj1Title.innerHTML;
let initialTitle2 = proj2Title.innerHTML;

proj1.addEventListener('mouseover', function () {
    proj1Title.innerHTML = 'A ML-based project that predicts patients\' risk of having diabetes based on the<br> dataset. Implemented Regression Models to improve early detection,and enhance<br> diabetes detection results. Conducted rigorous evaluation and fine-tuning of the<br> model, achieving high accuracy and performance metrics.';
    proj1Title.classList.add('font-mate');
});

proj2.addEventListener('mouseover', function () {
    proj2Title.innerHTML = 'Analyzed Retail Dataset using ML concepts, implementing an end-to-end pipeline to<br> gain insights and perform customer segmentation Visualized data through lineplots,<br> barplots, and count plots, simplifying complex information for better understanding.<br> Applied ML algorithms such as KMeans, Hierarchical Clustering, PCA, and LDA to<br> perform customer segmentation and revenue analysis.';
    proj2Title.classList.add('font-mate');
});

proj1.addEventListener('mouseout', function () {
    proj1Title.innerHTML = initialTitle1;
    proj1Title.classList.remove('font-mate');
});

proj2.addEventListener('mouseout', function () {
    proj2Title.innerHTML = initialTitle2;
    proj2Title.classList.remove('font-mate');
});











