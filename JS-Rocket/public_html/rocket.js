/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var timer = null;
var countdownNumber=10;

var changeState = function(state) {
    
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    countdownNumber=10;
    document.getElementById('countdown').innerHTML = countdownNumber;
    
    //countdown
if (state == 2) {
    
     timer = setInterval(function (){
     countdownNumber = countdownNumber - 1;
     document.getElementById('countdown').innerHTML = countdownNumber;  
     
     if (countdownNumber > 4 && countdownNumber <= 7){
         document.getElementById('nervous').className= 'nervous show';
     }
     
     else{
         document.getElementById('nervous').className= 'nervous';
     }
     
     if (countdownNumber > 1 && countdownNumber <= 4){
         document.getElementById('cant-wait').className= 'cant-wait show';
     }
     
     else{
         document.getElementById('cant-wait').className= 'cant-wait';
     }
     
     if (countdownNumber <= 0){
        
        changeState(3);
    }
    
    }, 500);
    
    } 
    
else if (state== 3) {
    
            var success = setTimeout(function (){
                var randomNumber = Math.round(Math.random()*10);
                
                console.log('randomNumber: ', randomNumber)
                
                // If rocket was a success
                if (randomNumber > 5){
                    changeState(4);
                }
                
                //If Rocket Failed
                else {
                    changeState(5);
                }
            
        }, 2000);
        
};

};



