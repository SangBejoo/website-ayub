'use strict';
	
	var enter = anime.timeline({
		autoplay: true
	});

	enter
		.add({
			targets: ".rightPane span",
			translateX: ["50vw", "0"],
			opacity: 1,
			easing: "easeOutExpo",
			duration: 860,
			delay: "500"
		})
		.add({
			targets: ".rightPane span",
			translateX: "-50vw",
			opacity: 1,
			easing: "easeOutExpo",
			duration: 860,
			offset: "-=50"
		})
		.add({
			targets: ".rightImg0",
			opacity: 1,
			easing: "easeOutExpo",
			duration: 10, 
			offset: "-=1000"
		})
		.add({
			targets: ".rightImg0",
			scale: "1",
			translateX: ["50px","0"],
			easing: "easeOutExpo",
			duration: 860,
			offset: "-=800"
		})
		.add({
			targets: ".menu .logo",
			translateY: ["-56px", "0"],
			opacity: 1,
			easing: "easeOutExpo",
			duration: 860,
			offset: "-=1800"
		})
		.add({
			targets: "nav ul li",
			translateY: ["-56px", "0"],
			opacity: 1,
			easing: "easeOutExpo",
			duration: 860,
			delay: function(el, i, l) {
				return i * 50;
			},
			offset: "-=1800"
		})
		.add({
			targets: ".inners h1 , .inners h2 ",
			translateY: ["-56px", "0"],
			opacity: 1,
			easing: "easeOutExpo",
			duration: 860,
			delay: function(el, i, l) {
				return i * 100;
			},
			offset: "-=1800"
		})
		.add({
			targets: ".inners p , .inners span",
			opacity: ["0","1"],
			easing: "easeOutExpo",
			duration: 860,
			delay: function(el, i, l) {
				return i * 50;
			},
			offset: "-=1600"
		})
		.add({
			targets: ".rightPane button",
			translateY: ["96px", "0"],
			opacity: 1,
			easing: "easeOutExpo",
			duration: 1200,
			offset: "-=1000"
		})

	.add({
			targets: ".rightImg0",
			opacity: 0,
			translateX: ["0px","-50px"],
			easing: "easeOutExpo",
			duration: 860,
			delay: "3000"
		})

	.add({
			targets: ".rightImg1",
			opacity: 1,
			translateX: ["50px","0px"],
			easing: "easeOutExpo",
			duration: 860,
			offset: "-=860"
		})

	.add({
			targets: ".rightImg1",
		opacity: 0,
			translateX: ["0px","-50px"],
			easing: "easeOutExpo",
			duration: 860,
			delay: "3000"
		})

.add({
			targets: ".rightImg2",
			opacity: 1,
			translateX: ["50px","0px"],
			easing: "easeOutExpo",
			duration: 860,
			offset: "-=860"
		})

	.add({
			targets: ".rightImg2",
		opacity: 0,
			translateX: ["0px","-50px"],
			easing: "easeOutExpo",
			duration: 860,
			delay: "3000"
		})

.add({
			targets: ".rightImg3",
			opacity: 1,
			translateX: ["50px","0px"],
			easing: "easeOutExpo",
			duration: 860,
			offset: "-=860"
		})

	.add({
			targets: ".rightImg3",
		opacity: 0,
			translateX: ["0px","-50px"],
			easing: "easeOutExpo",
			duration: 860,
			delay: "3000"
		})

.add({
			targets: ".rightImg4",
			opacity: 1,
			translateX: ["50px","0px"],
			easing: "easeOutExpo",
			duration: 860,
			offset: "-=860"
		})
	.add({
			targets: ".rightImg4",
		opacity: 0,
			translateX: ["0px","-50px"],
			easing: "easeOutExpo",
			duration: 860,
			delay: "3000"
		})
		.add({
			targets: ".rightImg5",
			opacity: 1,
			translateX: ["50px", "0px"],
			easing: "easeOutExpo",
			duration: 860,
			offset: "-=860"
		})
		.add({
			targets: ".rightImg5",
			opacity: 0,
			translateX: ["0px", "-50px"],
			easing: "easeOutExpo",
			duration: 860,
			delay: "3000"
		})
		.add({
			targets: ".rightImg6",
			opacity: 1,
			translateX: ["50px", "0px"],
			easing: "easeOutExpo",
			duration: 860,
			offset: "-=860"
		})
		.add({
			targets: ".rightImg6",
			opacity: 0,
			translateX: ["0px", "-50px"],
			easing: "easeOutExpo",
			duration: 860,
			delay: "3000"
		})
		.add({
			targets: ".rightImg7",
			opacity: 1,
			translateX: ["50px", "0px"],
			easing: "easeOutExpo",
			duration: 860,
			offset: "-=860"
		})
		.add({
			targets: ".rightImg7",
			opacity: 0,
			translateX: ["0px", "-50px"],
			easing: "easeOutExpo",
			duration: 860,
			delay: "3000"
		})
		.add({
			targets: ".rightImg8",
			opacity: 1,
			translateX: ["50px", "0px"],
			easing: "easeOutExpo",
			duration: 860,
			offset: "-=860"
		})
		.add({
			targets: ".rightImg8",
			opacity: 0,
			translateX: ["0px", "-50px"],
			easing: "easeOutExpo",
			duration: 860,
			delay: "3000"
		})

.add({
			targets: ".rightImg0",
			opacity: 1,
			translateX: ["50px","0px"],
			easing: "easeOutExpo",
			duration: 860,
			offset: "-=860"
		})
;
	
	var loader = anime.timeline({
				loop: true,
				autoplay: false
			});

			loader
				.add({
					targets: "object",
					translateX: ["-100px", "0"],
					opacity: 1,
					easing: "easeOutExpo",
					duration: 860,
					delay: 600
				})
				.add({
					targets: "object",
					translateX: ["0", "100px"],
					opacity: 1,
					easing: "easeOutExpo",
					duration: 860
				});



	
	
	
$( ".contactCTA" ).click(function() {
  
	var contactAnim = anime.timeline({
			});

			contactAnim
			
				.add({
					targets: ".contactLeft",
					translateX: ["-70vw", "0"],
					easing: "easeOutExpo",
					duration: 860,
				
				})
			
	
		.add({
					targets: ".homeCTA",
					opacity: 1,
					easing: "easeOutExpo",
					duration: 860,
					offset: "-=200"
				})
	.add({
			targets: ".contactInners h1 , .contactInners h2 ",
			translateY: ["-56px", "0"],
			opacity: 1,
			easing: "easeOutExpo",
			duration: 860,
			delay: function(el, i, l) {
				return i * 100;
			},
			offset: "-=860"
		})
	
		.add({
			targets: ".contactInners p , .contactInners span",
			opacity: ["0","0.4"],
			easing: "easeOutExpo",
			duration: 860,
			delay: function(el, i, l) {
				return i * 50;
			},
			offset: "-=780"
		})
	
		.add({
			targets: ".links ul a",
			translateY: ["-25px", "0"],
				opacity: 1,
			easing: "easeOutExpo",
			duration: 860,
			delay: function(el, i, l) {
				return i * 50;
			},
			offset: "-=780"
		})
	
		.add({
					targets: "#svgLogo",
					fill: "#ffffff",
					easing: "easeOutExpo",
					duration: 680,
					offset: "-=1880"
				})
				;
});



$( ".homeCTA" ).click(function() {

	var contactAnim = anime.timeline({
			});

			contactAnim
					
		
	
	.add({
					targets: ".homeCTA",
					opacity: 0,
					easing: "easeOutExpo",
					duration: 860,
				})
	
	
		.add({
			targets: ".contactInners h1 , .contactInners h2 ",
			translateY: ["-0", "-56px"],
			opacity: 1,
			easing: "easeOutExpo",
			duration: 860,
			delay: function(el, i, l) {
				return i * 100;
			},
			offset: "-=860"
		})
	
	.add({
			targets: ".contactInners p , .contactInners span",
			opacity: ["0.4","0"],
			easing: "easeOutExpo",
			duration: 860,
			delay: function(el, i, l) {
				return i * 50;
			},
			offset: "-=860"
		})
	
	
		.add({
			targets: ".links ul a",
				opacity: 0,
				translateY: ["0", "-25px"],
			easing: "easeOutExpo",
			duration: 860,
			delay: function(el, i, l) {
				return i * 50;
			},
			offset: "-=860"
		})

	

	
		.add({
					targets: ".contactLeft",
					translateX: "-70vw",
					easing: "easeOutExpo",
					duration: 860,
				offset: "-=760"
				})
	
		.add({
					targets: "#svgLogo",
					fill: "#1c1b1b",
					easing: "easeOutExpo",
					duration: 680,
					offset: "-=840"
				})
				;
	
});
	
