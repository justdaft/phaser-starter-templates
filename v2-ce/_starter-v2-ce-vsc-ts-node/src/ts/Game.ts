﻿import BootState from "./States/Boot";
import PreloaderState from "./States/Preloader";
import MainMenuState from "./States/MainMenu";

export default class Game extends Phaser.Game {
	// Define static/constant variables here, as needed. Reference later by Game.SOME_VARIABLE.
	//static SOME_VARIABLE: number = 10;

	constructor() {
		console.log((new Date()).toISOString() + " : Entered Game constructor()");

		// Update the width (800) and height (600) accordingly.
		super(800, 600, Phaser.AUTO, "content");

		// Add the game states.
		this.state.add(BootState.Name, BootState);
		this.state.add(PreloaderState.Name, PreloaderState);
		this.state.add(MainMenuState.Name, MainMenuState);

		// Start the initial game state.
		this.state.start(BootState.Name);
	}
}

window.onload = () => {
	const game = new Game();
};
