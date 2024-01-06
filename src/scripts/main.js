

document.querySelector('#btnSideBar').addEventListener('click',function(e) {
    document.querySelector('#sideBar-container').classList.remove('invisible')
})
document.querySelector('#btnClose').addEventListener('click',function(e) {
    document.querySelector('#sideBar-container').classList.add('invisible')
    
})
document.querySelectorAll('#mbl-nav .nav-item-title')
.forEach(x=>x.addEventListener('click',()=>{
    document.querySelector('#sideBar-container').classList.add('invisible')
}))

    
document.querySelector('#overlay').addEventListener('click',function(e) {
    document.querySelector('#sideBar-container').classList.add('invisible')
    
})
// class="nav-item-title"