// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyNavbar() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky");
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

// // When the user scrolls the page, execute stickyNavbar
// window.onscroll = function() {
//     stickyNavbar();
// };
// window.addEventListener("scroll", function() {
//     var navbar = document.getElementById("navbar");
//     if (window.scrollY > 20) {
//         navbar.classList.remove("hidden");
//         navbar.classList.add("scrolled"); // Add class for background color
//     } else {
//         navbar.classList.add("hidden");
//         navbar.classList.remove("scrolled"); // Remove class for background color
//     }
// });


window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 80) {
        navbar.classList.add("active");
        navbar.classList.add("active"); // Add class for background color
    } else {
        navbar.classList.remove("active");
        navbar.classList.remove("active"); // Remove class for background color
    }
});



const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )



// const buttontoggle = document.getElementById("mybutton");
// const up = document.getElementById("up");
// const down = document.getElementById("down")

// function downFunction() {
//     up.style.display = "block"
//     down.style.display = "none"
// }

// function upFunction() {
//       up.style.display = "none"
//     down.style.display = "block"
// }


 //Gallery


 const images = document.querySelectorAll(".gallery__item img");
 let imgIndex
 let imgSrc;
 // get images src onclick
 images.forEach((img, i) => {
     img.addEventListener("click", (e) => {
         imgSrc = e.target.src;
         //run modal function
         imgModal(imgSrc);
         //index of the next image
         imgIndex = i;
     });
 });
 //creating the modal
 let imgModal = (src) => {
     const modal = document.createElement("div");
     modal.setAttribute("class", "modal");
     //add modal to the parent element 
     document.querySelector(".main").append(modal);
     //adding image to modal
     const newImage = document.createElement("img");
     newImage.setAttribute("src", src);
     //creating the close button
     const closeBtn = document.createElement("i");
     closeBtn.setAttribute("class", "fas fa-times closeBtn");
     //close function
     closeBtn.onclick = () => {
         modal.remove();
     };
 //next and previous buttons
 const nextBtn = document.createElement("i");
 nextBtn.setAttribute("class", "fas fa-angle-right nextBtn");
 // change the src of current image to the src of next image
 nextBtn.onclick = () => {
     newImage.setAttribute("src", nextImg())
 };
 const prevBtn = document.createElement("i");
 prevBtn.setAttribute("class", "fas fa-angle-left prevBtn");
 // change the src of current image to the src of pevious image
 prevBtn.onclick = () => {
     newImage.setAttribute("src", prevImg())
 }
 modal.append( prevBtn,newImage, closeBtn, nextBtn);
 };
 
 //next image function
 let nextImg = () => {
     imgIndex++;
     //check if it is the the last image
     if (imgIndex >= images.length) {
         imgIndex = 0
     }
     //return src of the new image
     return images[imgIndex].src;
 };
 //previous image function
 let prevImg = () => {
     imgIndex--;
     console.log(imgIndex);
     //check if it is the first image
     if (imgIndex < 0) {
         imgIndex = images.length - 1
     }
     //return src of previous image
     return images[imgIndex].src
 }
 


 function updateTicker() {
    var ticker = document.getElementById("ticker");
    var currentDate = new Date().toLocaleDateString();
    var currentTime = new Date().toLocaleTimeString();
    var location = "Unknown";



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;



            // Use a geocoding API to get the location from latitude and longitude
            
            var apiUrl = "https://api.openweathermap.org/geo/1.0/reverse?lat=" + latitude + "&lon=" + longitude + "&limit=1&appid=fc2bf5c5228177667088d96e611eba82";
            fetch(apiUrl)
            .then(response => response.json())
            .then(data => {

                location = data[0].name + ", " + data[0].country;

                ticker.innerText = currentDate + " " + currentTime + " | " + location;
                ticker.style.width = ticker.clientWidth + "px";

                if (ticker.scrollWidth > ticker.clientWidth) {
                    ticker.animate([
                            { transform: "translateX(0)" },
                            { transform: "translateX(-" + (ticker.scrollWidth - ticker.clientWidth) + "px)" }
                        ], {
                            duration: (ticker.scrollWidth - ticker.clientWidth) * 20,
                            iterations: Infinity
                        });
                }
            })
            .catch(error => {
                console.log(error);
                ticker.innerText = currentDate + " " + currentTime + " | " + location;
                ticker.style.width = ticker.clientWidth + "px";
            });
        }, function(error) {
            console.log(error);
            ticker.innerText = currentDate + " " + currentTime + " | " + location;
            ticker.style.width = ticker.clientWidth + "px";
        });
    } else {
        ticker.innerText = currentDate + " " + currentTime + " | " + location;
        ticker.style.width = ticker.clientWidth + "px";
    }
}

updateTicker();
setInterval(updateTicker, 1000); // 
 
 
 
function countVisitors() {
    // Check if the count is stored in local storage
    if (localStorage.getItem("visitorCount")) {
      // Retrieve the count from local storage
      var count = parseInt(localStorage.getItem("visitorCount"));
      
      // Increment the count
      count++;
      
      // Update the count in local storage
      localStorage.setItem("visitorCount", count);
    } else {
      // If count is not stored in local storage, set it to 1
      var count = 1;
      
      // Store the count in local storage
      localStorage.setItem("visitorCount", count);
    }
    
    // Display the count on the webpage
    document.getElementById("visitorCount").textContent =" - "+ count;
  }
  
  // Call the countVisitors function when the page loads
  window.onload = countVisitors;
  
  //reset the count function 
  localStorage.removeItem("visitorCount");
  
 // back ti top btn


 const myButton = document.getElementById("button");

 window.onscroll = function() {
    scrollFunction()
 };

 function scrollFunction() {
    if (document.documentElement.scrollTop > 100) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
 }


 function topFunction() {
    document.documentElement.scrollTop = 0;
 }
 
