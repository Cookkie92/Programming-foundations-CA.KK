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
//failed codes



//var filtered = games.filter(function (el){
	//return el != null;
//});


//function removeNull(games){
	//return games.filter(x => x !== null);
//}
//removeNull(games);


//var gamesContainer = document.querySelector("#game");
//gamesContainer.innerhtml = games;
//console.log("gamesContainer", gamesContainer.innerHTML);





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
whatIDontLike("ferret");





//failed codes
//if(horses === String){
//	console.log( "I dont like" + horses)
//}
//else {
//	console.log("Please send in a string")
//}
