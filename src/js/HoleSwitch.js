import goblin from '../img/goblin.png';

export default class HoleSwitch {
  constructor(holes) {
    if (holes < 2) {
      throw new Error('Need at least 2 holes');
    }

    this.holes = holes;
    this.activeHole = null;
    this.holeElem = this.createHoleImg();
    this.holeMoveInterval = null;
  }

  createHoleImg() {
    const goblinImg = document.createElement('img');
    goblinImg.className = 'goblin-image';
    goblinImg.src = goblin;
    return goblinImg;
  }

  generateNumber() {
    let index = this.activeHole;
    do {
      index = Math.floor(Math.random() * this.holes);
    } while (index === this.activeHole);
    return index;
  }

  moveToHole(index) {
    const holesList = document.querySelectorAll('.hole');
    holesList[index].appendChild(this.holeElem);
    this.activeHole = index;
  }

  start() {
    const changeHole = () => {
      const index = this.generateNumber();
      this.moveToHole(index);
    };
    changeHole();
    this.holeMoveInterval = setInterval(changeHole, 1000);
  }
}
