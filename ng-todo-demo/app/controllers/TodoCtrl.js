app.controller("TodoCtrl", function($scope){
	$scope.welcome = "hello";
	$scope.showListView = true;
	$scope.newTask = {};	

	$scope.items = [
	{
		id:0,
		task: "mow the lawn",
		isCompleted: true,
		dueDate: "12/5/17",
		assignedTo: "greg",
		location: "Zoe's house",
		urgency: "low",
		dependencies: "sunshine clippers, hat, water, headphones"
	},
	{
		id:1,
		task: "grade quizzes",
		isCompleted: true,
		dueDate: "12/5/15",
		assignedTo: "Joe",
		location: "NSS",
		urgency: "high",
		dependencies: ["wifi, tissues, vodka"]
	},
	{
		id:2,
		task: "take a nap",
		isCompleted: false,
		dueDate: "12/5/15",
		assignedTo: "Zoe",
		location: "Hammock",
		urgency: "medium",
		dependencies: ["music, V8 Splash, computer"]
	}
	];

	$scope.newItem = function() {
		console.log("you clicked newItem");
		$scope.showListView = false;
	};
	$scope.allItem = function(){
		console.log("you clicked allItem");
		$scope.showListView = true; 
	};
	$scope.addNewItem = function() {
		$scope.newTask.isCompleted = false;
		$scope.newTask.id = $scope.items.length;
		console.log("you added a new item", $scope.newTask);
		$scope.items.push($scope.newTask);
		$scope.newTask = "";
	};









});