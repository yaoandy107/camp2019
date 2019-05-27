/* eslint-disable no-func-assign */
function Setup (canvas) {
  // const canvas = document.getElementById('background_dots')
  const canvas2 = document.createElement('canvas')

  const ctx = canvas.getContext('2d')
  const ctx2 = canvas2.getContext('2d')

  // fix ellipse on ie11
  function drawEllipse (context, x, y, w, h) {
    context.ellipse(x, y, w, h, 0, 0, Math.PI * 2, false)
  }

  if (typeof ctx.ellipse !== 'function') {
    drawEllipse = function (context, cx, cy, rx, ry) {
      context.save() // save state
      context.beginPath()
      context.translate(cx - rx, cy - ry)
      context.scale(rx, ry)
      context.arc(1, 1, 1, 0, 2 * Math.PI, false)
      context.restore() // restore to original state
      context.stroke()
    }
  }

  // document.body.appendChild(canvas)

  let blurRadius = 50
  let scalePixel = 200

  // ___________________get mouse input___________________

  // let mouse = {
  //   down: false,
  //   x: 0,
  //   y: 0
  // };
  // canvas.addEventListener("mousemove", event => {
  //   mouse.x = event.clientX;
  //   mouse.y = event.clientY;
  // });
  // canvas.addEventListener("mousedown", event => {
  //   mouse.down = true;
  //   // console.log(mouse);
  // });
  // canvas.addEventListener("mouseup", event => {
  //   mouse.down = false;
  // });

  // ___________________animation loop ___________________

  let speedFactor = 1

  let cycleTime = 0
  let cycleStep = 0.005

  function FadeEllipse (cycleOffset) {
    this.r = 0
    this.g = 0
    this.b = 0

    this.x = 0
    this.y = 0

    this.dx = 0
    this.dy = 0
    this.radius = 0.5

    this.cycleOffset = cycleOffset

    this.lastCycle = 0

    this.update = function () {
      let cycle = (cycleTime + this.cycleOffset) % 1
      if (cycle < this.lastCycle) this.randomize()
      this.lastCycle = cycle

      let alpha = Math.sin(cycle * Math.PI) * 0.3
      ctx2.fillStyle = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + alpha + ')'
      ctx2.strokeStyle = 'transparent'
      ctx2.beginPath()

      drawEllipse(ctx2,
        this.x * canvas2.width, this.y * canvas2.height,
        this.radius * canvas2.width, this.radius * canvas2.height)

      ctx2.fill()
      this.x += this.dx * speedFactor
      this.y += this.dy * speedFactor
    }

    this.randomize = function () {
      this.x = Math.random()
      this.y = Math.random()
      this.dx = (Math.random() - 0.5) * 0.002
      this.dy = (Math.random() - 0.5) * 0.002
      this.radius = Math.random() * 0.4 + 0.1

      this.r = Math.floor(Math.random() * 256)
      this.g = Math.floor(Math.random() * 128)
      this.b = Math.floor(Math.random() * 256)
    }

    this.randomize()
  }

  let ellipses = []
  for (var i = 0; i < 5; i++) ellipses.push(new FadeEllipse(i / 5))

  let lastScroll = window.pageYOffset
  // window.addEventListener('scroll', function () {
  //   let delta = window.pageYOffset - lastScroll
  //   lastScroll = window.pageYOffset
  //   speedFactor += Math.abs(delta) * 0.04
  // })

  return function cycle () {
    ctx.save()
    const scale = window.devicePixelRatio
    canvas2.width = (canvas.width = window.innerWidth * scale + blurRadius * 2) / scalePixel
    canvas2.height = (canvas.height = window.innerHeight * scale + blurRadius * 2) / scalePixel
    ctx.scale(scale, scale)

    let delta = window.pageYOffset - lastScroll
    lastScroll = window.pageYOffset
    speedFactor += Math.abs(delta) * 0.01

    cycleTime += cycleStep * speedFactor
    if (cycleTime > 1) {
      cycleTime = 0
    }

    speedFactor += (1 - speedFactor) * 0.2

    ctx2.clearRect(0, 0, canvas2.width, canvas2.height)

    for (var i in ellipses) ellipses[i].update()
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // ctx.filter = 'blur(' + blurRadius + 'px)'
    ctx.drawImage(canvas2, 0, 0, canvas2.width, canvas2.height,
      0 - blurRadius,
      0 - blurRadius,
      canvas.width + blurRadius * 2,
      canvas.height + blurRadius * 2)

    // requestAnimationFrame(cycle)
    ctx.restore()
  }
  // requestAnimationFrame(cycle)
}

export default Setup
