function main() {
    let canvas = document.getElementById('canvas')
    if (!canvas) {
        console.log('Failed to retrieve canvas element')
        return
    }
    let ctx = canvas.getContext('2d')

    ctx.fillStyle = 'rgba(0, 0, 255, 1.0)' // Blue
    ctx.fillRect(0, 0, 512, 512)
}

main()

function main2() {
    var canvas = document.getElementById("canvas");

    // Check if the canvas element exists
    if (!canvas) {
        console.log('Failed to retrieve canvas element');
        return;
    }

    // Attempt to get a WebGL rendering context
    const gl = canvas.getContext("webgl2")

    // Check if WebGL is supported


    console.log(gl);

    gl.clearColor(0.8, 0.2, 1.0, 1.0); // Set the clear color (values between 0 and 1)

    gl.clear(gl.COLOR_BUFFER_BIT);
}

main2();
