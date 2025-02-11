let search=document.querySelector(".search")
let add=document.querySelector(".add")
let tasks=document.querySelector(".tasks")
var removes=""
function update(){
    return document.querySelectorAll(".remove")
}
add.addEventListener("click",()=>{
    if(search.value!=""){
    console.log(search.value)
    tasks.innerHTML+=`<div class="task">
            ${search.value}
            <div class="remove">
                    Remove
            </div>
        </div>`
    search.value=""
    removes=update()
    removes.forEach((ele)=>{
        ele.addEventListener("click",()=>{
            console.log("pressed")
            ele.parentNode.style.display="none"
        })
    })
}
})
search.addEventListener("keypress",(variable)=>{
    if(variable.key=="Enter"){
        if(search.value!=""){

        console.log(search.value)
        tasks.innerHTML+=`<div class="task">
                ${search.value}
                <div class="remove">
                        Remove
                </div>
            </div>`
        search.value=""
        removes=update()
        removes.forEach((ele)=>{
            ele.addEventListener("click",()=>{
                console.log("pressed")
                ele.parentNode.style.display="none"
            })
        })
    }
    }
})

