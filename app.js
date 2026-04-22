function resize(){
   let h= document.getElementById('a').value
   let w= document.getElementById('b').value
    document.getElementById('image').style.height=`${h}px`
    document.getElementById('image').style.width=`${w}px`
}