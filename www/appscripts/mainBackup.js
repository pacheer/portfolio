require(
    [],
    function () {            
        console.log("You might be dead inside by the end of this mod, but yo i'm alive!");

/*        //----- FULLSCREEN -----//

		console.log(screen.availWidth);
		console.log(screen.availHeight);
		console.log(screen.availWidth + " / " + screen.availHeight*9/16);

        var fullscreenFunction = function(){

	        var fullscreen = document.getElementById("fullscreen");
	        document.getElementById("okBtn").addEventListener('click',()=>{
	        		window.resizeTo(screen.availWidth,screen.availWidth/16*9);
	                fullscreen.style.display = "none";
	                paper.setSize(screen.availWidth,screen.availHeight);
	        });
	        document.getElementById("noBtn").addEventListener('click',()=>{
	                fullscreen.style.display = "none"
	        });
	    };

    document.onload = fullscreenFunction();
*/
		//----- GLOBAL VARIABLES -----//
			var w = window.innerWidth, h = window.innerHeight;
			var wConvert = w / 1920, hConvert = h / 1080; // console.log("window width and height: " + w+", "+h);

		//////////////////////////////////
		//								//
		//------ GLOBAL FUNCTIONS ------//
			//-- RANDOM FUNCTION --//
	    	var randInt = function(m, n){
	    		var range = n-m;
	    		var frand = Math.random()*range;
	    		return m+Math.floor(frand);
		    };


		/*

		              .-'';'-.
		            ,'   <_,-.`.
		           /)   ,--,_>\_\
		          |'   (      \_ |
		          |_    `-.    / |
		           \`-.   ;  _(`/
		            `.(    \/ ,' 
		              `-....-'
		*/
		///////////////////////////////////////////
		///								  		///
		///			GAME GLOBAL VARIABLES		///
		///										///
		///////////////////////////////////////////

			var name = ""; // Player Name
			var globalScore, instructionStep = 0, secondsPassed = 0, globalTime = 30 - secondsPassed, gamePart = 0, handRaise = false, classTime = 60, initialHand = 0, attentionScore = 0, instructionComplete = false, gottenAttention = false, blinkCount = 0, blinkState = false, participationString = "", gameInProgress = false; playerName = "", newGame = false;
			var gameStats = document.getElementById("gameStats");	// Game stats;
			var timeStats = document.getElementById("timeStats"); 	// Time left, displayed
			var partiStats = document.getElementById("partiStats"); // Participation points, displayed
			var nextButton = document.getElementById("nextButton"); // Instructions button, hidden
			var instructions = document.getElementById("instructions");	// Where the instructions are actually laid out
		//	var participationBox = document.getElementById("participationBox"); // Input Participation Text and Button
		//		participationBox.style.display = "none"; // Hide the box
			var messageBox = document.getElementById("messageBox"); // Input Participation Text
				messageBox.style.display = "none";
			var submitBtn = document.getElementById("submitBtn"); // Input Button
				submitBtn.style.display ="none";
			var timer4display = document.getElementById("timer4display"); // Timer 4
				timer4display.style.display = "none";
			var highscore = [];

			/*
			       ,
			        |\        __
			        | |      |--|             __
			        |/       |  |            |~'
			       /|_      () ()            |
			      //| \             |\      ()
			     | \|_ |            | \
			  jgs \_|_/            ()  |
			        |                  |
			       @'                 ()

			*/

			///////////////////////////////
			//							 //
	        //------- MUSIC FILES -------//

			    // Background music from: http://www.orangefreesounds.com/8-bit-music-loop/
		        var startMusic = new Audio("resources/start.wav");
		        var bgMusic = new Audio("resources/8-bit-music-loop.mp3");
		        var instructSound = new Audio("resources/instructionbutton.wav");
		        	instructSound.volume = 0.2;
		 //       var bgMusic1 = new Audio("resources/8-bit-music-loop.mp3");
		 //       var endMusic = new Audio("resources/end.wav");

	        //----- END MUSIC FILES-----//
			//							//
			//////////////////////////////

		/*      //----- BACKGROUND MUSIC PLAYER -----//
			        var bgMusicAlbum = [bgMusic,bgMusic1,bgMusic2];
			        var bgMusicPlayer = function(music){
			        	bgMusicAlbum[music].currentTime = 0;
			        	bgMusicAlbum[music].play();
			        	bgMusicAlbum[music].loop = true;
			        };
		      	//----- END MUSIC PLAYERS -----//
			        window.addEventListener("load", bgMusicPlayer()); */


		/*
		███████████░░░
		█░░░░░░░░░██░░
		█░░░░░░░░░███░
		█░░░░░░░░░░░░█
		█░░░░░░░░░░░░█
		█░░░░░░░░░░░░█
		█░░░░░░░░░░░░█
		█░░░░░░░░░░░░█
		█░░░░░░░░░░░░█
		██████████████
		 */

		///////////////////////////////
		///							///
        ///		 RAPHAEL PAPER 		///
        ///							///
        ///////////////////////////////

	        var paper = new Raphael(document.getElementById("gameCanvas")), pWidth = paper.width, pHeight = paper.height, playerPosX = pWidth*(0.062+(2*0.1798330814)), playerPosY = pHeight*0.55;
		    //-- IMAGE ASSETS: TABLES, CHAIRS, NPCS, PLAYER, PROF --//
			var paperBG = paper.image("resources/background.png",0,0,pWidth,pHeight);
		    var prof = paper.image("resources/proflonce.png",pWidth*0.65,pHeight*0.07,196*wConvert,383*hConvert);
		    var teacherTable = paper.image("resources/teachertable.png",pWidth*0.79,pHeight*0.35,396*wConvert,166*hConvert);
		    var tables = [], players = [], chairs = [];
		    var studentCount = 10;
		    i = 0;
			    while (i < studentCount){
			    	if(i<5){
			    		var tableY = pHeight*0.63, playerY = pHeight*0.55, chairY = pHeight*0.73; 
			    		tables[i] = paper.image("resources/table.png",pWidth*(0.06327034518+(i*0.1798330814)),tableY,190*wConvert,166*hConvert);
			    		players[i] = paper.image("resources/npc.png",pWidth*(0.062+(i*0.1798330814)),playerY,189*wConvert,262*hConvert);
			    		chairs[i] = paper.image("resources/chair.png",pWidth*(0.085+(i*0.1798330814)),chairY,106*wConvert,146*hConvert);
			    	}
			    	if(i==2){
			    		players[i] = paper.image("resources/player1.png",playerPosX,playerPosY,188*wConvert,260*hConvert);
			    	//	console.log("playerPosX: "+playerPosX +", playerPosY: "+playerPosY);
			    	}		    	
			    	else{
			    		var tableY = pHeight*0.97, playerY = pHeight*0.89, tableY = pHeight;
			    		tables[i] = paper.image("resources/table.png",pWidth*(0.06327034518+((i-5)*0.1798330814)),tableY,190*wConvert,166*hConvert);			    		
			    		players[i] = paper.image("resources/npc.png",pWidth*(0.062+((i-5)*0.1798330814)),playerY,189*wConvert,262*hConvert);
			    		chairs[i] = paper.image("resources/chair.png",pWidth*(0.085+((i-5)*0.1798330814)),chairY,106*wConvert,146*hConvert);
			    	}
			    	i++;
			    };


					/*
					┏┓
					┃┃
					┃┃
					┗┛
					┏┓
					┗┛
					*/

	///////////////////////////////////
	///								///
	///			ATTENTION BAR 		///
	///								///
	///////////////////////////////////

	//	// DRAW THE ATTENTION BAR
			var attentionBar = paper.rect(playerPosX+212*wConvert+5,playerPosY-15,30*wConvert,100*hConvert).attr({"stroke-width":3,"fill":"black","opacity":0.6});
			var attentionBarFill = paper.rect(playerPosX+212*wConvert+5,playerPosY-15,30*wConvert,100*hConvert).attr({"stroke-width":0,"fill":"red","opacity":0.9});
				attentionBarFill.rotate(180);
			var attentionText = paper.text(playerPosX+222*wConvert+5,playerPosY-25,"ATTENTION").attr({"color":"black","font-size":"8px"});

	//	// HIDE THE ATTENTION BARS
			attentionBar.hide();
			attentionBarFill.hide();
			attentionText.hide();			

	//	//	ATTENTION BAR BLINK FUNCTION
	/*		var blinkCount = 0;
			var attentionBlink = function(){ //console.log("attentionBlink is running.");
				if(blinkCount == 10 && attentionScore == 100){
					clearInterval(attentionBlink);
					blinkCount = 0;	attentionScore = 0;
					gottenAttention = false; console.log("gottenAttention is now " + gottenAttention + ". Attention Bar will stop blinking.");
				}
				else{
					blinkCount++; // console.log("Blink: " + blinkCount);
					if(blinkCount % 2 == 0)	{attentionText.attr({'fill':'rgb(168, 45, 45)','font-size':'8px'})}
					else 					{attentionText.attr({'fill':'rgb(244, 66, 66)','font-size':'9px'})}
				};
			};*/

								/*	//	// ATTENTION BAR FULL
										var gottenAttentionFunction = function(){
											if(gottenAttention == true){
												 	setInterval(attentionBlink,300);
													setTimeout(function(){attentionScore = 0},3000);
											};
										}; */

        ///		 FADE IN/OUT OF BLACK 		///

        var black = paper.rect(0,0,pWidth,pHeight).attr({'fill':'black','opacity':0.9});
        var fadeOutBlack = function(){
        	black.attr({'fill':'none'});
        };
        var fadeInBlack = function(){
        	black.attr({'fill':'black'});
        };


		///////////////////////////////
		///						  	///
        ///		RAPHAEL CANVAS 		///
        ///							///
        ///////////////////////////////

	 	var canvas = document.getElementById("gameCanvas");
	 	//-- TITLE TEXT -//
	 	var titleText = paper.text(pWidth/2,pHeight/2,'CLASS PARTICIPATION').attr({
	 		'fill' : 'white',
	 		'font-size': '32pt'});
	 	var subtitleText = paper.text(pWidth/2,pHeight/2+60,': THE GAME').attr({
	 		'fill' : 'white',
	 		'font-size': '22pt'});
	 	//–– START BUTTON AND TEXT --//
	 	var startButtonBackground = paper.rect(pWidth/2-130, pHeight/3+219, 260, 40,2).attr({
	 		'stroke' : 'grey',
	 		'stroke-dasharray' : "-",
	 		'stroke-width' : 2,
	 		'fill' : 'hsla(217,0%,40%,0.12)'});
	 	var startText = paper.text(pWidth/2,pHeight/3+240,'CLICK HERE TO START').attr({
	 		'fill' : 'white',
	 		'font-size': '12pt'});
	 	var startButton = paper.rect(pWidth/2-130, pHeight/3+219, 260, 40,2).attr({
	 		'stroke' : 'none',
	 		'fill' : 'hsla(217,0%,40%,0)'});

	 	///		SPEECH BUBBLE	///
		 	var participationDisplay = paper.text(playerPosX,playerPosY,participationString);
		 		participationDisplay.hide();

		///		HAND CURSOR		///

	 	var hand = paper.image("resources/hand.png", -120, -120, 25,25); //-- HAND CURSOR --//

	 	///		END CREDITS/HIGHSCORE		///

	 	var highscore = [];
	 	var highscoreDisplay = [];
	 	var creditsBG = paper.rect(pWidth/4,pHeight+100,pWidth/2,pHeight*.8).attr({'fill':'hsl(217,0,95)'});
		var credits = paper.text(pWidth/2,pHeight+100,highscoreDisplay).attr({'font-size':'8px', 'text-anchor': 'middle'});

		///////////////////////////////////////////
		///					  				    ///
	 	///			GAME GLOBAL FUNCTIONS		///
	 	///										///
	 	///////////////////////////////////////////


		 	//-- GAME TIMER --//
		 	var timerState = false;
		 	var timerFunction = setInterval(function(){
				if (timerState){
		   			secondsPassed++;
					globalTime = 30 - secondsPassed; console.log("Timer increased. globalTime is now " + globalTime +".");
		   			timeStats.innerHTML = "TIME: " + globalTime + "s";
		   			if(gameInProgress && globalTime <= 0){
		   				timerState = false; globalTime = 30; secondsPassed = 0; 
		   				gamePart6Start(); gameInProgress = false;
		   			};
		   		};
		 	},1000);

		 	//-- GAME PART 4 TIMER --//
		 	var timer4State = false;
		 	var seconds4passed = 0;
		 	var timer4 = 5;
		 	var timer4Function = setInterval(function(){
		 		if(timer4State){
		 			timer4 = 5 - seconds4passed; console.log("Player has "+ timer4 +" seconds left to participate.");
					timer4display.innerHTML =  "&bull; " + timer4 + "s &bull;";
		 			seconds4passed++;
		 			}
		 			if(timer4 <= 0){
		 				timer4State=false; seconds4passed = 0; timer4 = 5;
		 				// clearInterval(timer4Function); console.log("Clearedtimer4function interval");
		 				participationDisplaySet.remove();
		 				timer4display.style.display ="none";
		 				if(instructionComplete){gamePart2Start();}
		 				else{gamePart5Start();}
		 			};
		 	}, 1000);

		 	//-- GAME PART 5 TIMER --//
		 	var timer5State = false;
		 	var seconds5passed = 0;
		 	var timer5 = 3;
		 	var countdown = paper.text(-100,-100,"remove");
		 		countdown.attr({'fill' : 'white','font-size': '32pt'});
		 	var countdownSet = paper.set();
		 		countdownSet.push(countdown);

				var timer5callback = function(){
					if(seconds5passed == 3){
					//	clearInterval(timer5function);
						fadeOutBlack();
						gamePart2Start();
						countdownSet.remove();
						timer5State = false; seconds5passed = 0; timer5 = 3;
					messageBox.maxLength = '500'; newGame = false;
				 	timerState = true;
					}
					if(timer5State||newGame){
						countdownSet.remove();
						var countdown = paper.text(pWidth/2,pHeight/2,timer5);
							countdown.attr({'fill' : 'white','font-size': '32pt'});
						countdownSet.push(countdown);
						seconds5passed++;
						/// SOUND ///
						timer5 = 3 - seconds5passed; // console.log("Countdown "+ timer5 +" seconds left to game start.");
					}
				};

			var timer5function = setInterval(timer5callback,900);


		 	//-- GAME READY FUNCTION --//
		 	var ready = function(){
		 		console.log("Game is Ready.");
		 		startButtonBackground.show();
		 		nextButtonOff();
		 		startButton.show();
		 		startText.show();
			 	titleText.show();
		 	};
		 	//-- GAME PART 1 START FUNCTION --//
		 	var gamePart1Start = function(){
		 		console.log("gamePart1Start (Tutorial for Waving)");
		   		gamePart = 1;
		 		startButtonBackground.hide(); startButton.hide(); startText.hide(); titleText.hide(); subtitleText.hide(); // Hide the Titles and Button at Start
			 	fadeOutBlack();
		   		secondsPassed = 0; globalTime = 30;
			 	globalScore = 0; attentionScore = 0;
		 	};

		 	//-- GAME PART 2 START FUNCTION --//
		 	var gamePart2Start =function(){
		 		console.log("gamePart2Start (Waving for Attention)");
		 		gamePart = 2;
		 		if(instructionComplete==false){
					timeStats.style.display="none";
					partiStats.style.display="none";
					nextButtonOff();
		 		}
		 		if(newGame==true){
		 			globalScore=0;
		 			newGame=false;
		 		}
		 			gameInProgress = true;
				 	attentionScore = 0; // Reset the attentionScore for the attention bar.
					attentionBarFill.attr({'height':0});
					attentionText.attr({"fill":"black","font-size":"8px"});
					nextButtonOff(); // Hide nextButton
					instructions.style.display = "none"; // Clear the Instructions
					messageBox.style.display= "none"; submitBtn.style.display="none";
					timeStats.style.display="inline-block"; timeStats.innerHTML = "TIME: " + globalTime +"s"; // Set the timer and display it
					partiStats.style.display="inline-block"; partiStats.innerHTML = "PARTICIPATION MARKS: " + globalScore; // Reset Global Score and display it
					startMusic.play(); messageBox.maxLength = "500"; 
					creditsBG.attr({'y':pHeight+100}); credits.attr({'y':pHeight+100});
		 			messageBox.value = null;
		 	};

		 	//-- GAME PART 3 START FUNCTION --//
		 	var gamePart3Start = function(){
		 		gamePart = 3;
		 		console.log("gamePart3Start (Tutorial for Typing)");
					nextButtonOn();
					instructionStep++;
					instructions.style.display="inline-block"; instructions.innerHTML = instructionArray[instructionStep];
					timeStats.style.display = "none"; partiStats.style.display = "none";
		 	}

		 	//-- GAME PART 4 START FUNCTION --//
		 	var gamePart4Start = function (){
				console.log("gamePart4Start (Typing for Attention)");
				gamePart = 4;
				timer4State = true;
				nextButton.style.display = "none";
				submitBtn.style.display = "inline-block";
				messageBox.style.display = "inline-block";
				submitBtn.style.display = "inline-block"; 
				timer4display.innerHTML =  "• " + timer4 + "s •";
				partiStats.style.display="inline-block"; partiStats.innerHTML = "PARTICIPATION MARKS: " + globalScore;
				participationDisplay.show();
				messageBox.select();
				if(instructionComplete){
					timer4display.style.display="inline-block";
					timer4State = true; console.log("timer4State: "+timer4State);
					startMusic.play();
				}
		 	};

		 	//-- GAME PART 5 START FUNCTION --//
		 	var gamePart5Start= function(){
		 		gamePart = 5; console.log("gamePart5Start (Countdown to Game restart)");
		 		nextButtonOn();
		 		fadeInBlack();
			 		messageBox.style.display = 'none'; submitBtn.style.display = 'none';
			 		instructionStep++;
			 		instructions.style.display ='inline-block'; 
				 	instructions.innerHTML = instructionArray[instructionStep];
				 	globalScore = 0; globalTime = 30;
				 	partiStats.innerHTML = "PARTICIPATION MARKS: "+globalScore;
				 	timeStats.innerHTML = "TIME: 0s";
					timer4display.style.display = 'none';
		 	};

		 	//-- GAME PART 6 START FUNCTION --//
		 	var gamePart6Start= function(){
		 		gamePart = 6; console.log("gamePart6Start (Game end)")
		 		messageBox.style.display = 'none'; submitBtn.style.display = 'none';
		 		instructions.style.display ='inline-block'; nextButtonOn();
			 	instructions.innerHTML = instructionArray[instructionStep]; timer4State=false;  seconds4passed = 0; timer4 = 5;
			 	instructionArray[26] = "SYSTEM: You've bagged a total of "+ globalScore+" marks! Well done!";
		 	};

		 	//-- GAME PART 7 START FUNCTION --//
		 	var gamePart7Start= function(){
		 		gamePart = 7; console.log("gamePart7Start (Game end 2)")
		 		fadeInBlack();
			 	messageBox.style.display = 'none'; submitBtn.style.display = 'none'; 
					credits = paper.text(pWidth/2,pHeight+100,highscoreDisplay).attr({'font-size':'8px', 'text-anchor': 'middle'});
			 	creditsBG.animate({'x':pWidth/4,'y':50},2000,"<>");
			 	credits.animate({'x':pWidth/2,'y':80},2000,"<>");
		 	};

		 	var highscoreInclusion = function(){
		 			highscoreDisplay = ["HIGH HANDS LIST"," "];
		 			var highscoreNew = globalScore + " characters | " + messageBox.value;
		 			highscore.push(highscoreNew);
		 			highscore.sort(function(a,b){return a -b});
		 			highscoreDisplay=highscoreDisplay.concat(highscore);
		 			highscoreDisplay = highscoreDisplay.join("\n"); console.log(highscoreDisplay);
		 			console.log("New highscore added.");
		 	};

		 var instructionArray = [
	/*0*/		 "PROF: Good morning class. It's time for yet another exciting tutorial. Aren't you excited? I'm so excited.",
	/*1*/		 "PROF: Remember, every  tutorial is another chance for you to earn extra PARTICIPATION MARKS.",
	/*2*/		 "PROF: What are PARTICIPATION MARKS? Well, technically they're curricular points that are granted to students whenever they talk in class, ...",
	/*3*/		 "PROF: ... which in turn acts as some sort of blatant carrot on stick method of encouraging activity within a prescribed learning environment.",
	/*4*/		 "PROF: Some people say it's FREE MARKS and woohoo! Other think it's a farce born out of the ass of bureaucracy... ",
	/*5*/		 "PROF: But how would I know! And why should you care anyway, this is just a game, hahaha.",
	/*6*/		 "PROF: Anyway, because everyone here is a raging neoliberal, make sure you RAISE YOUR HAND high and WAVE them when you want to talk!",
	/*7*/		 "PROF: I mean, it should be pretty obvious to me who wants to talk, but this is an exaggerated parody, so play along!",
	/*8*/		 "SYSTEM: CLICK AND HOLD your mouse to raise your hand. Then MOVE your mouse from LEFT TO RIGHT to raise your ATTENTION bar.",
	/*9*/		 "SYSTEM: When your ATTENTION BAR is full, you'll get to PARTICIPATE!",
	/*10*/		 "SYSTEM: A tutorial only lasts for 30 SECONDS (in this game at least, don't get your hopes high).",
	/*11*/		 "SYSTEM: Participate enough, and you'll be happy with 10% of your class grade in the bag!",
	/*12*/		 "SYSTEM: Try it out first! (Wave your hand until ATTENTION is full)",
	/*13*/		 "TEACHER: ... Oh... oh would you look at that! An eager student! What exciting things do you have to verbally contribute to academia today?",
	/*14*/		 "SYSTEM: Now's your chance to PARTICIPATE!",
	/*15*/		 "SYSTEM: But what do you have to say?",
	/*16*/		 "SYSTEM: Type literally ANYTHING into this TEXT BOX and press the ENTER key to be a participative student!",
	/*17*/		 "SYSTEM: The more CHARACTERS you type, the more PARTICIPATION MARKS you earn!",
	/*18*/		 "SYSTEM: Know that you'll only have 5 seconds to say what you want! Time is money!",
	/*19*/		 "SYSTEM: Get ready to try it out...",
	/*20*/		 "SYSTEM: ... Now!",
	/*21*/		 "SYSTEM: Wow, that was such an insightful conversation!",
	/*22*/		 "SYSTEM: Now that you're all warmed up, you're set to attend class!",
	/*23*/		 "SYSTEM: Your 30-second class will soon begin! Get ready!",
	/*24*/		 "PROF: Well that's all the time we have today!",
	/*25*/		 "PROF: Be sure to turn up next time to see if you can kiss my ass bett-- uh, think of new things to say!",
	/*26*/		 "SYSTEM: You've bagged a total of "+ globalScore+" marks! Well done!",
	/*27*/		 "PROF: Anyway, what's your name again?",
	/*28*/		 "PROF: Right! We had such a great discussion that I must get to know you! This is not creepy.",
	/*29*/		 "PROF: Actually, "+messageBox.value+"I have a list full of people who talk so much, I've had to take note of them!",
	/*30*/		 "",
	/*31*/		 "SYSTEM: Would you like to play again?",
		 ];

		 console.log("instructionArray.length is "+ instructionArray.length);

		 //////////////////////////////////////////
		 ///									///
		 ///			NEXT > BUTTON 			///
		 ///									///
		 //////////////////////////////////////////

	 	//-- nextButton DIS/APPEAR --//
	 	var nextButtonOn = function(){
	 		nextButton.style.display = "inline-block";				
	 	};
	 	var nextButtonOff = function(){
	 		nextButton.style.display = "none";
	 	};

		 instructionStep = 0

			nextButton.addEventListener("click", function(ev){
				instructionStep++; instructSound.play();
			 	console.log("instructionStep is " + instructionStep);
							if (gamePart == 1 && instructionStep < 14) {
							 	instructions.innerHTML = instructionArray[instructionStep];
							}
							if (instructionStep == 8 || instructionStep == 11){
								attentionBar.show(); attentionText.show();
								attentionBarFill.show();
								attentionBarFill.attr({"height":0});
							}
							if (instructionStep == 9 && gamePart == 1){
								attentionBarFill.attr({"height":100*hConvert});
							}
							if (instructionStep == 12){
								gamePart2Start(); // GAME PART 2
								attentionBarFill.attr({"height":0});
							}
							if (gamePart == 3 && instructionStep < 16){
							 	instructions.innerHTML = instructionArray[instructionStep];
							}
							if (instructionStep == 16){
								instructions.style.display = "none";
							//	participationBox.style.display ="inline-block";
								messageBox.style.height ="80px";
								messageBox.style.display = "inline-block";
							}
							if (instructionStep >= 16 && instructionStep < 21){
								messageBox.value = instructionArray[instructionStep];
							}
							if (instructionStep == 18){
							 	timer4display.style.display ="inline-block";
							}
							if (gamePart == 3 && instructionStep == 20){
								gamePart4Start();
							}
							if (gamePart == 5 && instructionStep < 24){
							 	instructions.innerHTML = instructionArray[instructionStep];						
							}
							if (gamePart == 5 && instructionStep == 24){
								timer5State = true; newGame = true;
							 	instructions.style.display ="none"; nextButtonOff();
							 	instructionComplete = true;
							}
							if (gamePart == 6 && instructionStep < 30){
							 	instructions.innerHTML = instructionArray[instructionStep];
							}
							if (gamePart == 6 && instructionStep == 27){ console.log(globalScore)
								messageBox.rows = "1"; submitBtn.click(); messageBox.maxLength = "26";
							 	messageBox.style.display = 'inline-block'; messageBox.value = "<TYPE YOUR NAME>";
							}
							if (gamePart == 6 && instructionStep == 28){
								messageBox.style.display = 'none'; console.log(messageBox.value); 
								instructionArray[29] = "PROF: Actually, "+messageBox.value+". I have a list full of people who talk so much, I've had to take note of them!";
								highscoreInclusion();
							}
							if (gamePart == 6 && instructionStep == 30){
							 	gamePart7Start();
							}
							if (gamePart == 7 && instructionStep == 31){
							 	creditsBG.animate({'y':-pHeight},2000,"<>");
							 	credits.animate({'y':-pHeight-30},2000,"<>");
							 	instructions.style.display = 'inline-block';
							 	instructions.innerHTML = instructionArray[instructionStep];						
							}
							if (gamePart == 7 && instructionStep == 32){
								timer5State = true; instructions.style.display = 'none'; instructionStep=23; participationDisplaySet.remove();
								nextButton.style.display="none"; newGame = true; gamePart5Start(); instructions.style.display = "none";
								
								timer5State = true;
								nextButtonOff();
								timer4display.style.display = 'none';
							}
			});

		   ready(); console.log("instructionStep is " + instructionStep);


		    ///////////////////////////////////////////
		    ///										///
		 	///				START BUTTON 			///
		 	///										///
		 	///////////////////////////////////////////

		 	startButton.node.addEventListener("click", function(ev){
		 		startMusic.play();
		 		gamePart1Start(); // GAME PART 1 (TUTORIAL)
		 	//	console.log("clearing timeStats and partiStats");
				timeStats.style.display ='none'; partiStats.style.display = 'none';
				instructions.innerHTML = instructionArray[instructionStep];
		 		nextButtonOn();
		 	});


									 	// KIV COMPLICATED WAVING FUNCTION //
									 	/*
										 	// Cotangent Function
										 	function ctg(x) { return 1 / Math.tan(x); };

										 	// Function to calculate the rotational angle of the hand when it is waving
										 	var waveRotate = function(x1, x2, y1, y2){
										 		var distanceY = Math.abs(y2-y1), distanceX = Math.abs(x2-x1);
										 		console.log("distanceY:" + distanceY + ", distanceX: " + distanceX);
										 		return Math.abs(ctg(distanceY/distanceX));
										 	};
										*/

					/*
					   /
					 __|_
					|____|
					|    |
					|    |
					\____/
					*/

			////////////////////////////////////
			///						   		 ///
			/// 		MOUSE MOVEMENT		 ///
			///						  	     ///
			////////////////////////////////////

			///		MOUSEMOVE 	///

		 	canvas.addEventListener("mousemove",function(ev){
		 		if (gamePart > 0){
			 	//	console.log("hand is moving");
			 		hand.attr({"x":ev.offsetX-12,"y":ev.offsetY-12});
			 	};
			 	if (gamePart > 0 && handRaise){
			 	//	console.log("hand is raised and moving");
			 		hand.attr({"x":ev.offsetX-30,"y":ev.offsetY-30});
/*	ROTATION KIV	var adjacentTan = ev.offsetX - pWidth/2;
			 		var oppositeTan = ev.offsetY - pHeight/2;
			 		var calcRotate = function(opposite,adjacent){
				 		return 1/Math.tan(opposite/adjacent); 			 			
			 		};
			 		var angleTan = calcRotate(oppositeTan,adjacentTan);
			 		hand.attr({transform:"r"+angleTan});
*/
			 	};
			 	if (gamePart == 1 && handRaise /*&& gottenAttention == false*/ || gamePart == 2 && handRaise /*&& gottenAttention == false*/){
			 		attentionScore += Math.floor(Math.abs(ev.offsetX - initialHand)/100);
			 		initialHand = ev.offsetX;
					attentionBarFill.attr({"height":attentionScore*hConvert});
			 	//	console.log("attentionScore: "+ attentionScore);
			 	};
			 	if (gamePart == 1 && handRaise && attentionScore >= 100 /*&& gottenAttention == false*/){
			 		attentionScore = 100; /*gottenAttention = true*/;attentionText.attr({'fill':'rgb(168, 45, 45)','font-size':'9px'});
			 		blinkState = true;
			 		var blink = setTimeout(function(){
			 			if(blinkState){
				 			blinkCount++; /*gottenAttention = false;*/ console.log("blink()");
				 			attentionText.attr({'fill':'black','font-size':'8px'});
				 			if(blinkCount == 3){
				 				clearTimeout(blink);
				 				blinkState =false;
				 				blinkCount = 0;
				 				attentionScore = 0;
				 				attentionBarFill.attr({"height":0})
				 			}
				 		}
			 		},3000);
			 	//	setInterval(attentionBlink,300);
			 	};
			 	if (gamePart == 2 && attentionScore >= 100 /*&& gottenAttention == false*/){
			 		attentionScore = 100; attentionText.attr({'fill':'rgb(168, 45, 45)','font-size':'9px'})
				// 	setInterval(attentionBlink,300);
					if(instructionComplete){
						gamePart4Start();
					}
					else{
				 		gamePart3Start();						
					}
			 	};
		 	});

			///		MOUSEDOWN 	///

		 	canvas.addEventListener("mousedown",function(ev){
		 		if (gamePart > 0){
			 		handRaise = (handRaise==false)?true:false;
			 	//	console.log("handRaise is "+ handRaise);
			 		hand.animate({"width":60,"height":60,"x":ev.offsetX-30,"y":ev.offsetY-30}, 50, "<");
			 	};
		 	});

			///		MOUSEUP 	///

		 	canvas.addEventListener("mouseup",function(ev){
		 		if (gamePart > 0){
		 			handRaise = false;
			 	//	console.log("handRaise is "+ handRaise);
			 		hand.animate({"width":25,"height":25,"x":ev.offsetX-12,"y":ev.offsetY-12}, 50, "<");
			 	//	console.log("attentionScore is now: "+ attentionScore);
//			 		hand.animate({transform:"r"+0},100,"<>");
			 	};
		 	});

		 	var participationDisplaySet = paper.set();

		 	submitBtn.addEventListener("click", function(ev){
		 		if(messageBox.value){
					if (gamePart == 6 && instructionStep == 28){
						playerName = messageBox.value;
					}
					else{
				 		participationString += messageBox.value + " ";
				 		globalScore += messageBox.value.length;
				 		// globalScore++; // console.log("Submitted. globalScore is: " + globalScore + ". Participation : "+ participationString);
				 		partiStats.innerHTML = "PARTICIPATION MARKS: " + globalScore;
				 		var participationDisplay = paper.text(randInt(0,pWidth),randInt(0,pHeight),messageBox.value);
				 			participationDisplay.attr({
				 				"fill":'hsla('+randInt(0,255)+','+randInt(0,100)+','+randInt(40,100)+','+Math.random()*0.8+')',
				 				"font-size":randInt(0,20),
				 			});
				 			participationDisplaySet.push(
				 				participationDisplay);
				 		//	console.log(participationDisplaySet);
				 		messageBox.value = "";
				 		messageBox.select();
			 		};
		 		};
		 	});

		 	messageBox.addEventListener("keydown", function(ev){
		 			if(instructionComplete==false && instructionStep < 20){
		 				if(ev.keyCode === 13){
		 					nextButton.click();
		 				}
		 				else{
				 			ev.returnValue = false;
		 				};
		 			}
		 			if(instructionStep == 27 && ev.keyCode === 13){
		 				nextButton.click();
		 			}
	 				else{
		 				if(ev.keyCode === 13){
				 			ev.preventDefault();
				 			submitBtn.click();
				 			submitBtn.style.backgroundColor = "#3e8e41";
				 			submitBtn.style.boxShadow = "0 4px rgba(48, 48, 48,1)";
				 			submitBtn.style.transform = "translateY(4px)";
				 			return false;
				 		}
		 			}
		 	});

		 	messageBox.addEventListener("keyup", function(ev){
		 		if (ev.keyCode === 13){
		 			submitBtn.style.background = "none";
		 			submitBtn.style.boxShadow = "0 4px rgba(48, 48, 48,0.8)";
		 			submitBtn.style.transform = "translateY(-4px)";
		 			return false;
		 		}
		 	});


	} // End of Require
);