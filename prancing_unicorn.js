document.addEventListener('keypress', (event) => {
  if(event.key.toLowerCase() === 'u') prance()
})

// Creates a div with a unicorn image that moves across the screen while rotating +/- 20.
const prance = () => {
  const unicorn = createUnicorn(determineUnicornId())
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
  }, 10)
}

// Helper Functions
const createUnicorn = (id) => {
  const UnicornStyles = {
    position: 'fixed',
    zIndex: '9001',
    webkitTransform: 'rotate(0deg)'
  }
  const height = 150
  const width = 150
  let unicorn = document.createElement('div')
  Object.assign(unicorn.style, UnicornStyles)
  unicorn.id = 'unicorn' + id
  unicorn.style.left = (-width).toString() + 'px'
  unicorn.style.top = ((window.innerHeight - height) / 2).toString() + 'px'
  unicorn.style.width = width.toString() + 'px'
  unicorn.style.height = height.toString() + 'px'
  unicornImage = new Image()
  unicornImage.src = 'https://upload.wikimedia.org/wikipedia/commons/7/70/Oftheunicorn.jpg'
  unicorn.appendChild(unicornImage)
  document.body.appendChild(unicorn)
  return unicorn
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
