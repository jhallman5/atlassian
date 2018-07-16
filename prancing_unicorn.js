document.addEventListener('keypress', (event) => {
  if(event.key.toLowerCase() === 'u') prance()
})

const prance = () => {
  const unicornID = determineUnicornId()
  createUnicorn(unicornID)
  const unicorn = document.getElementById('unicorn' + unicornID)
  const unicornWidth = unicorn.style.width.split('px')[0]
  unicorn.style.left = (-unicornWidth).toString() + 'px'
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
    unicorn.style.left = styleLeft.toString() + 'px'
    rotationDirection = setRotationDirection(unicorn, rotationDirection)
    rotateImage(unicorn,rotationDirection)
  }, 3)
}

// Helper Functions
const createUnicorn = (id) => {
  let unicorn = document.createElement('div')
  const width = 150
  unicorn.id = 'unicorn' + id
  unicorn.style.position = 'fixed'
  unicorn.style.zIndex = '9001'
  unicorn.style.top = ((window.innerHeight - width) / 2).toString() + 'px'
  unicorn.style.width = width.toString() +'px'
  unicorn.style.height = '150px'
  unicorn.style.webkitTransform = 'rotate(0deg)'
  unicornImage = new Image()
  unicornImage.src = 'https://upload.wikimedia.org/wikipedia/commons/7/70/Oftheunicorn.jpg'
  unicorn.appendChild(unicornImage)
  document.body.appendChild(unicorn)
}

const determineUnicornId = () => {
  let id = 0
  while(document.getElementById('unicorn' + id)) id++
  return id
}

const setRotationDirection = (image, direction) => {
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
