document.addEventListener("DOMContentLoaded", function () {
    const images = [
    "https://images.unsplash.com/photo-1742201934199-750a39f4c277?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1741194732682-21f3046cf1a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",       
    "https://images.unsplash.com/photo-1742800073948-fccfaccf46e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1742800073948-fccfaccf46e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1741732311591-18ddbd0964cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
	"https://plus.unsplash.com/premium_photo-1736782965251-052e5b6bfe49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"];
    
    let selectedImages = []; // Store clicked images
    let duplicateImage = images[Math.floor(Math.random() * images.length)]; // Pick one image to duplicate
    let imageSet = [...images, duplicateImage]; // 5 unique + 1 duplicate

    // Shuffle images randomly
    imageSet.sort(() => Math.random() - 0.5);

    const container = document.getElementById("imageContainer");
    const resetButton = document.getElementById("reset");
    const verifyButton = document.getElementById("verify");
    const resultText = document.getElementById("result");

    // Display images
    imageSet.forEach((imgSrc, index) => {
        let img = document.createElement("img");
        img.src = imgSrc + "&random=" + Math.random(); // Ensure uniqueness on reload
        img.dataset.index = index;
        img.addEventListener("click", () => handleImageClick(img, imgSrc));
        container.appendChild(img);
    });

    function handleImageClick(img, src) {
        if (selectedImages.length < 2 && !selectedImages.includes(img)) {
            img.classList.add("selected");
            selectedImages.push({ img, src });

            if (selectedImages.length === 1) {
                resetButton.style.display = "block";
            } else if (selectedImages.length === 2) {
                verifyButton.style.display = "block";
            }
        }
    }

    verifyButton.addEventListener("click", () => {
        verifyButton.style.display = "none";
        if (selectedImages[0].src === selectedImages[1].src) {
            resultText.textContent = "✅ You are a human. Congratulations!";
        } else {
            resultText.textContent = "❌ We can't verify you as a human.";
        }
    });

    resetButton.addEventListener("click", () => {
        selectedImages.forEach(({ img }) => img.classList.remove("selected"));
        selectedImages = [];
        resetButton.style.display = "none";
        verifyButton.style.display = "none";
        resultText.textContent = "";
    });
});
