var health = 100
var kitty = 'Kitty'
var hits = 0
var level = 1

let damage = [{
  type: 'slap',
  value: 1
}, {
  type: 'punch',
  value: 5
},
{
  type: 'kick',
  value: 10
}
]

function battle(type) {

  let damageType = damage.find(d => d.type === type)
  console.log(damageType)

  health -= damageType.value
  hits++
  console.log('hits', hits)
  // alert(health)
  // console.log('health', health)
  update()
  reset()
}

function update() {
  document.getElementById('health').innerText = ` ${health}`
  document.getElementById('hits').innerText = ` ${hits}`
  document.getElementById('kitty').innerText = ` ${kitty}`
}

function reset() {
  if (health === 0) {
    kitty = document.getElementById('kitty').innerText = ` Dead Kitty`
  } else if (health < 0) {
    level++
    health = 100
    document.getElementById('health').innerText = ` ${health}`
    kitty = document.getElementById('kitty').innerText = ` Kitty ${level}`
    hits = 0
    hits = document.getElementById('hits').innerText = ` ${hits}`
    document.getElementById('img').src = `http://thiscatdoesnotexist.com`
  }
}

// function draw() {

// }