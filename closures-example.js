let allItems = document.getElementsByClassName("item");
console.log(allItems[0]);
for(let i =0 ; i< allItems.length ; i++){
    alert(allItems[i]);
    allItems[i].addEventListener("click",function(){
        alert('ok')
       /*  if(this.className.indexOf('selected') < 0)
        {
            this.className += ' selected';
        }else{
            this.className = this.className.replace('selected','')
        } */
    })
}