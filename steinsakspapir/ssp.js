//model
var infotekst="&#128561 &#129313 &#128166 &#128169	&#128169	&#128169 ";
var vinner="You wish";
var player1="";
var player2="";
var p1;
var p2;
var spiller=1;
var computer=true;
var stein;
var saks;
var papir;
oppdaterMeg();
//view
function oppdaterMeg()
{
    document.getElementById("app").innerHTML =`
    <h1>Stein - Saks & Papir Bror &#128561 &#128561 </h1>   
    <div id="hoved">
        <div id="left"> 
            <div class="Spiller" onclick="p1Choose(this,1)"><img src="images/rock.png" alt="stein"></div>
            <div class="Spiller" onclick="p1Choose(this,2)"><img src="images/saks.jpg" alt="saks"></div>
            <div class="Spiller" onclick="p1Choose(this,3)"><img src="images/papir.jpg" alt="papir"></div>
        </div>
        <div id="right">
            <div class="Spiller" id="c1" onclick="p2Choose(this,1)"><img  src="images/rock.png" alt="stein"></div>
            <div class="Spiller" id="c2" onclick="p2Choose(this,2)"><img  src="images/saks.jpg" alt="saks"></div>
            <div class="Spiller" id="c3" onclick="p2Choose(this,3)"><img  src="images/papir.jpg" alt="papir"></div>
            
        </div>
    
        <div id="middle">
            
            <div id="vinner"><br><p>${vinner}</p></div> <br><br>
            <div id="infotekst"><p>${infotekst}</p></div>
            <div id="spiller1">${player1}</div>
            <div id="spiller2">${player2}</div>
        </div>
    </div>
    `;
}
//control
function p1Choose(mittvalg, valg)
{
    if(spiller==1){
        player1=mittvalg.innerHTML;
        p1=valg;
        spiller=2;
        if(computer==false){ oppdaterMeg(); }
        else if(computer==true){   
        dennyefunksjonen();
        }
    }
}
function p2Choose(mittvalg, valg)
{
    if(spiller==2){
        player2=mittvalg.innerHTML;
        p2=valg;
        spiller=1;
        winner();
        oppdaterMeg()
    }
    else return;
}
function winner(){
    //1 er stein 2 er saks  3 er papir
    if((p1==1 && p2==1) || (p1==2 && p2==2) || (p1==3 && p2==3)){
        vinner="uavgjort";
    }
    
    if((p1==1 && p2==2) || (p1==2 && p2==3) || (p1==3 && p2==1)){
        vinner="Spiller 1 vant";
    }

    if((p1==2 && p2==1) || (p1==3 && p2==2) || (p1==1 && p2==3)){
        vinner="Spiller 2 vant";
    }
    
    spiller=1;
    oppdaterMeg();
}
function dennyefunksjonen(){
    p2=Math.floor(Math.random()*3+1);
    if(p2==1)player2=document.getElementById("c1").innerHTML;
    if(p2==2)player2=document.getElementById("c2").innerHTML;
    if(p2==3)player2=document.getElementById("c3").innerHTML;
    winner();
 }
