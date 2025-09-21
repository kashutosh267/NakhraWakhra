// Example: Simple alert on page load
window.onload = function() {
  
  const images = [
		NAKHRA_WAKHRA + "/Images/sister.jpg",
		NAKHRA_WAKHRA + "/Images/karwaWomen.jpg",
		NAKHRA_WAKHRA + "/Images/karwachauth.jpg"
	];

	let index = 0;
	let rotate = true;
	
	const slideshow = document.getElementById("slideshow");
	const logo = document.getElementById("logo");
	
	// change image every 5 second
	logo.src = NAKHRA_WAKHRA + "/Images/NakhraWakhraLogo.png"
	slideshow.src = NAKHRA_WAKHRA + "/Images/sister.jpg",
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

