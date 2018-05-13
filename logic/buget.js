//console.log("this is working")
//$("#dropdown").on("click").dropdown('toggle').dropdown()
$("#test").on("click", function(){
		console.log("this works")
})

$("#dropdown").on('show.bs.dropdown', function () {
	alert("hi!")
})