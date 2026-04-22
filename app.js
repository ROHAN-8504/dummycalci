function calci(){
    let a=document.getElementById('value1').value
   let b= document.getElementById('value2').value
   let result=parseInt(a)+parseInt(b);
   document.getElementById('res').innerText=result
}