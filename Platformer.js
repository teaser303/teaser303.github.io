let canvas = document.getElementById('can');
let ctx = canvas.getContext("2d");
let level_count = 1;
let newDrawObject = new drawObject();
var flag = true;
var jumpflag = 0;
let player = {
    x: 10,
    y: 700
}
let enemy = {
    x: 500,
    y: 700
}
let enemy2 = {
    x: 300,
    y: 700
}
let enemy3 = {
    x: 800,
    y: 700
}

let level2Enemy1 = {
	x: 300,
	y: 700
} 

let level2Enemy2 = {
	x: 400,
	y: 700
}

let level2Enemy3 = {
	x: 800,
	y: 700
}

let level4Enemy1 = {
	x: 500,
	y: 700
}

let level5Enemy1 = {
	x: 150,
	y: 700
}

let level5Enemy2 = {
	x: 350,
	y: 700
}

let level5Enemy3 = {
	x: 450,
	y: 700
}

let level5Enemy4 = {
	x: 650,
	y: 700
}

let level5Enemy5 = {
	x: 750,
	y: 700
}

let level5Enemy6 = {
	x: 950,
	y: 700
}

let level5Enemy7 = {
	x: 1050,
	y: 700
}
let level6Enemy1 = {
	x: 1100,
	y: 700
}

let level7Enemy1 = {
	x: 250,
	y: 550
}

let level7Enemy2 = {
	x: 1000,
	y: 550
}

let level7Enemy3 = {
	x: 450,
	y: 500
}

let level7Enemy4 = {
	x: 565,
	y: 500
}

let level7Enemy5 = {
	x: 680,
	y: 500
}

let level8Enemy1 = {
	x: 300,
	y: 700
}

let level8Enemy2 = {
	x: 450,
	y: 700
}

let level8Enemy3 = {
	x: 800,
	y: 700
}

let level9Enemy1 = {
	x: 200,
	y: 700
}

let level9Enemy2 = {
	x: 250,
	y: 700
}

let level9Enemy3 = {
	x: 750,
	y: 700
}

let level9Enemy4 = {
	x: 800,
	y: 700
}

let level9Enemy5 = {
	x: 850,
	y: 700
}

let level9Enemy6 = {
	x: 900,
	y: 700
}

let level9Enemy7 = {
	x: 1100,
	y: 700
}

ground = {
    y: 750
}

function gravity() {
	if(player.y >= 850) {
				location.reload();
			}
    if (player.y + 50 < ground.y) {
        player.y += 9.8
    } else if (player.x >= 500 && player.x + 50 <= 800 && level_count == 3) {
		player.y += 9.8
		flag == false;
	} else if (player.x >= 400 && player.x + 50 <= 650 && level_count == 4) {
		player.y += 9.8
		flag == false;
	} else if (player.x >= 900 && player.x + 50 <= 1100 && level_count == 4) {
		player.y += 9.8
		flag == false;
	} else if (player.x >= 200 && player.x + 50 <= 400 && level_count == 6) {
		player.y += 9.8
		flag == false;
	} else if (player.x >= 500 && player.x + 50 <= 700 && level_count == 6) {
		player.y += 9.8
		flag == false;
	} else if (player.x >= 800 && player.x + 50 <= 1000 && level_count == 6) {
		player.y += 9.8
		flag == false;
	} else if (player.x >= 300 && player.x + 50 <= 450 && level_count == 7) {
		player.y += 9.8;
		flag == false;
	} else if (player.x >= 730 && player.x + 50 <= 1000 && level_count == 7) {
		player.y += 9.8;
		flag == false;
	}
	else if (player.x >= 100 && player.x + 50 <= 300 && level_count == 8){
		player.y += 9.8
		flag == false
	} else if (player.x >= 500 && player.x + 50 <= 700 && level_count == 8){
		player.y += 9.8
		flag == false			
	} else if (player.x >= 900 && player.x + 50 <= 1000 && level_count == 8){
		player.y += 9.8
		flag == false
	} else if (player.x >= 1050 && player.x + 50 <= 1200 && level_count == 8){
		player.y += 9.8
		flag == false
	} else if (player.x >= 350 && player.x + 50 <= 700 && level_count == 9) {
		player.y += 9.8
	} else if (player.x >= 1000 && player.x + 50 <= 1100 && level_count == 9) {
		player.y += 9.8
	}
}

function groundCheck() {
    if (player.y + 50 == ground.y) {
        flag = true;
    }
}

function jump() {
    if (jumpflag == 0) {
        jumpflag = 20;
    }
	if (player.y > 700) {
		flag == false;
	}
    if (flag == true) {
        //player.y -= 200;
        //if(left key is pressed){
        //}
        flag = false;
    } else if (flag == false) {
        jumpflag = 0
    }
}

function isJump(){
	if (jumpflag) {
        player.y -= 9.8;
        jumpflag -= 1;
    } else {
        gravity()
    }
}

function restart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawSun() {
	ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();
}

function doKey(e) {
    switch (e.keyCode) {
        case 37: //left
            if (player.x > 0) {
                player.x -= 10;
            }
            break;
        case 38: //up
            jump()
            break;
        case 39: //right
            if (player.x < 1150) {
                player.x += 10;
            }
            break;
    }
    //  console.log(e)
}

var keyPressed = {};

document.addEventListener('keydown', function(e) {
    keyPressed[e.keyCode] = true;
}, false);
document.addEventListener('keyup', function(e) {
    keyPressed[e.keyCode] = false;
}, false);

function gameLoop() {
    if (keyPressed["37"] && keyPressed["38"]) {
        if (player.x - 50 > 0) {
            player.x -= 10
        }
        if (player.y == 700) {
            jump();
        }
    }
    if (keyPressed["39"] && keyPressed["38"]) {
        if (player.x + 50 < 1200) {
            player.x += 10;
        }
        if (player.y == 700) {
            jump();
        }
    }
}

function drawObject() {
	if (level_count == 1 || level_count == 2 || level_count == 10){
    this.x = 100
    this.y = 750
    this.height = 100
    this.width = 5000
    ctx.beginPath();
    ctx.moveTo(-600, 750);
    ctx.lineTo(3000, 750);
    ctx.stroke();
    ctx.lineWidth = 10
}
}

function isCollision(lhs, rhs) {
    //console.log(rhs)
    lt = lhs.y;
    lb = lhs.y + lhs.height;
    ll = lhs.x;
    lr = lhs.x + lhs.width;
    rt = rhs.y;
    rb = rhs.y + rhs.height;
    rl = rhs.x;
    rr = rhs.x + rhs.width;
    //console.log('lt',lt,'lb',lb,'ll',ll,'lr',lr)
    //console.log('rt',rt,'rb',rb,'rl',rl,'rr',rr)
    if (lt <= rb && lt >= rt && lr >= rl && lr <= rr) return true;
    if (lb <= rb && lb >= rt && lr >= rl && lr <= rr) return true;
    if (lt <= rb && lt >= rt && ll >= rl && ll <= rr) return true;
    if (lb <= rb && lb >= rt && ll >= rl && ll <= rr) return true;
    return false;
}
if(isCollision(player, enemy) == true){
	console.log("hit")
}
document.getElementById('body').addEventListener('keydown', doKey);

function drawWorld() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.x = 20
    drawObject();
}

function level1() {
    ctx.fillStyle = "#FF0000"

    ctx.beginPath();
    ctx.moveTo(500, 750);
    ctx.lineTo(525, 700);
    ctx.lineTo(550, 750);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(300, 750);
    ctx.lineTo(325, 700);
    ctx.lineTo(350, 750);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(800, 750);
    ctx.lineTo(825, 700);
    ctx.lineTo(850, 750);
    ctx.fill();
}

function level2() {
    ctx.fillStyle = "#FF0000"

    ctx.beginPath();
    ctx.moveTo(400, 750);
    ctx.lineTo(425, 700);
    ctx.lineTo(450, 750);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(300, 750);
    ctx.lineTo(325, 700);
    ctx.lineTo(350, 750);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(800, 750);
    ctx.lineTo(825, 700);
    ctx.lineTo(850, 750);
    ctx.fill();
}

function level3() {
	ctx.lineWidth = 10
	this.x = 100
    this.y = 750
    this.height = 100
    this.width = 500
    ctx.beginPath();
    ctx.moveTo(-600, 750);
    ctx.lineTo(500, 750);
    ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(800, 750);
	ctx.lineTo(3000, 750);
	ctx.stroke();
	ctx.lineWidth = 10;
	if(player.y >= 700){
		jumpflag = 0;
	}
}

function level4() {
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(0, 750);
	ctx.lineTo(400, 750);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(500, 750);
	ctx.lineTo(550, 750);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(650, 750);
	ctx.lineTo(900, 750);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(1100, 750);
	ctx.lineTo(1200, 750);
	ctx.stroke();
	
	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.moveTo(500, 750);
	ctx.lineTo(525, 700);
	ctx.lineTo(550, 750);
	ctx.fill();
	if(player.y >= 700){
		jumpflag = 0;
	}
}

function level5(){
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(0, 750);
	ctx.lineTo(100, 750);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(150, 750);
	ctx.lineTo(200, 750);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(250, 750);
	ctx.lineTo(300, 750);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(350, 750);
	ctx.lineTo(400, 750);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(450, 750);
	ctx.lineTo(500, 750);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(550, 750);
	ctx.lineTo(600, 750);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(650, 750);
	ctx.lineTo(700, 750);
	ctx.stroke();
	
	ctx.moveTo(750, 750);
	ctx.lineTo(800, 750);
	ctx.stroke();
	
	ctx.moveTo(850, 750);
	ctx.lineTo(900, 750);
	ctx.stroke();
	
	ctx.moveTo(950, 750);
	ctx.lineTo(1000, 750);
	ctx.stroke();
	
	ctx.moveTo(1050, 750);
	ctx.lineTo(1100, 750);
	ctx.stroke();
	
	ctx.moveTo(1150, 750);
	ctx.lineTo(1200, 750);
	ctx.stroke();
	
	ctx.lineWidth = 0;
	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.moveTo(150, 750);
	ctx.lineTo(175, 700);
	ctx.lineTo(200, 750);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(350, 750);
	ctx.lineTo(375, 700);
	ctx.lineTo(400, 750);
	ctx.fill();
	
	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.moveTo(450, 750);
	ctx.lineTo(475, 700);
	ctx.lineTo(500, 750);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(650, 750);
	ctx.lineTo(675, 700);
	ctx.lineTo(700, 750);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(750, 750);
	ctx.lineTo(775, 700);
	ctx.lineTo(800, 750);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(950, 750);
	ctx.lineTo(975, 700);
	ctx.lineTo(1000, 750);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(1050, 750);
	ctx.lineTo(1075, 700);
	ctx.lineTo(1100, 750);
	ctx.fill();
	
	if(player.y >= 700){
		jumpflag = 0;
	}
	
}

function level6(){
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(0, 750);
	ctx.lineTo(200, 750);
	ctx.stroke();
	
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(400, 750);
	ctx.lineTo(500, 750);
	ctx.stroke();
	
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(700, 750);
	ctx.lineTo(800, 750);
	ctx.stroke();
	
	ctx.fillStyle = "red"
	ctx.beginPath();
	ctx.moveTo(1100, 750);
	ctx.lineTo(1125, 700);
	ctx.lineTo(1150, 750);
	ctx.fill();
	
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(1000, 750);
	ctx.lineTo(1200, 750);
	ctx.stroke();
	
	if(player.y >= 700){
		jumpflag = 0;
	}
	
}

function level7() {
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(0, 750);
	ctx.lineTo(300, 750);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(250, 550);
	ctx.lineTo(300, 550);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(450, 750);
	ctx.lineTo(730, 750);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(450, 500);
	ctx.lineTo(500, 500);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(565, 500);
	ctx.lineTo(615, 500);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(680, 500);
	ctx.lineTo(730, 500);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(1000, 750);
	ctx.lineTo(1200, 750);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(1000, 550);
	ctx.lineTo(1050, 550);
	ctx.stroke();
	
	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.moveTo(250, 550);
	ctx.lineTo(275, 600);
	ctx.lineTo(300, 550);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(450, 500);
	ctx.lineTo(475, 550);
	ctx.lineTo(500, 500);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(565, 500);
	ctx.lineTo(590, 550);
	ctx.lineTo(615, 500);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(680, 500);
	ctx.lineTo(705, 550);
	ctx.lineTo(730, 500);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(1000, 550);
	ctx.lineTo(1025, 600);
	ctx.lineTo(1050, 550);
	ctx.fill();
	
	if(player.y >= 700){
		jumpflag = 0;
	}
}

function level8(){
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(0, 750);
	ctx.lineTo(100, 750);
	ctx.stroke();
	
	ctx.fillStyle = "red"
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(300, 750);
	ctx.lineTo(500, 750);
	ctx.stroke();
	
	
	ctx.beginPath();
	ctx.moveTo(300, 750);
	ctx.lineTo(325, 700);
	ctx.lineTo(350, 750);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(450, 750);
	ctx.lineTo(475, 700);
	ctx.lineTo(500, 750);
	ctx.fill();
	
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(700, 750);
	ctx.lineTo(900, 750);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(800, 750);
	ctx.lineTo(825, 700);
	ctx.lineTo(850, 750);
	ctx.fill();
	
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(1000, 750);
	ctx.lineTo(1050, 750);
	ctx.stroke();

	
	if(player.y >= 700){
		jumpflag = 0;
	}
}

function level9() {
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(0, 750);
	ctx.lineTo(350, 750);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(700, 750);
	ctx.lineTo(1000, 750);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(1100, 750);
	ctx.lineTo(1200, 750);
	ctx.stroke();
	
	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.moveTo(200, 750);
	ctx.lineTo(225, 700);
	ctx.lineTo(250, 750);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(250, 750);
	ctx.lineTo(275, 700);
	ctx.lineTo(300, 750);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(750, 750);
	ctx.lineTo(775, 700);
	ctx.lineTo(800, 750);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(800, 750);
	ctx.lineTo(825, 700);
	ctx.lineTo(850, 750);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(850, 750);
	ctx.lineTo(875, 700);
	ctx.lineTo(900, 750);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(900, 750);
	ctx.lineTo(925, 700);
	ctx.lineTo(950, 750);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(1100, 750);
	ctx.lineTo(1125, 700);
	ctx.lineTo(1150, 750);
	ctx.fill();
	
	if(player.y >= 700){
		jumpflag = 0;
	}
}

function level10(){
	ctx.fillStyle = "blue"
	ctx.font = "100px Roboto";
	ctx.fillText("You win", 400, 300)
	
	ctx.font = "40px Roboto";
	ctx.fillText("Restart? =>", 950, 650)
}

function stopLevelCount() {
	level = document.getElementById("level")
	if(level_count % 11 == 0) {
		level_count = 1;
	}
}

function levelUp(){
	if (player.x + 50 == 1200) {
        level_count += 1;
        drawWorld();
	}	
	if (level_count == 1) {
        level1()
    } else if (level_count == 2) {
        level2()
    } else if (level_count == 3) {
		level3()
	} else if (level_count == 4) {
		level4();
	} else if (level_count == 5) {
		level5();
	} else if (level_count == 6) {
		level6();
	} else if (level_count == 7) {
		level7();
	} else if (level_count == 8) {
		level8();
	} else if (level_count == 9) {
		level9();
	} else if (level_count == 10){
		level10();
	}
	document.getElementById("level").innerHTML = "Level: " + parseInt(level_count);
}
	
function drawPlayer(){	
        ctx.fillStyle = "#123456";
        ctx.fillRect(player.x, player.y, 50, 50);   
}

function level1PlayerDeath1() {
    if (player.x + 50 >= enemy.x && player.x <= enemy.x + 50 && player.y + 50 >= enemy.y && level_count == 1) {
        location.reload();
   }
}

function level1PlayerDeath2() {
    if (player.x + 50 >= enemy2.x && player.x <= enemy2.x + 50 && player.y + 50 >= enemy2.y && level_count == 1) {
        location.reload();
    }
}

function level1PlayerDeath3() {
    if (player.x + 50 >= enemy3.x && player.x <= enemy3.x + 50 && player.y + 50 >= enemy3.y && level_count == 1) {
        location.reload();
    }
}

function level2PlayerDeath1() {
	if (player.x + 50 >= level2Enemy1.x && player.x <= level2Enemy1.x + 50 && player.y + 50 >= level2Enemy1.y && level_count == 2) {
        location.reload();
	}	
}

function level2PlayerDeath2() {
	if (player.x + 50 >= level2Enemy2.x && player.x <= level2Enemy2.x + 50 && player.y + 50 >= level2Enemy2.y && level_count == 2) {
        location.reload();
	}	
}

function level2PlayerDeath3() {
	if (player.x + 50 >= level2Enemy3.x && player.x <= level2Enemy3.x + 50 && player.y + 50 >= level2Enemy3.y && level_count == 2) {
        location.reload();
	}	
}

function level4PlayerDeath1() {
	if (player.x + 50 >= level4Enemy1.x && player.x <= level4Enemy1.x + 50 && player.y + 50 >= level4Enemy1.y && level_count == 4) {
        location.reload();
	}	
}

function level5PlayerDeath1() {
	if (player.x + 50 >= level5Enemy1.x && player.x <= level5Enemy1.x + 50 && player.y + 50 >= level5Enemy1.y && level_count == 5) {
        location.reload();
	}	
}

function level5PlayerDeath2() {
	if (player.x + 50 >= level5Enemy2.x && player.x <= level5Enemy2.x + 50 && player.y + 50 >= level5Enemy2.y && level_count == 5) {
        location.reload();
	}	
}

function level5PlayerDeath3() {
	if (player.x + 50 >= level5Enemy3.x && player.x <= level5Enemy3.x + 50 && player.y + 50 >= level5Enemy3.y && level_count == 5) {
        location.reload();
	}	
}

function level5PlayerDeath4() {
	if (player.x + 50 >= level5Enemy4.x && player.x <= level5Enemy4.x + 50 && player.y + 50 >= level5Enemy4.y && level_count == 5) {
        location.reload();
	}	
}

function level5PlayerDeath5() {
	if (player.x + 50 >= level5Enemy5.x && player.x <= level5Enemy5.x + 50 && player.y + 50 >= level5Enemy5.y && level_count == 5) {
        location.reload();
	}	
}

function level5PlayerDeath6() {
	if (player.x + 50 >= level5Enemy6.x && player.x <= level5Enemy6.x + 50 && player.y + 50 >= level5Enemy6.y && level_count == 5) {
        location.reload();
	}	
}

function level5PlayerDeath7() {
	if (player.x + 50 >= level5Enemy7.x && player.x <= level5Enemy7.x + 50 && player.y + 50 >= level5Enemy7.y && level_count == 5) {
        location.reload();
	}	
}
function level6PlayerDeath1() {
	if (player.x + 50 >= level6Enemy1.x && player.x <= level6Enemy1.x + 50 && player.y + 50 >= level6Enemy1.y && level_count == 6) {
        location.reload();
	}	
}

function level7PlayerDeath1() {
	if (player.x + 50 >= level7Enemy1.x && player.x <= level7Enemy1.x + 50 && player.y <= level7Enemy1.y + 50 && level_count == 7) {
        location.reload();
	}
}

function level7PlayerDeath2() {
	if (player.x + 50 >= level7Enemy2.x && player.x <= level7Enemy2.x + 50 && player.y <= level7Enemy2.y + 50 && level_count == 7) {
        location.reload();
	}	
}

function level7PlayerDeath3() {
	if (player.x + 50 >= level7Enemy3.x && player.x <= level7Enemy3.x + 50 && player.y <= level7Enemy3.y + 50 && level_count == 7) {
        location.reload();
	}	
}

function level7PlayerDeath4() {
	if (player.x + 50 >= level7Enemy4.x && player.x <= level7Enemy4.x + 50 && player.y <= level7Enemy4.y + 50 && level_count == 7) {
        location.reload();
	}	
}

function level7PlayerDeath5() {
	if (player.x + 50 >= level7Enemy5.x && player.x <= level7Enemy5.x + 50 && player.y <= level7Enemy5.y + 50 && level_count == 7) {
        location.reload();
	}	
}

function level8PlayerDeath1() {
	if (player.x + 50 >= level8Enemy1.x && player.x <= level8Enemy1.x + 50 && player.y + 50 >= level8Enemy1.y && level_count == 8) {
        location.reload();
	}	
}

function level8PlayerDeath2() {
	if (player.x + 50 >= level8Enemy2.x && player.x <= level8Enemy2.x + 50 && player.y + 50 >= level8Enemy2.y && level_count == 8) {
        location.reload();
	}	
}

function level8PlayerDeath3() {
	if (player.x + 50 >= level8Enemy3.x && player.x <= level8Enemy3.x + 50 && player.y + 50 >= level8Enemy3.y && level_count == 8) {
        location.reload();
	}	
}

function level9PlayerDeath1() {
	if (player.x + 50 >= level9Enemy1.x && player.x <= level9Enemy1.x + 50 && player.y + 50 >= level9Enemy1.y && level_count == 9) {
        location.reload();
	}	
}

function level9PlayerDeath2() {
	if (player.x + 50 >= level9Enemy2.x && player.x <= level9Enemy2.x + 50 && player.y + 50 >= level9Enemy2.y && level_count == 9) {
        location.reload();
	}	
}

function level9PlayerDeath3() {
	if (player.x + 50 >= level9Enemy3.x && player.x <= level9Enemy3.x + 50 && player.y + 50 >= level9Enemy3.y && level_count == 9) {
        location.reload();
	}	
}

function level9PlayerDeath4() {
	if (player.x + 50 >= level9Enemy4.x && player.x <= level9Enemy4.x + 50 && player.y + 50 >= level9Enemy4.y && level_count == 9) {
        location.reload();
	}	
}

function level9PlayerDeath5() {
	if (player.x + 50 >= level9Enemy5.x && player.x <= level9Enemy5.x + 50 && player.y + 50 >= level9Enemy5.y && level_count == 9) {
        location.reload();
	}	
}

function level9PlayerDeath6() {
	if (player.x + 50 >= level9Enemy6.x && player.x <= level9Enemy6.x + 50 && player.y + 50 >= level9Enemy6.y && level_count == 9) {
        location.reload();
	}	
}

function level9PlayerDeath7() {
	if (player.x + 50 >= level9Enemy7.x && player.x <= level9Enemy7.x + 50 && player.y + 50 >= level9Enemy7.y && level_count == 9) {
        location.reload();
	}	
}

function update() {
	new drawObject;
    restart();
    drawPlayer();
    drawObject();
    isJump();
    drawSun()
    groundCheck();
    gameLoop();
	stopLevelCount();
    level1PlayerDeath1();
    level1PlayerDeath2();
    level1PlayerDeath3();
	level2PlayerDeath1();
	level2PlayerDeath2();
	level2PlayerDeath3();
	level4PlayerDeath1();
	level5PlayerDeath1();
	level5PlayerDeath2();
	level5PlayerDeath3();
	level5PlayerDeath4();
	level5PlayerDeath5();
	level5PlayerDeath6();
	level5PlayerDeath7();
	level6PlayerDeath1();
	level7PlayerDeath1();
	level7PlayerDeath2();
	level7PlayerDeath3();
	level7PlayerDeath4();
	level7PlayerDeath5();
	level8PlayerDeath1();
	level8PlayerDeath2();
	level8PlayerDeath3();
	level9PlayerDeath1();
	level9PlayerDeath2();
	level9PlayerDeath3();
	level9PlayerDeath4();
	level9PlayerDeath5();
	level9PlayerDeath6();
	level9PlayerDeath7();
    levelUp();	
}
setInterval(update, 1000 / 60);