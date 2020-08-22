document.getElementById('submitbut').addEventListener('click',function(e){
e.preventDefault();
if(document.getElementById('name').value!=''){
    document.getElementById('userdetails').style.display='none'
}
else{
    alert('Fill valid name')
}
})
document.getElementById('startbut').disabled=true;

document.getElementById('terms').addEventListener('change',function(){
    console.log(document.getElementById('terms').checked);
    if(document.getElementById('terms').checked){
        document.getElementById('startbut').disabled=false;
    }
    else{
        document.getElementById('startbut').disabled=true;
  
    }
})
