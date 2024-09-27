h1=document.getElementById("k")


function calci(num){
    h1.value+=num
}
function calculate(){
    try{
        h1.value=eval(h1.value)
    }
    catch{
        h1.value="ERROR"
      
    }
}
function cal(){
    h1.value=""
    
}
function del(){
    h1.value=h1.value.slice(0,-1)
}
