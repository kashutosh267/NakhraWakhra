// Example: Simple alert on page load
window.onload = function() {
  console.log("Website loaded!");
  
  const images = [
	"C:/Users/kashu/Desktop/NakhraWakhra/Images/sister.jpg",
	"C:/Users/kashu/Desktop/NakhraWakhra/Images/karwaWomen.jpg",
	"C:/Users/kashu/Desktop/NakhraWakhra/Images/karwachauth.jpg"
	];

	let index = 0;
	let rotate = true;
	
	const slideshow = document.getElementById("slideshow");

	// change image every 5 second
	
	setInterval(() => 
	{
		if (rotate)
		{
			index = (index + 1) % images.length;
			slideshow.src = images[index];
		}
		
	}, 3000);

	
	slideshow.addEventListener('mouseenter', () => rotate = false);
	slideshow.addEventListener('mouseleave', () => rotate = true);
};

