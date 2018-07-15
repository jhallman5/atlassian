const unicorn = document.createElement('div')
unicorn.setAttribute('id','unicorn')
unicorn.style.position = 'absolute'
unicorn.style.zIndex = '9001'
unicorn.style.top = (window.innerHeight / 2).toString() + 'px' // TODO
unicorn.style.left = '0px'
unicorn.style.backgroundColor = 'blue'
unicorn.style.width = '100px'
unicorn.style.height = '100px'
document.body.appendChild(unicorn)

document.addEventListener('keypress', (key) => {
  if(key.keyCode == '117' || '85') prance()
})

function prance(){
  let unicron = document.getElementById('unicorn')
  const speed = 1
  setInterval(function(){
    let styleLeft = parseInt(unicorn.style.left.split('px')[0])
    styleLeft += speed
    unicorn.style.left = styleLeft.toString() + 'px'
  }, 3)
  unicorn.style.backgroundColor = 'red'
}
