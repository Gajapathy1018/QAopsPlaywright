class LoginPage {
    constructor(page) {
        this.page = page
        this.loginPersonalLink = page.getByRole('link', { name: 'Login to Personal Banking' })
        this.continueToLoginButton = page.getByRole('link', { name: 'Continue to Login' })
        this.userName = page.getByRole('textbox', { name: 'userName' })
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.radioAudioCaptionButton = page.getByRole('radio', { name: 'Audio Captcha' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
    }

    async login(username, password) {
        await this.loginPersonalLink.click()
        await this.continueToLoginButton.click()
        await this.userName.fill(username)
        await this.password.fill(password)
        console.log('Username and password filled: ' + username + ', ' + password)
        await this.radioAudioCaptionButton.check()
        await this.loginButton.click()
    }
    async validateInvalidUserName() {
        await this.page.on('dialog', async dialog => {
            //await this.page.pause()
            await dialog.accept()
        })
    }
}
module.exports = LoginPage