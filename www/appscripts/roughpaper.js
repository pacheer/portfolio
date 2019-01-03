	    //---- BEGIN INTRODUCTION TO GAME ----//

	        window.alert("It's time to kill some birds! Is that OK?");
	        window.alert("Great!");
	        window.alert("You have to kill as many birds as you can within a certain time.");
	        window.alert("You're really OK with everything! I like it!");

	        var difficultyLevel = 0;

	        //- function prompt for difficulty selection -//
			var difficultySelection = function difficultySelection(){
			    var difficultyLevelPrompt = prompt("Do you want to make things\nEASY (20 seconds)\nor\nDIFFICULT? (10 seconds)\n(I'm CaSe SenSItive, by the way! Remember to SHOUT your answer!)");
			    if (difficultyLevelPrompt == "EASY") {
			    	difficultyLevel = 2;
			    }
			    if (difficultyLevelPrompt == "DIFFICULT") {
			    	difficultyLevel = 1;
			    }
			    if (difficultyLevelPrompt == null || difficultyLevelPrompt == ""){
					alert("Wait, you haven't answered the question!");
					difficultySelection();
			    }
			    while(difficultyLevel == 0){
			    	alert("Wait, you haven't answered the question!");
			    	difficultySelection();
			    }
			}

	        //- call the function for difficulty selection -//
			difficultySelection();

	        //- instructions after difficulty selection -//
				if(difficultyLevel==2){
				window.alert("Easy peasy, eh! That's OK.\nYour birds aren't flying that fast today. I'm sure you'll do fine.");
				}
				if(difficultyLevel==1){
					window.alert("Woooo! We have a challenger!\nDon't blink!");
				}
			window.alert("Your time starts when you press the START button!\nAll the best!");
	    
	    //---- END INTRODUCTION TO GAME ----//


	    	   		totaltime = (Date.now()-starttime)/1000
			 	console.log("START TIME " + starttime);
			 	console.log("TOTAL TIME " + totaltime);

	   		if(totaltime >= 30){ // This is where the game finishes.
	   			confirm("Wow! You shot " + counter + " birds in 30 seconds!");



	 	//-- RAPHAEL COUNTER AND TIMER TEXTS --//
//	 	var counterText = paper.text(10,pHeight-25,"KILLS: " + counter).attr({'fill' : 'red', 'font-size': '25pt','text-anchor': 'start'});
//	 	var totalTimeText = paper.text(pWidth-30,pHeight-25,0 + " seconds").attr({'fill' : 'black', 'font-size': '20pt','text-anchor': 'end'});


	   		//----- END GAME -----//

		   		if(totaltime == 5){ // FINISH.
		   			clearInterval(timer);
		   			confirm("Wow! You shot " + counter + " birds in 30 seconds!"); 

		   			duckLeft.attr({
		   				"x" : -100,
		   				"y" : -100,
		   			});	   			

		   			duckRight.attr({
		   				"x" : -100,
		   				"y" : -100,
		   			});

		   			ready();
		   		};