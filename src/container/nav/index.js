class Nav {
  static $HOME_PAGE = 'http://localhost:3000/'

  static #back = () => {
    history.back()
  }

  static #forward = () => {
    history.forward()
  }

  static #reload = () => {
    location.reload()
  }

  static #changePage = (href) => {
    location.assign(href)
  }

  static #go = () => {
    try {
      const url = new URL(window.input.value)
      this.#changePage(url.href)
    } catch (e) {
      alert('Введіть коректну URL адресу')
      console.log(e)
    }
  }

  static #home = () => {
    this.#changePage(this.$HOME_PAGE)
  }

  static init = () => {
    window.back.onclick = this.#back
    window.forward.onclick = this.#forward
    window.reload.onclick = this.#reload
    window.home.onclick = this.#home
    window.go.onclick = this.#go

    window.input.value = location.href
  }
}

Nav.init()
