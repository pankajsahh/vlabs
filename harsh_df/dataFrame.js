
const next= document.querySelector('.nxt');
let count= 1;

document.querySelector('.an--1').style.background='cyan';
document.querySelector(`.det--1`).style.display= 'block';
document.querySelector('.rw--1').style.background= 'yellow';
next.addEventListener('click',function(e){
    e.preventDefault();
    if(count===17){
        count=0;
        next.textContent= 'Next';
        document.querySelector('.rw--12').style.background= 'none';
        document.querySelector('.rw--1').style.background= 'yellow';
    }else if(count===16){
        next.textContent= 'Reset';
    }else{
        next.textContent= 'Next';
    };
    count++;
    document.querySelector(`.det--${count}`).style.display= 'block';
    document.querySelector(`.an--${count}`).style.background= 'cyan';
    if(count<18){
        if(count===1){
            document.querySelectorAll('.tblDt').forEach(e=>e.style.opacity=0);
            document.querySelector(`.an--17`).style.background= 'none';
            document.querySelector(`.det--17`).style.display= 'none';
        }else{
            if(count>2 && count<6){
                document.querySelector(`.dt--${count}`).style.opacity=1;
                document.querySelector(`.dt--${count}`).style.background='red';
            }else if(count===6){
                document.querySelector(`.dt--${3}`).style.background='none';
                document.querySelector(`.dt--${4}`).style.background='none';
                document.querySelector(`.dt--${5}`).style.background='none';
            }
            else if(count>7 && count<11){
                document.querySelector(`.dt--${count}`).style.opacity=1;
                document.querySelector(`.dt--${count}`).style.background='red';
            }else if(count===11){
                document.querySelector(`.dt--${8}`).style.background='none';
                document.querySelector(`.dt--${9}`).style.background='none';
                document.querySelector(`.dt--${10}`).style.background='none';
            }
            else if(count>12 && count<16){
                document.querySelector(`.dt--${count}`).style.opacity=1;
                document.querySelector(`.dt--${count}`).style.background='red';
            }
            else if(count===16){
                document.querySelector(`.dt--${13}`).style.background='none';
                document.querySelector(`.dt--${14}`).style.background='none';
                document.querySelector(`.dt--${15}`).style.background='none';
            }
            document.querySelector(`.an--${count-1}`).style.background= 'none';
            document.querySelector(`.det--${count-1}`).style.display= 'none';
        }
        if(count===7){
            document.querySelector('.rw--1').style.background= 'none';
            document.querySelector('.rw--7').style.background= 'yellow';
        }else if(count===12){
            document.querySelector('.rw--7').style.background= 'none';
            document.querySelector('.rw--12').style.background= 'yellow';
        }
    }
});



// quizz pankaj 
function selected(prop) {
    if(prop.className!='wrng-ans'){
        prop.style.cssText="background: #26f737ab; border-radius: 12px; padding-left: 20px; padding-right: 20px;"
    }else{
        prop.style.cssText="background: #f72626ab; border-radius: 12px; padding-left: 20px; padding-right: 20px;"
        setTimeout(()=>{
            prop.style.cssText="background: inital;  border: 1px solid black; margin: 5px 0; border-radius: 22px; padding: 5px 15px;"
        },1000)
    }
}


//copy text code

function Copytext(e){
    navigator.clipboard.writeText(e.innerText);
    ShowTost()
}


// snack tost JS

function ShowTost(e) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
 