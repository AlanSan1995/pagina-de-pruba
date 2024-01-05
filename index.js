const homeCarrucelContainer = document.getElementById('homeCarrucelContainer')

const carrucelControl1 = document.getElementById('carrucelControl1')

const carrucelControl2 = document.getElementById('carrucelControl2')

const carrucelControl3 = document.getElementById('carrucelControl3')


let imgWidth = 100

let imgIndex = 0

const updateCarrucel = ()=>{
    const tranlateValue = -imgIndex * imgWidth
    homeCarrucelContainer.style.transform = `translateX(${tranlateValue / 3}%)`
} 
function updateStyles() {
    switch (imgIndex) {
        case 0:
            carrucelControl1.classList.toggle('home_carrucel_control_active')
            break;
        case 1:
            carrucelControl2.classList.toggle('home_carrucel_control_active')
            
            break;
        case 2:
            carrucelControl3.classList.toggle('home_carrucel_control_active')
        
            break;
    }
}
updateStyles()
setInterval(() => {
    updateStyles()
    imgIndex = (imgIndex + 1) % 3
    updateCarrucel()
    updateStyles()
}, 5000);

carrucelControl1.onclick = ()=>{
    updateStyles()
    imgIndex = 0
    updateCarrucel()
    updateStyles()
}
carrucelControl2.onclick = ()=>{
    updateStyles()
    imgIndex = 1
    updateCarrucel()
    updateStyles()
}
carrucelControl3.onclick = ()=>{
    updateStyles()
    imgIndex = 2
    updateCarrucel()
    updateStyles()
}

const productCarrucelContainer = document.getElementById('productCarrucelContainer')

const controlProductCarrucelLeft = document.getElementById('controlProductCarrucelLeft')

const controlProductCarrucelRight = document.getElementById('controlProductCarrucelRight')

let productCardWidth = 100

let productCardIndex = 0

const updateProductCarrucel = ()=>{
    const tranlateValue = -productCardIndex * productCardWidth
    productCarrucelContainer.style.transform = `translateX(${tranlateValue / 3}%)`
} 

setInterval(() => {
    productCardIndex = (productCardIndex + 1) % 3
    updateProductCarrucel()
}, 5000);

controlProductCarrucelRight.onclick = ()=>{
    productCardIndex = (productCardIndex + 1) % 3
    updateProductCarrucel()
}
controlProductCarrucelLeft.onclick = ()=>{
    productCardIndex = ( productCardIndex == 0 ? 2 : productCardIndex - 1) % 3
    updateProductCarrucel()
}

