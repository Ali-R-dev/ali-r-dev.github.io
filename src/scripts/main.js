
// event listners for sidebar show
document.querySelector('#btnSideBar').addEventListener('click',function(e) {
    document.querySelector('#sideBar-container').classList.remove('invisible')
})
// event listners for sidebar hide
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
// -----------------------------------------------------------------------------
//  title animation
let anim=[... document.querySelectorAll('#heroTitle path')].reverse()
    anim.forEach((p,i )=> {
                let tp=p.getTotalLength()
                p.style.strokeDashoffset = tp;
                p.style.strokeDasharray=tp;
                p.style.animation= `line-anim 2s ease forwards ${i*0.2}s`;
                // toFill ${i*0.5}s ease forwards ${i*0.7}s`

            })


//  curser follow animation
var cursor = document.querySelector('.cursor');
cursor.style.position = 'fixed';

function moveCircle(e) {
    setTimeout(() => {
        cursor.style.left = (e.clientX - cursor.offsetWidth / 2) + 'px';
        cursor.style.top = (e.clientY - cursor.offsetHeight / 2) + 'px';
    }, 100);
}

document.addEventListener('mousemove', moveCircle);

// wave effect
function waveEffect(e) {
    var wave = document.createElement('div');
    wave.style.border = '1px solid #8b5cf6';
    wave.style.height = '50px';
    wave.style.width = '50px';
    wave.style.borderRadius = '50%';
    wave.style.position = 'fixed';
    wave.style.left = (e.clientX - 25) + 'px';
    wave.style.top = (e.clientY - 25) + 'px';
    wave.style.animation = 'wave 0.5s linear 0s';
    document.body.appendChild(wave);
    setTimeout(function() {
        document.body.removeChild(wave);
    }, 500);
}

document.addEventListener('click', waveEffect);
