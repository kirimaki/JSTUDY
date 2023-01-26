const apple = {
    name: 'apple',
    display: function() {
        console.log(`${this.name}`)
    },
}

console.log(apple.display)
apple.display();