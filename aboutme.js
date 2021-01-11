// GitHub Repo: https://github.com/ThomasK0lasa/emersoft-aboutme

class AnimateText {

  constructor() {
    this.cursorPos = 0;
  }

  throwWords = (text, cursorSet = false) => {
    if (cursorSet)
      this.cursorPos = text.length;
    const newLine = /\n/.test(text);
    const words = text.slice(0,-1).split(' ');
    return new Promise((resolve) => {
      for (let i = 0; i < words.length + 1; i++) {
        setTimeout(() => {
          if (i < words.length)
            process.stdout.write(`${words[i]} `);
          else {
            if (newLine)
              process.stdout.write(`\n`);
            resolve();
          }
        }, 200 * i);
      }
    })
  }

  throwLetters = (text, cursorSet = false) => {
    if (cursorSet)
      this.cursorPos = text.length;
    return new Promise((resolve) => {
      for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
          process.stdout.write(text[i]);
          if (i === text.length - 1)
            resolve();
        }, 125 * i);
      }
    })
  }

  dots(count) {
    return new Promise((resolve) => {
      function animateDots() {
        for (let i = 0; i < 3; i++) {
          setTimeout((i) => {
            process.stdout.write('.');
          }, 500 * i);
        }
      }

      if (count) {
        for (let i = 0; i < count + 1; i++) {
          setTimeout(() => {
            if (i === 0) {
              animateDots();
            } else if (i < count) {
              process.stdout.cursorTo(this.cursorPos);
              process.stdout.write('   ');
              process.stdout.cursorTo(this.cursorPos);
              setTimeout(() => {
                animateDots();
              }, 500);
            } else {
              this.cursorPos += 3;
              resolve();
            }
          }, 2000 * i)
        }
      } else {
        resolve();
      }
    })
  }

  cursorSet = {
    position: (pos) => {
      this.cursorPos=pos;
      process.stdout.cursorTo(pos);
    },
    start: () => {
      this.cursorPos=0;
      process.stdout.cursorTo(0);
    },
    nextLine: (count = 1) => {
      for (let i = 0; i < count; i++)
        process.stdout.write('\n');
    }
  }
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}

const animate = new AnimateText();

(async () => {
  await animate.throwLetters(`Hello Emersoft!\n`);
  await wait(1000);
  animate.cursorSet.nextLine();
  await animate.throwLetters(`So You would like to see me speaking?\n`);
  await animate.throwLetters(`And You give me 24h for 1 minute video?\n`);
  await animate.throwLetters(`Not considering if I can be busy or shy. :(\n`);
  await wait(1000);
  await animate.throwLetters(`That's sad`, true);
  await animate.dots(1);
  await wait(1500);
  await animate.throwLetters(` I am kidding. It's ok. :)\n`);
  animate.cursorSet.nextLine();
  await animate.throwLetters(`I even wrote a cringe poem/rap for You.\n`);
  await animate.throwLetters(`Which was supposed to be connected with video. :D\n`);
  await animate.throwLetters(`Here we go`, true);
  await animate.dots(3);
  await animate.throwLetters(` Oh wait... Lets play some music.\n`);
  animate.cursorSet.position(0);
  animate.cursorSet.nextLine();
  animate.cursorSet.start();
  await animate.dots(3);
  animate.cursorSet.start();
  await animate.throwLetters(`If You call me in the middle of the night\n`);
  await animate.throwLetters(`I am always ready to help You out\n`);
  await animate.throwLetters(`[Let's go a little faster]\n`);
  await animate.throwWords(`You see, that’s my place,\n`);
  await animate.throwWords(`This is where I work all days\n`);
  animate.cursorSet.nextLine();
  await wait(1000);
  await animate.throwWords(`You ask why, I have 2 screens,\n`);
  await animate.throwWords(`Cause I am versatile, and I do many things\n`);
  await animate.throwWords(`Did You see how Hollywood hackers code,\n`);
  await animate.throwWords(`I don’t code like this at all,\n`);
  animate.cursorSet.nextLine();
  await wait(1000);
  await animate.throwWords(`I am more like StackOverflow\n`);
  await animate.throwWords(`MDN docs and bookshelf stocks\n`);
  await animate.throwWords(`So there’s two more things\n`);
  await animate.throwWords(`One: Problem solving gives me wings\n`);
  animate.cursorSet.nextLine();
  await wait(1000);
  await animate.throwWords(`And two: I can be broken and I can shiver.\n`);
  await animate.throwWords(`But I always freakin deliver.\n`);
  animate.cursorSet.nextLine();
  await animate.throwWords(`For Emersoft\n`);
  await animate.throwLetters(`Eminem`);
  await wait(750);
  animate.cursorSet.start();
  await animate.throwLetters(`Ekhm  `);
  await wait(750);
  animate.cursorSet.start();
  await animate.throwLetters(`Tomasz Kolasa`);
  await wait(5000);
})();