import SlapController from './app/components/SlapController.js'
console.log('hello from main.js');

class App {
  constructor() {
    this.controllers = {
      mySlapController: new SlapController()
    }
  }
}

window.app = new App()
