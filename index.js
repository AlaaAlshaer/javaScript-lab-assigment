const data = '[\
	{\
		"id": "0001",\
		"type": "donut",\
		"name": "Cake",\
		"ppu":0.78,\
		"batters":\
			{\
				"batter":\
					[\
						{ "id": "1001", "type": "Regular" },\
						{ "id": "1002", "type": "Chocolate" },\
						{ "id": "1003", "type": "Blueberry" },\
						{ "id": "1004", "type": "Devil\'s Food" }\
					]\
			},\
		"topping":\
			[\
				{ "id": "5001", "type": "None" },\
				{ "id": "5002", "type": "Glazed" },\
				{ "id": "5005", "type": "Sugar" },\
				{ "id": "5007", "type": "Powdered Sugar" },\
				{ "id": "5006", "type": "Chocolate with Sprinkles" },\
				{ "id": "5003", "type": "Chocolate" },\
				{ "id": "5004", "type": "Maple" }\
			]\
	},\
	{\
		"id": "0002",\
		"type": "donut",\
		"name": "Raised",\
		"ppu": 0.55,\
		"batters":\
			{\
				"batter":\
					[\
						{ "id": "1001", "type": "Regular" }\
					]\
			},\
		"topping":\
			[\
				{ "id": "5001", "type": "None" },\
				{ "id": "5002", "type": "Glazed" },\
				{ "id": "5005", "type": "Sugar" },\
				{ "id": "5003", "type": "Chocolate" },\
				{ "id": "5004", "type": "Maple" }\
			]\
	},\
	{\
		"id": "0003",\
		"type": "donut",\
		"name": "Old Fashioned",\
		"ppu":0.26,\
		"batters":\
			{\
				"batter":\
					[\
						{ "id": "1001", "type": "Regular" },\
						{ "id": "1002", "type": "Chocolate" }\
					]\
			},\
		"topping":\
			[\
				{ "id": "5001", "type": "None" },\
				{ "id": "5002", "type": "Glazed" },\
				{ "id": "5003", "type": "Chocolate" },\
				{ "id": "5004", "type": "Maple" }\
			]\
	}\
]';
var candy = JSON.parse(data);
var index = 0;
var sum = 0;
console.log("All topping types: ");
candy.forEach(paresTopping);
function paresTopping(candy){
    index = 0;
    var toppings = candy.topping;
    sum += candy.ppu;
    console.log("* "+candy.name + " topping:");
    toppings.forEach(Topping);
    console.log("-----------------");
}
function Topping(topping){
    console.log(index++ +" "+ topping.type);
}

console.log("All batter types: ")
candy.forEach(paresBatters);
function paresBatters(candy){
    index = 0;
    var batters = candy.batters;
    console.log("* "+candy.name + " batter:");
    
    batters.batter.forEach(Batter);
    console.log("-----------------");
}
function Batter(batter){
    console.log(index++ +" "+ batter.type);
}

console.log("Ppu average = "+sum / candy.length);
console.log("Ppu sum = "+sum);

console.log("List of all mentioned ID's: ")
candy.forEach(paresID);
function paresID(candy){
    console.log(candy.id);
    var batters = candy.batters;
    batters.batter.forEach(Batter1);
    var toppings = candy.topping;
    toppings.forEach(Topping1);
}
function Batter1(batter){
    console.log(batter.id);
}
function Topping1(topping){
    console.log(topping.id);
}
