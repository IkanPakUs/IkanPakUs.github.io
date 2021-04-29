// ------ VARIABLE ------ //
let $window = $(window);
let $page = $("html, body");
let $menu = $(".menu");

// ------ READY FUNCT ------ //

$window.on("load", function () {
	"use strict";

	preLoad();
	displayHome();
});

$(document).ready(function () {
	"use strict";

	overlayMenu();
	darkMode();
	activePage();
	nextButton();
});

/**************
             == FUNCTION ==
            **************/
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

// ------ Active Page ------ //
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
						displayHome();
						animate();
						$(`#${prev}`).detach();
						break;

					case "about":
						displayAbout();
						animate();
						$(`#${prev}`).detach();
						break;

					case "skill":
						displaySkill();
						animate();
						percentBar();
						$(`#${prev}`).detach();
						break;

					case "portofolio":
						displayPortofolio();
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

// --- Animate Function --- //

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

		$(this).find(".skill-bar-percent").text(percent);

		$(this).find(".skill-bar").css({
			width: percent,
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
				setTimeout(function () {
					displayAbout();
					setTimeout(() => {
						$menu.removeClass("animate");
						$(`#${page}`).detach();
					}, 300);
				}, 800);
				break;

			case "about":
				$menu.addClass("animate");
				setTimeout(function () {
					displaySkill();
					percentBar();
					$menu.removeClass("animate");
					$(`#${page}`).detach();
				}, 600);
				break;

			case "skill":
				$menu.addClass("animate");
				setTimeout(function () {
					displayPortofolio();
					setTimeout(() => {
						$menu.removeClass("animate");
						$(`#${page}`).detach();
					}, 100);
				}, 1500);
				break;

			case "portofolio":
				$menu.addClass("animate");
				setTimeout(function () {
					displayFooter();
					copyright();
					$menu.removeClass("animate");
					$(`#${page}`).detach();
				}, 600);
				break;

			default:
				break;
		}
	});
}

function movingPage(page) {}

// --- DISPLAYING FUNCTION --- //

function displayHome() {
	"use strict";

	$menu.append(
		`
        <div id="home" class="page" page="home">
            <div class="mainpage" id="mainpage">
                <div class="content">
                    <div id="text-mainpage">
                        <div class="text-box">
                            Hello, i'm Komang Arya
                            <h3>a web developer</h3>
                        </div>
                    </div>
                    <div class="media">
                        <ul>
                            <li>
                                <a href="https://twitter.com/KomangKsatria" target="_blank"
                                    ><ion-icon name="logo-twitter"></ion-icon
                                ></a>
                            </li>
                            <li>
                                <a href="https://web.facebook.com/komang.ksatria.9/" target="_blank"
                                    ><ion-icon name="logo-facebook"></ion-icon
                                ></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/mangarya.w/" target="_blank" 
                                    ><ion-icon name="logo-instagram"></ion-icon
                                ></a>
                            </li>
                            <li>
                                <a href="https://github.com/IkanPakUs" target="_blank"
                                    ><ion-icon name="logo-github"></ion-icon
                                ></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`
	);
}

function displayAbout() {
	"use strict";

	$menu.append(
		`
        <div id="about" class="page" page="about">
            <div class="desc">
                <p>
                    Hello everyone, im Komang Arya <br />im a web developer based on
                    Indonesia, Bali. I like programming since im in senior high school,
                    cause i think its fun to solve the problem. Now im student in STIKOM
                    Bali<br />
                    (Institute of Technology)
                </p>
            </div>
        </div>`
	);
}

function displaySkill() {
	"use strict";

	$menu.append(
		`
        <div id="skill" class="page" page="skill">
            <div class="my-skill">
                <div class="row justify-content-end">
                    <div class="col-8 skill-content">
                        <div class="timeline ml-5">
                            <h5>MY JOURNEY</h5>
                            <ul>
                                <li>
                                    <div class="timeline-name">
                                        <h4>SMKN 1 Denpasar</h4>
                                        <p>majoring in computer and networking</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="timeline-name">
                                        <h4>ITB Stikom Bali</h4>
                                        <p>majoring in information systems</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-4 skill-content">
                        <div class="my-skill-bar" percent="80%">
                            <div class="skill-bar-name"><p>HTML</p></div>
                            <div class="skill-bar"></div>
                            <div class="skill-bar-percent"></div>
                        </div>
                        <div class="my-skill-bar" percent="75%">
                            <div class="skill-bar-name"><p>CSS</p></div>
                            <div class="skill-bar"></div>
                            <div class="skill-bar-percent"></div>
                        </div>
                        <div class="my-skill-bar" percent="65%">
                            <div class="skill-bar-name"><p>JAVASCRIPT</p></div>
                            <div class="skill-bar"></div>
                            <div class="skill-bar-percent"></div>
                        </div>
                        <div class="my-skill-bar" percent="40%">
                            <div class="skill-bar-name"><p>PHP</p></div>
                            <div class="skill-bar"></div>
                            <div class="skill-bar-percent"></div>
                        </div>
                        <div class="my-skill-bar" percent="60%">
                            <div class="skill-bar-name"><p>BOOTSTRAP</p></div>
                            <div class="skill-bar"></div>
                            <div class="skill-bar-percent"></div>
                        </div>
                        <div class="my-skill-bar" percent="35%">
                            <div class="skill-bar-name"><p>LARAVEL</p></div>
                            <div class="skill-bar"></div>
                            <div class="skill-bar-percent"></div>
                        </div>
                        <div class="my-skill-bar" percent="50%">
                            <div class="skill-bar-name"><p>JQUERY</p></div>
                            <div class="skill-bar"></div>
                            <div class="skill-bar-percent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
	);
}

function displayPortofolio() {
	"use strict";

	$menu.append(
		`
       <div id="portofolio" class="page" page="portofolio">
			<div id="portofolio-content">
				<div id="text-content">
					<h1>WHAT <span>I'VE</span><br />BEEN <span>MAKE</span></h1>
				</div>
				<div id="img-content">
					<div id="content-warp">
						<div class="img-content">
							<a
								href="https://github.com/IkanPakUs/E-commers-with-laravel-7"
								class="img-warp"
							>
								<img
									src="src/img/e-commerce.PNG"
									alt="e-commerce-page"
									class="portofolio-img"
								/>
								<div class="image-text">
									<p class="date">08-11-2020</p>
									<p class="img-name">E-commerces</p>
								</div>
							</a>
						</div>
						<div class="img-content">
							<a href="https://github.com/IkanPakUs/CLOCK" class="img-warp">
								<img
									src="src/img/clock-page.PNG"
									alt="clock-page"
									class="portofolio-img"
								/>
								<div class="image-text">
									<p class="date">24-12-2020</p>
									<p class="img-name">Clock Page</p>
								</div>
							</a>
						</div>
						<div class="img-content">
							<a
								href="https://github.com/IkanPakUs/Slide-login-page"
								class="img-warp"
							>
								<img
									src="src/img/slide-login-page.PNG"
									alt="slide-login-page"
									class="portofolio-img"
								/>
								<div class="image-text">
									<p class="date">09-02-2021</p>
									<p class="img-name">Slide Login Page</p>
								</div>
							</a>
						</div>
						<div class="img-content">
							<a
								href="https://github.com/IkanPakUs/Movies-SPA"
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
					</div>
				</div>
			</div>
		</div>`
	);
}

function displayFooter() {
	"use strict";

	$menu.append(
		`
        <div id="footer" class="d-flex align-items-center justify-content-around page" page="footer">
            <div class="logo col-12 footer-content">
                <h3>mang arya</h3>
                <div class="footer-info">
                    <ul>
                        <li>Mail : Komanggede86@gmail.com</li>
                        <li>Phone : +62 896 5672 0690</li>
                    </ul>
                </div>
                <div class="information">
                    <a href="https://twitter.com/KomangKsatria" target="_blank"
                        ><ion-icon name="logo-twitter"></ion-icon
                    ></a>
                    <a href="https://web.facebook.com/komang.ksatria.9/" target="_blank"
                        ><ion-icon name="logo-facebook"></ion-icon
                    ></a>
                    <a href="https://www.instagram.com/mangarya.w/" target="_blank"
                        ><ion-icon name="logo-instagram"></ion-icon
                    ></a>
                    <a href="https://github.com/IkanPakUs" target="_blank"
                        ><ion-icon name="logo-github"></ion-icon
                    ></a>
                </div>
                <div class="copyright"></div>
            </div>
        </div>`
	);
}

// ------ COPYRIGHT ------ //
function copyright() {
	let year = new Date();
	$(".copyright").html(`&#169 Copyright IkanPakUs - ${year.getFullYear()}`);
}
