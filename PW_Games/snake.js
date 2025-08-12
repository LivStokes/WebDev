const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 400,
  backgroundColor: '#222',
  parent: 'game-container',
  physics: {
    default: 'arcade',
    arcade: { debug: false },
  },
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);

let snake;
let food;
let cursors;
let score = 0;
let scoreText;
let direction = 'RIGHT';
let nextDirection = 'RIGHT';

function preload() {}

function create() {
  snake = [];
  for (let i = 0; i < 3; i++) {
    snake.push(this.add.rectangle(200 - i * 10, 200, 10, 10, 0x00ff00));
  }

  food = this.add.rectangle(Phaser.Math.Between(0, 39) * 10, Phaser.Math.Between(0, 39) * 10, 10, 10, 0xff0000);

  cursors = this.input.keyboard.createCursorKeys();
  scoreText = this.add.text(10, 10, 'Score: 0', { fontSize: '16px', fill: '#fff' });

  this.time.addEvent({
    delay: 150,
    loop: true,
    callback: () => moveSnake.call(this)
  });
}

function update() {
  if (cursors.left.isDown && direction !== 'RIGHT') nextDirection = 'LEFT';
  else if (cursors.right.isDown && direction !== 'LEFT') nextDirection = 'RIGHT';
  else if (cursors.up.isDown && direction !== 'DOWN') nextDirection = 'UP';
  else if (cursors.down.isDown && direction !== 'UP') nextDirection = 'DOWN';
}

function moveSnake() {
  direction = nextDirection;

  const head = snake[0];
  let x = head.x;
  let y = head.y;

  if (direction === 'LEFT') x -= 10;
  else if (direction === 'RIGHT') x += 10;
  else if (direction === 'UP') y -= 10;
  else if (direction === 'DOWN') y += 10;

  // Check for collision with walls
  if (x < 0 || x >= 400 || y < 0 || y >= 400) return gameOver.call(this);

  // Check collision with self
  for (let part of snake) {
    if (part !== head && part.x === x && part.y === y) return gameOver.call(this);
  }

  // Add new head
  const newHead = this.add.rectangle(x, y, 10, 10, 0x00ff00);
  snake.unshift(newHead);

  // Check if eating food
  if (x === food.x && y === food.y) {
    food.x = Phaser.Math.Between(0, 39) * 10;
    food.y = Phaser.Math.Between(0, 39) * 10;
    score += 10;
    scoreText.setText('Score: ' + score);
  } else {
    // Remove tail
    snake.pop().destroy();
  }
}

function gameOver() {
  this.scene.restart();
  score = 0;
  direction = 'RIGHT';
  nextDirection = 'RIGHT';
}

// Background color change

const btn = document.getElementById('cta-btn');
const hero = document.querySelector('.hero');

btn.addEventListener('click', () => {
  const colors = ['#1e3c72', '#2a5298', '#ff5f6d', '#ffc371', '#4b6cb7', '#182848'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  hero.style.background = `linear-gradient(to right, ${randomColor}, #000)`;
});

// sculpture

<script>
  const sculpture = document.querySelector('.sculpture');
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    sculpture.style.transform = `rotateX(${y * 40}deg) rotateY(${x * 40}deg)`;});
</script>
