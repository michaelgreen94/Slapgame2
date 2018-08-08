import Target from '../components/model/Target.js'
console.log('hello from SlapService.js');

let scareCrow = new Target('scarcrow', 100, '//placehold.it/200x200', 10, 15, 20, 50)

class SlapService {
  constructor() {

  }
  attack(type) {
    scareCrow.attack(type)
  }
  get Target() {
    return {
      health: scareCrow.health,
      name: scareCrow.name,
      hits: scareCrow.hits,
      img: scareCrow.img,
      dead: scareCrow.dead
    }
  }
}

export default SlapService