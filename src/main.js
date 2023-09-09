function main() {
  var canvas = document.getElementById('canvas')
  if (!canvas) {
    console.log('Failed to retrieve canvas element')
    return
  }
  var ctx = canvas.getContext('2d')

  ctx.fillStyle = 'rgba(0, 0, 255, 1.0)' // Blue
  ctx.fillRect(0, 0, 512, 512)
}

main()