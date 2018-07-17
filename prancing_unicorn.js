document.addEventListener('keypress', (event) => {
  if(event.key.toLowerCase() === 'u') prance()
})

// Creates a div with an image that moves left to right while rotating +/- 20deg.
const prance = () => {
  const unicorn = createUnicorn()
  const speed = 1
  let rotationDirection = 'clockwise'
  const movementInterval = setInterval(() => {
    let viewport = window.innerWidth
    let styleLeft = parseInt(unicorn.style.left.split('px')[0])
    if (styleLeft > viewport){
      document.body.removeChild(unicorn)
      clearInterval(movementInterval)
      return
    }
    styleLeft += speed
    unicorn.style.left = styleLeft.toString() + 'px'
    rotationDirection = setRotationDirection(unicorn, rotationDirection)
    rotateImage(unicorn,rotationDirection)
  }, 10)
}

// Helper Functions
/* I did the styles this way to keep attributes that arent changing together
 while potentially allowing the factory function to control size. */
const createUnicorn = () => {
  const UnicornStyles = {
    position: 'fixed',
    zIndex: '9001',
    transform: 'rotate(0deg)'
  }
  const height = 150
  const width = 150
  const unicorn = document.createElement('div')
  Object.assign(unicorn.style, UnicornStyles)
  unicorn.style.left = (-width).toString() + 'px'
  unicorn.style.top = ((window.innerHeight - height) / 2).toString() + 'px'
  unicorn.style.width = width.toString() + 'px'
  unicorn.style.height = height.toString() + 'px'
  const unicornImage = new Image()
  unicornImage.src = 'https://upload.wikimedia.org/wikipedia/commons/7/70/Oftheunicorn.jpg'
  unicorn.appendChild(unicornImage)
  document.body.appendChild(unicorn)
  return unicorn
}

const setRotationDirection = (image, direction) => {
  const rotationValue = parseInt(image.style.transform.split('(')[1].split('d')[0])
  if(rotationValue == 20){
    return 'counter clockwise'
  } else if(rotationValue == -20){
      return 'clockwise'
  } else{
    return direction
  }
}

const rotateImage = (image, direction) => {
  let rotationValue = parseInt(image.style.transform.split('(')[1].split('d')[0])
  rotationValue = (direction == 'clockwise') ? ++rotationValue : --rotationValue
  image.style.transform = 'rotate(' + rotationValue + 'deg)'
}
