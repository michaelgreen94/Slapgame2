console.log('hello from Target.js');

class Target {
  constructor(name = '', health = 100, img = '', slapDmg, punchDmg, kickDmg, specialDmg) {
    this.name = name
    this.health = health
    this.img = img
    this.damages = {
      slap: slapDmg,
      punch: punchDmg,
      kick: kickDmg,
      special: specialDmg
    }
    this.dead = false
    this.hits = 0
  }

  attack(type) {
    if (this.dead) {
      return
    }
    if (this.damages[type]) {
      this.health -= this.damages[type]
      this.hits++
      if (this.health <= 0) {
        this.health = 0
        this.dead = true
      }
    }
  }

}


export default Target