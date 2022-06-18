// ------ VARIABLE ------ //
let $window = $(window);
let $page = $("html, body");
let $menu = $(".menu");

// ------ READY FUNCT ------ //

$window.on("load", function () {
	"use strict";

	preLoad();
	display(homePage);
});

$(document).ready(function () {
	"use strict";

	overlayMenu();
	darkMode();
	activePage();
	nextButton();
});

/*************************************
             == FUNCTION ==
*************************************/

// ------ PRELOAD PAGE FUNC ------ //

function preLoad() {
	"use strict";

	Pace.on("done", function () {
		$("#preloader")
			.delay(1000)
			.animate({ top: "-120%" }, 2000, $.bez([0.19, 1, 0.22, 1]));

		setTimeout(() => {
			animate();
		}, 1000);
	});
}

// ------ OVERLAY MENU ------ //

function overlayMenu() {
	"use strict";

	let menu = $(".overlay-btn");
	$(menu).on("click", function () {
		"use strict";

		$("#overlay").addClass("active");

		setTimeout(() => {
			$(".overlay-menu ul li a").removeClass("hide");
			$(".overlay-info").removeClass("hide");
		}, 50);
	});

	$("#overlay").on("click", function () {
		$("#overlay").removeClass("active");
		$(".overlay-menu ul li a").addClass("hide");
		$(".overlay-info").addClass("hide");
	});
}

// ------ SWITCH THEME FUNCTION ------ //

function darkMode() {
	"use strict";

	let theme = "light";

	$("#switch-btn").on("click", function () {
		if (theme == "light") {
			theme = "dark";
			setTimeout(() => {
				$("body").addClass("dark-mode");
			}, 500);
		} else {
			theme = "light";
			setTimeout(() => {
				$("body").removeClass("dark-mode");
			}, 500);
		}
	});
}

// ------ ACTIVE PAGE FUNCTION ------ //
function activePage() {
	"use strict";

	$(".overlay-menu ul li a").each(function () {
		$(this).on("click", function () {
			let prev = $(".page").attr("page");
			let page = $(this).html();

			if (page == prev) {
				$("#overlay").removeClass("active");
				$(".overlay-menu ul li a").addClass("hide");
				$(".overlay-info").addClass("hide");
			} else {
				switch (page) {
					case "home":
						display(homePage);
						animate();
						$(`#${prev}`).detach();
						break;

					case "about":
						display(aboutPage);
						year();
						animate();
						$(`#${prev}`).detach();
						break;

					case "skill":
						display(skillPage);
						animate();
						percentBar();
						$(`#${prev}`).detach();
						break;

					case "portofolio":
						display(portofolioPage);
						animate();
						$(`#${prev}`).detach();
						break;

					default:
						break;
				}
			}
		});
	});
}

// --- ANIMATE FUNCTION --- //

function animate() {
	"use strict";

	$menu.addClass("animate");
	setTimeout(() => {
		$menu.removeClass("animate");
	}, 100);
}

// ------ PERCENT BAR ------ //

function percentBar() {
	"use strict";

	$(".my-skill-bar").each(function () {
		let percent = $(this).attr("percent");

		let status_skill = percent <= 40 ? 'Beginner' : percent > 70 ? percent > 85 ? "Expert" : "Advanced" : "Intermediate";

		$(this).find(".skill-bar-percent").text(status_skill);

		$(this).find(".skill-bar").css({
			width: percent + "%",
		});
	});
}

// ------ NEXT BUTTON ------ //

function nextButton() {
	$(".menu-btn .next-btn").on("click", function () {
		let page = $(".page").attr("page");

		switch (page) {
			case "home":
				$menu.addClass("animate");
				$(".menu-btn").addClass('disable');
				setTimeout(function () {
					display(aboutPage);
					setTimeout(() => {
						year();
						$menu.removeClass("animate");
						$(`#${page}`).detach();
					}, 300);
					$(".menu-btn").removeClass('disable');
				}, 800);
				break;

			case "about":
				$menu.addClass("animate");
				$(".menu-btn").addClass('disable');
				setTimeout(function () {
					display(skillPage);
					percentBar();
					$menu.removeClass("animate");
					$(`#${page}`).detach();
					$(".menu-btn").removeClass('disable');
				}, 600);
				break;

			case "skill":
				$menu.addClass("animate");
				$(".menu-btn").addClass('disable');
				setTimeout(function () {
					display(portofolioPage);
					setTimeout(() => {
						$menu.removeClass("animate");
						$(`#${page}`).detach();
					}, 100);
					$(".menu-btn").removeClass('disable');
				}, 1500);
				break;

			case "portofolio":
				$menu.addClass("animate");
				$(".menu-btn").addClass('disable');
				setTimeout(function () {
					display(footerPage);
					copyright();
					$menu.removeClass("animate");
					$(`#${page}`).detach();
					$(".menu-btn").removeClass('disable');
				}, 600);
				break;

			case "footer":
				$menu.addClass("animate");
				$(".menu-btn").addClass('disable');
				display(homePage);
				setTimeout(() => {
					$menu.removeClass("animate");
					$(`#${page}`).detach();
					$(".menu-btn").removeClass('disable');
				}, 100);
				break;

			default:
				break;
		}
	});
}

// --- DISPLAYING FUNCTION --- //

function display(page) {
	"use strict";

	$menu.append(page);
}

// ------ COPYRIGHT ------ //

function copyright() {
	let year = new Date();
	$(".copyright").html(`&#169 Copyright IkanPakUs - ${year.getFullYear()}`);
}

// ------ YEARS ------ //

function year() {
	let year = new Date().getFullYear();
	let age = year - 2003;
	let experience = year - 2020;

	$("span.age").html(age);
	$("span.exp").html(experience);
}

// ------ CAUTION FOR YOUR EYES ------ //
// ------ HTML TEMPLATE ------ //

const homePage = `<div id="home" class="page" page="home">
					<div class="mainpage" id="mainpage">
						<div class="content">
							<div id="text-mainpage">
								<div class="text-box">
									<div class="top-content">
										<div class="greeting">
											<h3>hi im</h3>
										</div>
										<div class="line"></div>
									</div>
									<div class="center-content">
										<h1>mang arya</h1>
									</div>
									<div class="bottom-content">
										<div class="media">
											<ul>
												<li>
													<a href="https://twitter.com/KomangKsatria" target="_blank">
														<ion-icon name="logo-twitter" aria-label="KomangKsatria"></ion-icon>
													</a>
												</li>
												<li>
													<a href="https://www.instagram.com/mangarya.w/" target="_blank">
														<ion-icon name="logo-instagram"></ion-icon>
													</a>
												</li>
												<li>
													<a href="https://www.linkedin.com/in/komang-arya-607975211/"
														target="_blank">
														<ion-icon name="logo-linkedin"></ion-icon>
													</a>
												</li>
												<li>
													<a href="https://github.com/IkanPakUs" target="_blank">
														<ion-icon name="logo-github"></ion-icon>
													</a>
												</li>
												<li>
													<a href="https://gitlab.com/IkanPakUs" target="_blank">
														<ion-icon name="logo-gitlab"></ion-icon>
													</a>
												</li>
											</ul>
										</div>
										<div class="profesion">
											<h3>web developer</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>`;

const aboutPage = `<div id="about" class="page" page="about">
						<div class="profile-img">
							<div class="img-content">
								<div class="bottom-img">
									<div class="img-warp">
										<img src="src/img/profile.png" alt="Komang Arya" />
									</div>
								</div>
								<div class="top-img">
									<div class="img-warp bottom">
										<img src="src/img/profile.png" alt="Komang Arya" />
									</div>
								</div>
							</div>
						</div>
						<div class="desc">
							<p>
								Hello, my name Komang Arya (<span class="age"></span> years old), i'm a full stack developer who familiar using php with laravel framework. and want to work with full stack javascript. i've been learning programing since <span class="exp"></span> years ago. 
								I'm based in Bali, Indonesia, and a college student in ITB Stikom Bali since 2020.
								Programing is one of my hobbies because i think it's fun to find the solution in a problem.
								I'm open for the recruiter to give me a freelance project, and also i'm looking for a remote job.
							</p>
						</div>
					</div>`;

const skillPage = `<div id="skill" class="page" page="skill">
						<div class="my-skill">
							<div class="row justify-content-end">
								<div class="col-8 skill-content">
									<div class="timeline ml-5">
										<h2>MY JOURNEY</h2>
										<ul>
											<li>
												<div class="timeline-name">
													<h4>Pt.Omni Hotelier Internasional</h4>
													<p>Junior fullstack developer</p>
													<small>2021 - Now</small>
												</div>
											</li>
											<li>
												<div class="timeline-name">
													<h4>ITB Stikom Bali</h4>
													<p>majoring in information systems</p>
													<small>2020 - Now</small>
												</div>
											</li>
											<li>
												<div class="timeline-name">
													<h4>SMKN 1 Denpasar</h4>
													<p>majoring in computer and networking</p>
													<small>2017 - 2020</small>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div class="col-4 skill-content">
									<div class="my-skill-bar" percent="90">
										<div class="skill-bar-name"><p>HTML</p></div>
										<div class="skill-bar"></div>
										<div class="skill-bar-percent"></div>
									</div>
									<div class="my-skill-bar" percent="90">
										<div class="skill-bar-name"><p>CSS</p></div>
										<div class="skill-bar"></div>
										<div class="skill-bar-percent"></div>
									</div>
									<div class="my-skill-bar" percent="80">
										<div class="skill-bar-name"><p>JAVASCRIPT</p></div>
										<div class="skill-bar"></div>
										<div class="skill-bar-percent"></div>
									</div>
									<div class="my-skill-bar" percent="80">
										<div class="skill-bar-name"><p>PHP</p></div>
										<div class="skill-bar"></div>
										<div class="skill-bar-percent"></div>
									</div>
									<div class="my-skill-bar" percent="70">
										<div class="skill-bar-name"><p>BOOTSTRAP</p></div>
										<div class="skill-bar"></div>
										<div class="skill-bar-percent"></div>
									</div>
									<div class="my-skill-bar" percent="70">
										<div class="skill-bar-name"><p>JQUERY</p></div>
										<div class="skill-bar"></div>
										<div class="skill-bar-percent"></div>
									</div>
									<div class="my-skill-bar" percent="80">
										<div class="skill-bar-name"><p>LARAVEL</p></div>
										<div class="skill-bar"></div>
										<div class="skill-bar-percent"></div>
									</div>
									<div class="my-skill-bar" percent="60">
										<div class="skill-bar-name"><p>VUE JS</p></div>
										<div class="skill-bar"></div>
										<div class="skill-bar-percent"></div>
									</div>
								</div>
							</div>
						</div>
					</div>`;

const portofolioPage = `<div id="portofolio" class="page" page="portofolio">
							<div id="portofolio-content">
								<div id="text-content">
									<h1>WHAT <span>I'VE</span><br />BEEN <span>MAKE</span></h1>
								</div>
								<div id="img-content">
									<div id="content-warp">
										<div class="img-content">
											<a
												href="https://ikanpakus.github.io/Movies-SPA"
												class="img-warp"
											>
												<img
													src="src/img/movies.JPG"
													alt="Movies"
													class="portofolio-img"
												/>
												<div class="image-text">
													<p class="date">10-03-2021</p>
													<p class="img-name">Movies</p>
												</div>
											</a>
										</div>
										<div class="img-content">
											<a
												href="#"
												class="img-warp"
											>
												<img
													src="src/img/portofolio.JPG"
													alt="portofolio page"
													class="portofolio-img"
												/>
												<div class="image-text">
													<p class="date">11-04-2021</p>
													<p class="img-name">Portofolio Page</p>
												</div>
											</a>
										</div>
										<div class="img-content">
											<a
												href="https://github.com/IkanPakUs/Ecommerce_2"
												class="img-warp"
											>
												<img
													src="src/img/ecommerce-2.png"
													alt="E-commerce"
													class="portofolio-img"
												/>
												<div class="image-text">
													<p class="date">24-12-2021</p>
													<p class="img-name">E-commerce</p>
												</div>
											</a>
										</div>
										<div class="img-content">
											<a
												href="https://ikanpakus.github.io/Mathler-KW/"
												class="img-warp"
											>
												<img
													src="src/img/Mathler.png"
													alt="Mathler KW"
													class="portofolio-img"
												/>
												<div class="image-text">
													<p class="date">27-02-2022</p>
													<p class="img-name">Mathler KW</p>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>`;

const footerPage = `<div id="footer" class="d-flex align-items-center justify-content-around page" page="footer">
						<div class="logo col-12 footer-content">
							<h3>mang arya</h3>
							<div class="footer-info">
								<ul>
									<li>Mail : km.aryawirawan@gmail.com</li>
									<li>Phone : +62 896 5672 0690</li>
								</ul>
							</div>
							<div class="information">
								<a href="https://twitter.com/KomangKsatria" target="_blank"
									><ion-icon name="logo-twitter"></ion-icon
								></a>
								<a href="https://www.instagram.com/mangarya.w/" target="_blank"
									><ion-icon name="logo-instagram"></ion-icon
								></a>
								<a href="https://www.linkedin.com/in/komang-arya-607975211/" target="_blank"
									><ion-icon name="logo-linkedin"></ion-icon
								></a>
								<a href="https://github.com/IkanPakUs" target="_blank"
									><ion-icon name="logo-github"></ion-icon
								></a>
								<a href="https://gitlab.com/IkanPakUs" target="_blank"
									><ion-icon name="logo-gitlab"></ion-icon
								></a>
							</div>
							<div class="copyright"></div>
						</div>
					</div>`;
