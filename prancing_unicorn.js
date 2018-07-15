const createUnicorn = () => {
  let unicorn = document.createElement('div')
  unicorn.id = 'unicorn'
  unicorn.style.position = 'absolute'
  unicorn.style.zIndex = '9001'
  unicorn.style.top = (window.innerHeight / 2).toString() + 'px' // TODO
  unicorn.style.backgroundColor = 'blue'
  unicorn.style.width = '100px'
  unicorn.style.height = '100px'
  document.body.appendChild(unicorn)
}

document.addEventListener('keypress', (key) => {
  if(key.keyCode == '117' || '85') prance()
})

function prance(){
  createUnicorn()
  const unicorn = document.getElementById('unicorn')
  styleWidth = unicorn.offsetWidth
  unicorn.style.left = (-styleWidth).toString() + 'px'
  const speed = 1
  let rotationDirection = 'clockwise'
  const interval = setInterval(function(){
    let viewport = window.innerWidth
    let styleLeft = parseInt(unicorn.style.left.split('px')[0])
    if (styleLeft > viewport){
      document.body.removeChild(unicorn)
      clearInterval(interval)
      return
    }
    styleLeft += speed
    rotationDirection = setRotationDirection(unicorn, rotationDirection)
    rotateImage(unicorn,rotationDirection)
    unicorn.style.left = styleLeft.toString() + 'px'
  }, 3)
}

function setRotationDirection(image, direction){
  if(!image.style.webkitTransform){
    image.style.webkitTransform = 'rotate(0deg)'
  }
  let rotationValue = parseInt(image.style.webkitTransform.split('(')[1].split('d')[0])
  if(rotationValue == 20){
    return 'counter clockwise'
  } else if(rotationValue == -20){
      return 'clockwise'
  } else{
    return direction
  }
}

function rotateImage(image, direction){
  let rotationValue = parseInt(image.style.webkitTransform.split('(')[1].split('d')[0])
  if(direction == 'clockwise'){
    rotationValue++
  }else{
    rotationValue--
  }
  image.style.webkitTransform = 'rotate(' + rotationValue + 'deg)'
}
