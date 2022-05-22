import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import React from "react";

import LoginForm from "../users/login";

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.script('../users/login')
  }

  create ()
  {
  
      this.add.script('../users/login');
  


      this.tweens.add({
          targets: element,
          y: 300,
          duration: 3000,
          ease: 'Power3'
      });
  }
}
const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: MyGame,
};

const game = new Phaser.Game(config);
