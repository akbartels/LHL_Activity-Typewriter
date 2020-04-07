const sentence = "hello there from lighthouse labs";

for (const index in sentence) {
  setTimeout(() => {   
    process.stdout.write(sentence[index])
  }, index * 50)
}

setTimeout(() => {
  process.stdout.write("\n")
}, sentence.length * 50)

