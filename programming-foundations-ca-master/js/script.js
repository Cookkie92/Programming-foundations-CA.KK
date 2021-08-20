//Javascript CA1


//Question 1


var outOfStock = true;

if(outOfStock === true){
    console.log("Out of stock");
}
else{
    console.log("In stock");
}


//Question 2


for (var i = 15; i <=25; i++){
    if(i === 17 || i === 20 ){ 
        console.log(i);   
    }
}






//Question 3



var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];
console.log(games);

// selecting class of the UL
var gamesContainer = document.querySelector(".games");


//making the loop
for(var i = 0; i < games.length; i++){
	//creating variable for array with loop
	var item = games[i];
	// creating if statement that pulls out games that are below 3.5 and also excluding games with null as value
    if(games[i].rating <3.5 && games[i].rating !==null){
        console.log(games[i].title,":",games[i].rating)
		//creating li items inside ul and adding game title and game rating of the games pulled from loop
		gamesContainer.innerHTML = gamesContainer.innerHTML + "<li>" + item.title + ":" + item.rating + "</li>";
		
    }
	
}

//Question 4
//declaring the argument, (checkType)

function whatIDontLike (checkType){
	if(typeof checkType === "string"){
	console.log("i dont like"+ " " + checkType);
}
	else{
	console.log("Please send in a string")
}

}
whatIDontLike("hotdogs");

//Question 5

function convertNum (oneArgue, twoArgue){

	oneArgue = Number(oneArgue);
	twoArgue = Number(twoArgue);

    if(isNaN(oneArgue) || isNaN(twoArgue)){
        return document.getElementById("subtraction").innerHTML = "Invalid argument(s)";
    }

    return document.getElementById("subtraction").innerHTML = oneArgue - twoArgue;
	 
}

convertNum("8", "4");


//Question 6

var updatePage = document.querySelector(".page");
var updateTitle = document.querySelector("title");
var bodyChange = document.querySelector("body");
var headline = document.querySelector("h1");
var ulStyle = document.querySelector("ul");

function pageUpdate(){
	updateTitle = document.title;
	document.title = "Updated title";
	document.body.style.background = "#FFFF00";
	headline.style.color = "green";
	headline.style.fontFamily = "impact";
	headline.innerHTML = "<a href=\"#\">" + headline.innerHTML + "</a>";
	ulStyle.style.listStyle = "none";
	ulStyle.style.padding ="0px";
}

console.log(headline)



updatePage.onclick = pageUpdate;


//Question 7

var bringPrice = document.querySelector(".price");

var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];
function addTotal() {
	var sum = 0;
	for(var i = 0; i < toys.length; i++){
	sum += Number (toys[i].price);
}
document.getElementById("total").innerHTML = sum;
return sum;
}



bringPrice.onclick = addTotal;

