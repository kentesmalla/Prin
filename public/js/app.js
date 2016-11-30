"use strict";


class App{
	constructor(){
		this.media = [
			{
				"title" : "Level Up",
				"artist" :"DeadSlug",
				"image" : "http://img06.deviantart.net/6112/i/2015/011/8/0/level_up_by_deadslug-d8djll7.jpg",
				"description": "asdasd",
				"genre": "comics",
				"rating":"5"
			},
			{
				"title" : "Let's go to work",
				"artist": "DeadSlug",
				"image" : "http://pre05.deviantart.net/7436/th/pre/i/2013/238/3/f/let_s_go_to_work_by_deadslug-d6jrtjw.jpg",
				"description": "",
				"genre": "",
				"rating":""
			},
			{
				"title":"Bang Bang Bang Bang!!",
				"artist":"thedurrrrian",
				"image":"http://pre14.deviantart.net/08be/th/pre/i/2016/218/5/b/warframe___bang_bang_bang_bang___by_thedurrrrian-dacthgz.jpg",
				"description":"",
				"genre":"",
				"rating":"",
			},
			{
				"title":"The Roots of Magic",
				"artist":"thedurrrrian",
				"image":"http://pre15.deviantart.net/b2ab/th/pre/i/2015/321/1/9/the_roots_of_magic_by_thedurrrrian-d9h2r13.jpg",
				"description":"",
				"genre":"",
				"rating":"",
			}
			
		];
	}
	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}
}

class Component extends App{
	constructor(){

		super();
	}

	homePage(){
		let html = `

		<div id="navigation ">
			<div class="navbar-fixed ">
				<nav class ="z-depth-0 N/A transparent">
					<div class="nav-wrapper">
						<a href="#!" class="brand-logo center ">Logo</a>
						<ul class="right hide-on-med-and-down">
							<li><a href="#">Home</a></li>
							<li><a href="#">Prints</a></li>
							<li><a href="#">About</a></li>
						</ul>
					</div>
				</nav>
			</div>
		</div>




		<div id="content1">
			<div class="container">
				<div id="title"></div>
				<div id="feature">
					<div id="front">	
						<div id="butt">
							<a class="waves-effect waves-light btn" href="#feature2">start</a>
						</div>			

					</div>


				</div>
				<div id="feature2">
					<div id="hottest">
						<blockquote>
							<h4>BEST PRINTS </h4>
						</blockquote>
						<div id="imagesfronthot">

						`;

						for(let x=0;x<this.media.length;x++){
							html+=`

							<div class="carousel carousel-slider">
								<a class="carousel-item" href="#one!"><img src="${this.media[x].image}"></a>
								<a class="carousel-item" href="#two!"><img src="${this.media[++x].image}"></a>
								<a class="carousel-item" href="#three!"><img src="${this.media[++x].image}"></a>
								<a class="carousel-item" href="#four!"><img src="${this.media[++x].image}"></a>
							</div>

							`;
						}


						html +=`
							
						</div>

						</div>
					</div>
					<div ="recent">
					</div>
				</div>


			</div>
		</div>




		`;
		this.render(`${html}`,document.getElementById("app"));
	}
}

let component = new Component();
component.homePage();
