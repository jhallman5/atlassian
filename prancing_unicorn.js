const createUnicorn = (id) => {
  let unicorn = document.createElement('div')
  unicornImage = new Image()
  unicornImage.src = 'https://upload.wikimedia.org/wikipedia/commons/7/70/Oftheunicorn.jpg'
  unicorn.appendChild(unicornImage)
  const width = 150
  unicorn.id = 'unicorn' + id
  unicorn.style.position = 'fixed'
  unicorn.style.zIndex = '9001'
  unicorn.style.top = ((window.innerHeight - width) / 2).toString() + 'px' // TODO
  unicorn.style.width = width.toString() +'px'
  unicorn.style.height = '150px'
  document.body.appendChild(unicorn)
  return unicorn.id
}

document.addEventListener('keypress', (key) => {
  if(key.keyCode == '117' || '85') prance()
})

function prance(){
  const unicorn = document.getElementById(createUnicorn(determineUnicornId()))
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

function determineUnicornId(){
  let id = 0
  while (document.getElementById('unicorn' + id)){
    id++
  }
  return id
}
