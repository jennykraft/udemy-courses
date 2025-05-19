'use strict';
import { Game } from './game.js';

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let playing = true;
const game = new Game(5); // 5 player

function render() {
    const state = game.gameState;
    const activePlayer = state.players[state.currentPlayerIndex];

    document.getElementById('name--0').textContent = activePlayer.name;
    document.getElementById('score--0').textContent = activePlayer.score;
    document.getElementById('current--0').textContent = activePlayer.currentScore;

    const list = document.getElementById('other-players');
    list.innerHTML = '';
    state.players.forEach((p, i) => {
        if (i === state.currentPlayerIndex) return;
        const row = document.createElement('div');
        row.className = 'player-summary';
        row.innerHTML =
            `<strong>${p.name}</strong><span class="dots"></span>${p.score}`;
        list.appendChild(row);
    });

    if (state.diceValue) {
        diceEl.src = `dice-${state.diceValue}.png?${Date.now()}`;
        diceEl.classList.remove('hidden');
    } else {
        diceEl.classList.add('hidden');
    }
}

btnRoll.addEventListener('click', () => {
    if (!playing) return;
    game.rollDice();
    render();
});

btnHold.addEventListener('click', () => {
    if (!playing) return;
    const won = game.hold();
    if (won) {
        playing = false;
        diceEl.classList.add('hidden');
        document.getElementById('active-player-panel')
            .classList.add('player--winner');
    }
    render();
});

btnNew.addEventListener('click', () => {
    game.resetGame();
    playing = true;
    document.getElementById('active-player-panel')
        .classList.remove('player--winner');
    render();
});

render();
