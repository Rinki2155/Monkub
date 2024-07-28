window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 30) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

    document.addEventListener("DOMContentLoaded", function() {
        fetch("https://api.example.com/reviews") // Replace with your API endpoint
            .then(response => response.json())
            .then(data => {
                const reviewContainer = document.querySelector('.review-section');
                reviewContainer.innerHTML = `
                    <div class="text-center mb-4">
                        <h2>Monkhub Innovations Reviews</h2>
                        <div class="rating">
                            <span>${data.overallRating}</span>
                            <span class="text-warning">${'&#9733;'.repeat(data.overallRating)}</span>
                            <span>${data.totalReviews} Reviews</span>
                        </div>
                        <div class="powered-by">Powered by <strong>Clutch</strong></div>
                    </div>
                `;
                data.reviews.forEach(review => {
                    const reviewCard = document.createElement('div');
                    reviewCard.classList.add('review-card', 'p-4', 'mb-3');
                    reviewCard.innerHTML = `
                        <div class="rating mb-2">
                            <span>${review.rating}</span>
                            <span class="text-warning">${'&#9733;'.repeat(review.rating)}</span>
                        </div>
                        <p>"${review.comment}"</p>
                        <p class="reviewer">${review.reviewerTitle}, ${review.reviewerCompany}</p>
                        <div class="verified-review">
                            <img src="https://via.placeholder.com/20" alt="Verified" class="img-fluid">
                            <span>Verified Review</span>
                        </div>
                    `;
                    reviewContainer.appendChild(reviewCard);
                });
            })
            .catch(error => console.error('Error fetching reviews:', error));
    });

