console.log("Hello World");

process.stdout.write("Message : ");
process.stdin.on('readable', () => {
    const buffer = process.stdin.read();
    const msg = buffer.toString("utf8");

    console.log(`Le message est ${msg}`);
    
    process.stdout.write("Fin !");
})