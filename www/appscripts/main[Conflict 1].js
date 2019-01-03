require(
    [],
    function () {            
        console.log("You might be dead inside by the end of this mod, but yo i'm alive!");

		//----- GLOBAL VARIABLES -----//
			var w = window.innerWidth, h = window.innerHeight;
			var wConvert = w / 1920, hConvert = h / 1080; console.log("window width and height: " + w+", "+h);

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
			var globalScore, storyScriptStage = 0, globalTimer = 0, globalTime = 60 - globalTimer, gamePart = 0, handRaise = false, classTime = 60, initialHand = 0, attentionScore = 0, tutorialComplete = false; gottenAttention = false;
			var gameStats = document.getElementById("gameStats");	// Game stats;
			var timeStats = document.getElementById("timeStats"); 	// Time left, displayed
			var partiStats = document.getElementById("partiStats"); // Participation points, displayed
			var instructButton = document.getElementById("instructButton"); // Instructions button, hidden
			var instructions = document.getElementById("instructions");	// Where the instructions are actually laid out
			var participationBox = document.getElementById("participationBox"); // Input Participation Text and Button
				participationBox.style.display = "none"; // Hide the box
			var messageBox = document.getElementById("messageBox"); // Input Participation Text
				messageBox.style.display = "none";
			var submitBtn = document.getElementById("submitBtn"); // Input Button
				submitBtn.style.display ="none";

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
		        	instructSound.volume = 0.3;
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
			    		console.log("playerPosX: "+playerPosX +", playerPosY: "+playerPosY);
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
			var attentionText = paper.text(playerPosX+222*wConvert+5,playerPosY-25,"ATTENTION").attr({"color":"black","font-family":"Press Start 2P","font-size":"8px"});

	//	// HIDE THE ATTENTION BARS
			attentionBar.hide();
			attentionBarFill.hide();
			attentionText.hide();			

	//	//	ATTENTION BAR BLINK FUNCTION

			var blinkCount = 0;
			var attentionBlink = function(){ //console.log("attentionBlink is running.");
				if(blinkCount == 10 && attentionScore == 100){
					clearInterval(attentionBlink);
					blinkCount = 0;	attentionScore = 0;
					gottenAttention = false; console.log("gottenAttention is now false; Attention Bar will stop blinking");
				}
				else{
					blinkCount++; // console.log("Blink: " + blinkCount);
					if(blinkCount % 2 == 0)	{attentionText.attr({'fill':'rgb(168, 45, 45)','font-size':'8px'})}
					else 					{attentionText.attr({'fill':'rgb(244, 66, 66)','font-size':'9px'})}
				};
			};

								/*	//	// ATTENTION BAR FULL
										var gottenAttentionFunction = function(){
											if(gottenAttention == true){
												 	setInterval(attentionBlink,300);
													setTimeout(function(){attentionScore = 0},3000);
											};
										}; */

        ///		 FADE OUT OF BLACK 		///

        var black = paper.rect(0,0,pWidth,pHeight).attr({'fill':'black','opacity':0.9});
        var fadeOutOfBlack = function(alpha){
        	black.attr({'fill':'none'});
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
	 		'font-size': '32pt',
	 		'font-family': 'Press Start 2P'});
	 	var subtitleText = paper.text(pWidth/2,pHeight/2+60,': THE GAME').attr({
	 		'fill' : 'white',
	 		'font-size': '22pt',
	 		'font-family': 'Press Start 2P'});
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


		///		HAND CURSOR		///

	 	var hand = paper.image("resources/hand.png", -120, -120, 25,25); //-- HAND CURSOR --//


		///////////////////////////////////////////
		///					  				    ///
	 	///			GAME GLOBAL FUNCTIONS		///
	 	///										///
	 	///////////////////////////////////////////

		 	//-- GAME TIMER --//

			var timer = function(){
				if(!gottenAttention){ console.log("Timer has started.");
		   			globalTimer++;
					globalTime = 60 - globalTimer;
		   			console.log("Time left: "+ globalTime + "s");
		   			timeStats.innerHTML = "TIME LEFT: " + globalTime + "s";
		   			if(globalTime <= 0){
		   				clearInterval(timer); console.log("Timer has ended.");
		   				// gameEnd();
		   			};
				};
		   	};

		 	//-- GAME READY FUNCTION --//
		 	var ready = function(){	console.log("Game is Ready.");
		 		startButtonBackground.show();
		 		instructButtonOff();
		 		startButton.show();
		 		startText.show();
			 	titleText.show();
		 	};
		 	//-- STORY START FUNCTION --//
		 	var storyStart = function(){ console.log("Story has started.");
		 		console.log("Game is starting!");
		 		// Hide the Titles and Button at Start
		 		startButtonBackground.hide(); startButton.hide(); startText.hide(); titleText.hide();subtitleText.hide();
			 	fadeOutOfBlack();

		   		globalTimer = 0; globalTime = 60;
		   		gamePart = 1;
			 	globalScore = 0; attentionScore = 0;
		 	};

		 	//-- INSTRUCTBUTTON DIS/APPEAR --//
		 	var instructButtonOn = function(){
		 		instructButton.style.display = "inline-grid";				
		 	};
		 	var instructButtonOff = function(){
		 		instructButton.style.display = "none";
		 	};

		 	//-- GAME START FUNCTION --//
		 	var gameStart =function(){ console.log("Game has started.");
				instructions.style.display = "none"; // Clear the bottom bar
				globalTime = 60; timeStats.innerHTML = "TIME LEFT: " + globalTime; // Set the timer and display it
				globalScore = 0; partiStats.innerHTML = "PARTICIPATION MARKS: " + globalScore; // Reset Global Score and display it
				instructButtonOff(); // Hide the Next or instructButton
				startMusic.play();
			 	attentionScore = 0; // Reset the attentionScore for the attention bar.
		 	};

		 	var gamePart4Start = function (){
				participationBox.style.display = "block"; console.log("gamePart4Started");
				timeStats.innerHTML = "TIME LEFT: " + globalTime;
				partiStats.innerHTML = "PARTICIPATION MARKS: " + globalScore;
		 	};

		 var storyScript = [	/*0*/		 "PROF: Good morning class. It's time for yet another exciting tutorial. Aren't you excited? I'm so excited.",
	/*1*/		 "PROF: Remember, every  tutorial is another chance for you to earn extra PARTICIPATION MARKS.",
	/*2*/		 "PROF: What are PARTICIPATION MARKS? Well, technically they're curricular points that are granted to students whenever they talk in class, ...",
	/*3*/		 "PROF: ... which in turn acts as some sort of blatant carrot on stick method of encouraging activity within a prescribed learning environment.",
	/*4*/		 "PROF: Some people say it's FREE MARKS and woohoo! Other think it's a farce born out of the ass of bureaucracy... ",
	/*5*/		 "PROF: But how would I know! And why should you care anyway, this is just a game, hahaha.",
	/*6*/		 "PROF: Anyway, because everyone here is a raging neoliberal, make sure you RAISE YOUR HAND high and WAVE them as much as you can so that you can get my attention!",
	/*7*/		 "PROF: I mean, it should be pretty obvious to me who wants to talk, but this is an exaggerated parody of what goes on in Singaporean classrooms, so play along!",
	/*8*/		 "SYSTEM: CLICK AND HOLD your mouse to raise your hand. Then MOVE your mouse from LEFT TO RIGHT to raise your ATTENTION bar.",
	/*9*/		 "SYSTEM: When your ATTENTION BAR is full, you'll get to PARTICIPATE!",
	/*10*/		 "SYSTEM: Remember, a tutorial only lasts for 60 SECONDS (in this game at least, don't get your hopes high).",
	/*11*/		 "SYSTEM: Participate enough, and you'll be a happ–– uh, rewarded student!",
	/*12*/		 "SYSTEM: Ready?",
	/*13*/		 "SYSTEM: ... Go!",
	/*14*/		 "",
	/*15*/		 "TEACHER: ... Oh... oh would you look at that! An eager student! What exciting things do you have to verbally contribute to academia today?",
	/*16*/		 "SYSTEM: Now's your chance to PARTICIPATE!",
	/*17*/		 "SYSTEM: But what do you have to say?",
	/*18*/		 "SYSTEM: Type literally ANYTHING into this TEXT BOX and press the ENTER key to be a participative student!",
	/*19*/		 "SYSTEM: The more characters you type, the more PARTICIPATION MARKS you earn!",
	/*20*/		 "SYSTEM: Ready?",
	/*21*/		 "SYSTEM: ... Go!",
		 ];

		 console.log("storyScript.length is "+ storyScript.length);


		 //////////////////////////////////////////
		 ///									///
		 ///			INSTRUCT BUTTON 		///
		 ///									///
		 //////////////////////////////////////////

		 storyScriptStage = 0
			instructButton.addEventListener("click", function(ev){
					if (tutorialComplete == false){
						if (storyScriptStage != 14 || storyScriptStage != 22){
							instructSound.play();
						}
						if (gamePart == 1 && storyScriptStage < 15) {
						 	instructions.innerHTML = storyScript[storyScriptStage];
						}
						if (storyScriptStage == 8 || storyScriptStage == 12){
							attentionBar.show(); attentionText.show();
							attentionBarFill.show();
							attentionBarFill.attr({"height":0});
						}
						if (storyScriptStage == 9 && gamePart == 1){
							attentionBarFill.attr({"height":100*hConvert});
						}
						if (storyScriptStage == 14){
							gamePart = 2; console.log("gamePart2 start");
							gameStart();
							attentionScore = 0;	attentionBarFill.attr({"height":0});
							setInterval(timer,1000);
						}
						if (gamePart == 3 && storyScriptStage < 22){
						 	instructions.innerHTML = storyScript[storyScriptStage];
						}
						if (storyScriptStage == 18){
							participationBox.style.display ="block";
							messageBox.style.height ="80px";
							messageBox.style.display = "block";
						}
						if (gamePart == 3 && storyScriptStage == 22){
							gamePart4Start();
							gamePart = 4;
							instruction.style.display ="none";
						}
					}
				storyScriptStage++;
			 	console.log("storyScriptStage is " + storyScriptStage);
			});

		   ready();

		    ///////////////////////////////////////////
		    ///										///
		 	///			START BUTTON LISTENER 		///
		 	///										///
		 	///////////////////////////////////////////

		 	startButton.node.addEventListener("click", function(ev){
		 		startMusic.play();
		 		storyStart();
		 		gamePart=1;
		 		console.log("click start, gamePart: " + gamePart);
		 		console.log("clearing timeStats and partiStats");
				timeStats.innerHTML = ""; partiStats.innerHTML ="";
				instructions.innerHTML = storyScript[0];
		 		instructButtonOn();
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
/*			 		var adjacentTan = ev.offsetX - pWidth/2;
			 		var oppositeTan = ev.offsetY - pHeight/2;
			 		var calcRotate = function(opposite,adjacent){
				 		return 1/Math.tan(opposite/adjacent); 			 			
			 		};
			 		var angleTan = calcRotate(oppositeTan,adjacentTan);
			 		hand.attr({transform:"r"+angleTan});
*/
			 	};
			 	if (gamePart == 1 && handRaise && gottenAttention == false || gamePart == 2 && handRaise && gottenAttention == false){
			 		attentionScore += Math.floor(Math.abs(ev.offsetX - initialHand)/100);
			 		initialHand = ev.offsetX;
					attentionBarFill.attr({"height":attentionScore*hConvert});
			 	//	console.log("attentionScore: "+ attentionScore);
			 	};
			 	if (gamePart == 1 && attentionScore >= 100 && gottenAttention == false){
			 		attentionScore = 100; gottenAttention = true;
			 		setInterval(attentionBlink,300);
			 	};
			 	if (gamePart == 2 && attentionScore >= 100 && gottenAttention == false){
			 		attentionScore = 100; gottenAttention = true;
				 	setInterval(attentionBlink,300);
			 		gamePart = 3;
					instructButtonOn(); clearInterval(timer);
					storyScriptStage++;
					instructions.innerHTML = storyScript[15];
					timeStats.innerHTML = ""; partiStats.innerHTML = "";
			 	};
			 	if (gamePart == 3 && attentionScore >= 100 && gottenAttention == true){
			 	}
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
			 		console.log("attentionScore is now: "+ attentionScore);
//			 		hand.animate({transform:"r"+0},100,"<>");
			 	};
		 	});

			
	} // End of Require
);