const createUnicorn = (id) => {
  let unicorn = document.createElement('div')
  unicornImage = new Image()
  unicornImage.src = 'https://upload.wikimedia.org/wikipedia/commons/7/70/Oftheunicorn.jpg'
  unicorn.appendChild(unicornImage)
  const width = 150
  unicorn.id = 'unicorn' + id
  unicorn.style.position = 'fixed'
  unicorn.style.zIndex = '9001'
  unicorn.style.top = ((window.innerHeight - width) / 2).toString() + 'px'
  unicorn.style.width = width.toString() +'px'
  unicorn.style.height = '150px'
  unicorn.style.webkitTransform = 'rotate(0deg)'
  document.body.appendChild(unicorn)
}

document.addEventListener('keypress', (event) => {
  if(event.key.toLowerCase() === 'u') prance()
})

function prance(){
  const unicornID = determineUnicornId()
  createUnicorn(unicornID)
  const unicorn = document.getElementById('unicorn' + unicornID)
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
  let rotationValue = parseInt(image.style.webkitTransform.split('(')[1].split('d')[0])
  if(rotationValue == 20){
    return 'counter clockwise'
  } else if(rotationValue == -20){
      return 'clockwise'
  } else{
    return direction
  }
}

const rotateImage = (image, direction) => {
  let rotationValue = parseInt(image.style.webkitTransform.split('(')[1].split('d')[0])
  rotationValue = (direction == 'clockwise') ? ++rotationValue : --rotationValue
  image.style.webkitTransform = 'rotate(' + rotationValue + 'deg)'
}

const determineUnicornId = () => {
  let id = 0
  while(document.getElementById('unicorn' + id)) id++
  return id
}
