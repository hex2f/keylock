# KeyLock
#### Lock stuff with keys.

KeyLock is a neat little wrapper around the built-in nodejs crypto module.

### Well, how do i use it?
Install it `npm i keylock`
Require it `const KeyLock = require('keylock')`
Initialize it `const lock = new KeyLock('some password')`
Lock something `const locked = lock.lock('secret message')`
Unlock something `const unlocked = lock.unlock(locked)`

#### More Detail
##### Parameters
| Function      | Arguments       |
| ------------- | --------------- |
| new KeyLock   | key[, options]  |
| .newKey       | key[, options]  |
| .lock         | data[, options] |
| .unlock       | data[, options] |
##### Options?
| Key                   | Example                   |
| --------------------- | ------------------------- |
| algoritm              | aes-256-cbc, aes192, rc2  |
| inputEncoding         | binary, utf8, hex         |
| outputEncoding        | binary, utf8, hex         |
| key (.unlock & .lock) | cool password, some key   |