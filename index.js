const crypto = require('crypto')

class KeyLock {
    constructor(key, options = {}) {
        if(typeof(key) !== 'string') { options = key; key = undefined }

        this.algorithm = 'aes-256-cbc'
        this.inputEncoding = 'utf8'
        this.outputEncoding = 'hex'

        this.newKey(key, options)
    }

    newKey(key, options = {}) {
        key = key || crypto.randomBytes(32).toString('hex')

        this.inputEncoding = options.inputEncoding || this.inputEncoding
        this.outputEncoding = options.outputEncoding || this.outputEncoding

        this.cipher = crypto.createCipher(options.algorithm || this.algorithm, key)
        this.decipher = crypto.createDecipher(options.algorithm || this.algorithm, key)
        return key
    }

    lock(data, options = {}) {
        const i = options.inputEncoding || this.inputEncoding
        const o = options.outputEncoding || this.outputEncoding

        options.key ? this.cipher = crypto.createCipher(options.algorithm || 'aes-256-cbc', options.key) : ''

        let locked = this.cipher.update(data, i, o)
        return locked + this.cipher.final(o)
    }

    unlock(data, options = {}) {
        const i = options.inputEncoding || this.inputEncoding
        const o = options.outputEncoding || this.outputEncoding

        options.key ? this.decipher = crypto.createDecipher(options.algorithm || 'aes-256-cbc', options.key) : ''

        let locked = this.decipher.update(data, o, i)
        return locked + this.decipher.final(i)
    }
}

module.exports = KeyLock