buttons=document.querySelectorAll(".item2")
boxes=document.querySelectorAll('.box')
buttons.forEach(button => {
    button.addEventListener('click',function(){
        if(button.innerHTML=="Pictures")
        {
            reElse(button)
            boxes.forEach(box=>{
                z=button.className.split(' ')
                y=box.className.split(' ')
                if(z[0]==y[0])
                {
                    rerebox(box)
                }       
            })
        } 
        if(button.innerHTML=="Staff")
        {
            reElse(button)
            boxes.forEach(box=>{
                z=button.className.split(' ')
                y=box.className.split(' ')
                if(z[0]==y[0])
                {
                    rerebox(box)
                }       
            })
        } 
        if(button.innerHTML=="Characters")
        {
            reElse(button)
            boxes.forEach(box=>{
                z=button.className.split(' ')
                y=box.className.split(' ')
                if(z[0]==y[0])
                {
                    rerebox(box)
                }       
            })            
        }
        if(button.innerHTML=="Recommendations")
        {
            reElse(button)
            boxes.forEach(box=>{
                z=button.className.split(' ')
                y=box.className.split(' ')
                if(z[0]==y[0])
                {
                    rerebox(box)
                }       
            })
        } 
        if(button.innerHTML=="Reviews")
        {
            reElse(button)
            boxes.forEach(box=>{
                z=button.className.split(' ')
                y=box.className.split(' ')
                if(z[0]==y[0])
                {
                    rerebox(box)
                }       
            })
        }       
    })    
});
function reElse(name){
    buttons.forEach(button=>{
        if(button!=name){
            button.classList.remove('visible')
        }
        else{
            button.classList.add('visible')
        }
    }) 
}
function rerebox(names){
    boxes.forEach(box=>{
        if(box!=names){
            box.classList.add('invisiblebox')
        }
        else{
            box.classList.remove('invisiblebox')
        }
    }) 
}

