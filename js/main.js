const sideBarIcon = document.querySelector('.sidebar_icon')
const sideBar = document.querySelector('.sidebar_container')
const closeIcon = document.querySelector('.close_icon')
const liItems = document.querySelectorAll('.sidebar_container ul li')

// Here the sidebar hide and show starts 

sideBarIcon.addEventListener('click',()=>{
    sideBar.classList.add('sidebar_active')
})

closeIcon.addEventListener('click',()=>{
    sideBar.classList.remove('sidebar_active')
})

if(sideBar.scrollTop == "100px"){
    sideBar.style.background = "red"
}

liItems.forEach(item=>{
    item.addEventListener('click',()=>{
        sideBar.classList.remove('sidebar_active')
    })
})