document.addEventListener("DOMContentLoaded", function () {
    let selectedImages = []; // Stores clicked images
    const resetButton = document.getElementById("reset");
    const verifyButton = document.getElementById("verify");
    const resultText = document.getElementById("para");
    const images = document.querySelectorAll(".image-container img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            if (selectedImages.length < 2 && !selectedImages.includes(this)) {
                this.classList.add("selected");
                selectedImages.push(this);

                if (selectedImages.length === 1) {
                    resetButton.style.display = "block";
                } else if (selectedImages.length === 2) {
                    verifyButton.style.display = "block";
                }
            }
        });
    });

    verifyButton.addEventListener("click", () => {
        verifyButton.style.display = "none";
        if (selectedImages[0].src === selectedImages[1].src) {
            resultText.textContent = "✅ You are a human. Congratulations!";
        } else {
            resultText.textContent = "❌ We can't verify you as a human.";
        }
    });

    resetButton.addEventListener("click", () => {
        selectedImages.forEach(img => img.classList.remove("selected"));
        selectedImages = [];
        resetButton.style.display = "none";
        verifyButton.style.display = "none";
        resultText.textContent = "";
    });
});
