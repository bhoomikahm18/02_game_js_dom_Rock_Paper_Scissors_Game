//Get to DOM element
const gameContainer = document.querySelector(".container")
userResult = document.querySelector(".user_result img");
cpuResult = document.querySelector(".cpu_result img");
result = document.querySelector(".result");
optionImages = document.querySelectorAll(".option_image");

// console.log(gameContainer, userResult, cpuResult, result, optionImages);
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        //Loop through each image again
        optionImages.forEach((image2, index2) => {
            // console.log(index, index2);

            //If the current index doesn't match the clicked index
            //Remove the "active" class from the option images
            index !== index2 && image2.classList.remove("active");
        });
            //Get the source of the clicked option image
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;
            // console.log(imageSrc);
    });
});