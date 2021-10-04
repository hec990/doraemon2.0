code = `
/*
*
* 先给页面加个颜色
* 
*/

.box {
    display: flex;
    justify-content: center;
}

.head {
    width: 330px;
    height: 290px;
    border: 2px solid black;
    border-radius: 50%;
    position: relative;
}

.face {
    width: 300px;
    height: 240px;
    border-radius: 50%;
    border: 2px solid black;
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    z-index: -1;
}

.eye {
    width: 170px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.eye div {
    border-radius: 50%;
}

.eye>.eye_left {
    width: 80px;
    height: 105px;
    border: 2px solid black;
    background-color: white;
    transform: rotate(15deg);
    position: relative;
    z-index: 5;
}

.eye>.eye_left>.eyebead_left {
    width: 20px;
    height: 30px;
    background-color: black;
    transform: rotate(-10deg);
    position: absolute;
    top: 30px;
    right: 5px;
}

.eye>.eye_left>.eyebead_left>.eyebead {
    width: 8px;
    height: 15px;
    background-color: white;
    position: absolute;
    top: 8px;
    right: 3px;
    transform: rotate(5deg);
}

.eye>.eye_right {
    width: 80px;
    height: 105px;
    border: 2px solid black;
    background-color: white;
    transform: rotate(-15deg);
    z-index: 5;
}

.eye>.eye_right>.eyebead_right {
    width: 20px;
    height: 30px;
    background-color: black;
    transform: rotate(5deg);
    position: absolute;
    top: 30px;
    left: 5px;
}

.eye>.eye_right>.eyebead_right>.eyebead {
    width: 8px;
    height: 15px;
    background-color: white;
    position: absolute;
    top: 8px;
    left: 3px;
    transform: rotate(-5deg);
}


/* cheek 脸颊红色*/

.cheek {
    width: 230px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 85px;
    left: 50px;
}

.cheek div {
    border-radius: 50%;
}

.cheek>.cheek_left {
    width: 50px;
    background-color: #FDA8A6;
    z-index: 4;
}

.cheek>.cheek_right {
    width: 50px;
    background-color: #FDA8A6;
    z-index: 4;
}


/* mouth 嘴巴 */

.mouth {
    width: 250px;
    height: 250px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    top: 40px;
    left: 0;
    border-radius: 20% 20% 50% 50%;
}

.mouth>.smallMouth {
    width: 250px;
    height: 230px;
    border-radius: 20% 20% 50% 50%;
    background-color: #E16D6D;
    position: absolute;
    top: -120px;
}

.mouth_second {
    width: 300px;
    height: 90px;
    position: absolute;
    margin: 0 auto;
    top: 100px;
    left: 13px;
}

.mouth_second div {
    border-radius: 50%;
}

.mouth_second>.mouth_left {
    width: 57px;
    height: 70px;
    background-color: #E16D6D;
    position: absolute;
    top: 39px;
    left: 31px;
    transform: rotate(-35deg);
}

.mouth_second>.mouth_center {
    width: 200px;
    height: 100px;
    background-color: white;
    position: absolute;
    top: -32px;
    left: 53px;
    transform: rotate(-2deg);
    z-index: 3;
}

.mouth_second>.mouth_right {
    width: 57px;
    height: 70px;
    background-color: #E16D6D;
    position: absolute;
    top: 39px;
    right: 31px;
    transform: rotate(35deg);
    z-index: 2;
}

.mouth_love {
    width: 133px;
    height: 87px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 33px;
    left: 100px;
    z-index: 20;
    transition: all 1s;
}

.mouth_love:hover {
    transform: scale(1.2);
}

.mouth_love div {
    border-radius: 50%;
    width: 60px;
    height: 90px;
    background-color: #F49E9D;
}

.mouth_love>.mouth_love_left {
    transform: rotate(-50deg);
    position: absolute;
    top: 0;
    left: 24px;
}

.mouth_love>.mouth_love_right {
    transform: rotate(50deg);
    position: absolute;
    top: 0;
    right: 24px;
}


/* 胡子  + 鼻子 */

.beard {
    width: 300px;
    height: 120px;
    margin: 0 auto;
    position: absolute;
    top: 50px;
    left: 13px;
    z-index: 10;
}

.beard div {
    border: 2px solid black;
}


/* 左边胡子 */

.beard>.beard_1 {
    width: 100px;
    height: 20px;
    border-radius: 190% 50% 0 50%;
    border-color: black transparent transparent black;
    position: absolute;
    top: 47px;
    left: 0px;
    transform: rotate(21deg);
}

.beard>.beard_2 {
    width: 110px;
    height: 20px;
    border-radius: 190% 50% 0 50%;
    border-color: black transparent transparent black;
    position: absolute;
    top: 70px;
    left: -10px;
    transform: rotate(7deg);
}

.beard>.beard_3 {
    width: 120px;
    height: 20px;
    border-radius: 190% 50% 0 50%;
    border-color: black transparent transparent black;
    position: absolute;
    top: 99px;
    left: -19px;
    transform: rotate(-7deg);
}


/* 右边胡子 */

.beard>.beard_4 {
    width: 100px;
    height: 20px;
    border-radius: 50% 190% 50% 0;
    border-color: black black transparent transparent;
    position: absolute;
    top: 43px;
    right: 3px;
    transform: rotate(-31deg);
}

.beard>.beard_5 {
    width: 110px;
    height: 20px;
    border-radius: 50% 190% 50% 0;
    border-color: black black transparent transparent;
    position: absolute;
    top: 65px;
    right: -9px;
    transform: rotate(-20deg);
}

.beard>.beard_6 {
    width: 120px;
    height: 20px;
    border-radius: 50% 190% 50% 0;
    border-color: black black transparent transparent;
    position: absolute;
    top: 91px;
    right: -19px;
    transform: rotate(-6deg);
}


/* 鼻子 */

.nose {
    width: 200px;
    height: 90px;
    position: absolute;
    top: 78px;
    left: 64px;
    z-index: 11;
    display: flex;
    justify-content: center;
}

.nose>.nose_yuan {
    width: 35px;
    height: 35px;
    background-color: #F45D61;
    border-radius: 50%;
    border: 2px solid black;
}

.nose>.nose_line {
    height: 55px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    left: 99px;
}


/* 手 */

.hand {
    width: 300px;
    height: 130px;
    margin: 0 auto;
    position: relative;
    top: -110px;
    left: 2px;
    display: flex;
    justify-content: space-between;
}

.hand div {
    border-radius: 50%;
}


/* left */

.hand>.hand_left {
    width: 120px;
    position: relative;
    top: 0;
    left: -13px;
    z-index: 2;
}

.hand>.hand_left>.hand_left_top {
    width: 50px;
    height: 50px;
    border: 2px solid black;
    background-color: white;
    position: absolute;
    top: 0;
    left: 67px;
}

.hand>.hand_left>.hand_left_bottom {
    width: 60px;
    height: 78px;
    background-color: #1B94DD;
    border: 2px solid black;
    transform: rotate(37deg);
    position: relative;
    top: 10px;
    left: 36px;
    z-index: -1;
}


/* center */

.hand>.hand_center {
    width: 60px;
}

.hand>.hand_center>.hand_center_yuan {
    width: 40px;
    height: 40px;
    background-color: #FDD984;
    position: relative;
    top: 35px;
    left: 11px;
}


/* right */

.hand>.hand_right {
    width: 120px;
    position: relative;
    top: -2px;
    right: -13px;
}

.hand>.hand_right>.hand_right_top {
    width: 50px;
    height: 50px;
    border: 2px solid black;
    background-color: white;
    position: absolute;
    top: 0;
    right: 67px;
}

.hand>.hand_right>.hand_right_bottom {
    width: 60px;
    height: 78px;
    background-color: #1B94DD;
    border: 2px solid black;
    transform: rotate(-40deg);
    position: relative;
    top: 9px;
    left: 15px;
    z-index: -1;
}


/* 给手添加线 */

.hand_line {
    width: 300px;
    height: 60px;
    position: relative;
    bottom: 230px;
    left: 18px;
}

.hand_line div {
    border: 2px solid black;
}

.hand_line>.hand_line_left {
    width: 7px;
    height: 26px;
    border-radius: 0 0 0 50px;
    border-color: transparent transparent black transparent;
    position: relative;
    top: 9px;
    left: 38px;
    transform: rotate(247deg);
    z-index: 20;
}

.hand_line>.hand_line_right {
    width: 7px;
    height: 24px;
    border-radius: 10px 0 0 10px;
    border-color: transparent transparent black transparent;
    position: relative;
    top: -8px;
    left: 245px;
    transform: rotate(116deg);
}
   `