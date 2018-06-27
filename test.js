const KeyLock = require('./index')

function testPassword() {
    let kl = new KeyLock('some password')
    let locked = kl.lock('hi')
    let unlocked = kl.unlock(locked)
    console.log(locked, unlocked)
    return unlocked === 'hi'
}

function testRandom() {
    let kl = new KeyLock()
    let locked = kl.lock('hi')
    let unlocked = kl.unlock(locked)
    console.log(locked, unlocked)
    return unlocked === 'hi'
}

function testOptions() {
    let kl = new KeyLock({algorithm: 'aes192'})
    let locked = kl.lock('hi')
    let unlocked = kl.unlock(locked)
    console.log(locked, unlocked)
    return unlocked === 'hi'
}

console.log(testPassword() && testRandom() && testOptions())