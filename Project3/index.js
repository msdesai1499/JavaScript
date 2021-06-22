console.log('This is index js');


//Initialize the News api parameters
let source = 'bbc-news';
let apikey = '22c0338778b34e0f93387d891f169319';


//Grab the news container
newsAccordion = document.getElementById('accordionExample');

//Create the ajax get request

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);
xhr.getAllResponseHeaders('Content-type', 'application-json');

//What to do when request is ready

xhr.onload = function () {
	if (this.status === 200) {
		let json = JSON.parse(this.responseText);
		let articles = json.articles;
		console.log(articles);

		let newshtml = "";

		articles.forEach(function (element, index) {




			let news = `
		<div class="accordion-item" id="news-accordion">
			<h2 class="accordion-header" id="heading${index}">
			<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
			${element.title}
			</button>
			</h2>
			<div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" >
				<div class="accordion-body">
					${element.content} <a href=${element.url} target="_blank">read more</a>
				</div>
			</div>
		</div>`;

			newshtml += news;

		});
		newsAccordion.innerHTML = newshtml;
	}
	else {
		console.log('Some error occured');
	}
}

xhr.send();

