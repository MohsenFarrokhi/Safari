const ratingStars = document.querySelectorAll('.rating input');
const selectedRatingElement = document.getElementById('selectedRating');
const numberOfStarsElement = document.getElementById('numberOfStars');

ratingStars.forEach(star => {
    star.addEventListener('change', () => {
        const rating = star.value;
        const numberOfStars = document.querySelectorAll('.rating input:checked').length;


        selectedRatingElement.textContent = rating;
        numberOfStarsElement.textContent = numberOfStars;
    });
});
