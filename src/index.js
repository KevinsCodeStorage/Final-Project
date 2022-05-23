import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import React from "react";
//import LoginForm from "../users/login";

var config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  dom: {
    createContainer: true,
  },
  scene: MyGame,
};



class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.html("../users/login.html");
    this.load.image('/assets/logo.png')
  }

  create() {
    this.makeStuff.image(400,600,'/assets/logo.png')
    this.add.dom(400, 600).createFromCache("../users/login.html");

    this.tweens.add({
      targets: element,
      y: 300,
      duration: 3000,
      ease: "Power3",
    });
  }
}

const game = new Phaser.Game(config);
