	    //----- SHOOT DUCKS PER CLICK -----//
	   	var moveDucks = function(){
	   		var leftDuckPosX;
	   		var leftDuckPosY;
	   		var rightDuckPosX;
	   		var rightDuckPosY;

	   		//-- KILL COUNT --//
		   		counter ++;
		   		killStats.innerHTML = "PARTICIPATION MARKS: " + counter;

		   			//–– Ducks' Horizontal Movement ––//
//		   			duckLeft.attr({"x" : duckLeft.x++});

   			//–– Movement Upon Shooting the Ducks --//
   			leftDuckPosX = randInt(0,6);
   			leftDuckPosY = randInt(0,4);

   			rightDuckPosX = randInt(0,6);
   			rightDuckPosY = randInt(0,4);

   			duckLeft.attr({
   				"x" : leftDuckPosX*100,
   				"y" : leftDuckPosY*100,
   			});

   			duckRight.attr({
   				"x" : rightDuckPosX*100,
   				"y" : rightDuckPosY*100,
   			});
		   		
	   	};


	   		//----- END GAME -----//

		   		if(totaltime == 20/difficultyLevel){ // FINISH.
		   			clearInterval(timer);
		   			endMusic.play();
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

	   	duckLeft.node.addEventListener('click', moveDucks);
	   	duckRight.node.addEventListener('click', moveDucks);






	   			var resizing = function(x,y,w,h){
			paper.setViewBox(x,y,w,h,true);
			};

		var 

				 canvas.addEventListener('onload', () => {
			if (screenfull.enabled) {
				screenfull.request();
			} else {
				// Ignore or do something else
			}
		});

				 		    var tables = [];
			    for (i = 0; i < 10; i++){
			    	if(i<5){
			    		var tableY = pHeight*0.63;
			    		tables[i] = paper.image("resources/table.png",pWidth*(0.06327034518+(i*0.1798330814)),tableY,190*wConvert,166*hConvert);
			    	}
			    	else{
			    		var tableY = pHeight*0.97;
			    		tables[i] = paper.image("resources/table.png",pWidth*(0.06327034518+((i-5)*0.1798330814)),tableY,190*wConvert,166*hConvert);
			    	} };
		    var players = [];
			    for (i = 0; i < 10; i++){
			    	if(i<5){
			    		var playerY = pHeight*0.55;
			    		players[i] = paper.image("resources/npc.png",pWidth*(0.062+(i*0.1798330814)),playerY,189*wConvert,262*hConvert);
			    	}
			    	if(i==2){
			    		var playerY = pHeight*0.55;
			    		players[i] = paper.image("resources/player1.png",pWidth*(0.062+(i*0.1798330814)),playerY,188*wConvert,260*hConvert);
			    	}		    	
			    	else{
			    		var playerY = pHeight*0.89;
			    		players[i] = paper.image("resources/npc.png",pWidth*(0.062+((i-5)*0.1798330814)),playerY,189*wConvert,262*hConvert);
			    	} };
		    var chairs = [];
			    for (i = 0; i < 10; i++){
			    	if(i<5){
			    		var chairY = pHeight*0.73;
			    		chairs[i] = paper.image("resources/chair.png",pWidth*(0.085+(i*0.1798330814)),chairY,106*wConvert,146*hConvert);
			    	}
			    	else{
			    		var tableY = pHeight;
			    		chairs[i] = paper.image("resources/chair.png",pWidth*(0.085+((i-5)*0.1798330814)),chairY,106*wConvert,146*hConvert);
			    	} };


			    			//-- HAND MOUSE --//
	 	var hand = paper.image("resources/hand.png", -120, -120, 50,50); //-- HAND CURSOR --//



				 	/*	if(attentionScore >= 100){
				 			attentionBlinker = true; setInterval(attentionBlink,700);
				 		};*/
			 	/*	console.log("waveRotate is " + waveRotate(playerPosX,ev.offsetX,playerPosY,ev.offsetY));
			 		hand.rotate(waveRotate(playerPosX,ev.offsetX,playerPosY,ev.offsetY),ev.offsetX-30,ev.offsetY-15); */

			// 		hand.rotate(0,ev.offsetX-12,ev.offsetY-12);



//			OLD TIMER //

		 	//-- GAME TIMER --//
			var timer = function(){
				console.log("Timer has started.");
		   			secondsPassed++;
					globalTime = 60 - secondsPassed;
		   			console.log("Time left: "+ globalTime + "s");
		   			timeStats.innerHTML = "TIME LEFT: " + globalTime + "s";
		   			if(gamePart == 1|3 || globalTime <= 0){
		   				clearInterval(timer)
		   			};
		   	};


		   				 		var blinkInterval = setInterval(blink,3000);
