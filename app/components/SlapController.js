import SlapService from './SlapService.js'
console.log('hello from SlapController.js');

//Private
let mySlapService = new SlapService();

function draw() {
  let Target = mySlapService.Target
  let template = `
  <div>
    <div>
      <img src="${Target.img}" alt="target img" />
    </div>
    <h2>${Target.name}</h2>
    <h3>Health: ${Target.health}</h3>
    <h3>Hits: ${Target.hits}</h3>
  </div>
  <div>
    <button onclick="app.controllers.mySlapController.attack('slap')">Slap</button>
    <button onclick="app.controllers.mySlapController.attack('punch')">Punch</button>
    <button onclick="app.controllers.mySlapController.attack('kick')">Kick</button>
    <button onclick="app.controllers.mySlapController.attack('special')">Haduoken</button>
  </div>`

  document.getElementById('target').innerHTML = template
}

//Public
class SlapController {
  constructor() {
    draw()
  }

  attack(type) {
    mySlapService.attack(type)
    draw()
  }
}

export default SlapController