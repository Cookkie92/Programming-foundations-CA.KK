//Javascript CA1


//Question 1


var outOfStock = true;

if(outOfStock === true){
    //console.log("Out of stock");
}
else{
    //console.log("In stock");
}


//Question 2


for (var i = 15; i <=25; i++){
    if(i === 17 || i === 20 ){ 
        //console.log(i);   
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

for(var i = 0; i < games.length; i++){
    if(games[i].rating <3.5){
        console.log(games[i].title)
        console.log(games[i].rating)
    }
}

//document.getElementById("games").value = title + rating;

//console.log()

















//Question 4
