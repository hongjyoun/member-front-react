export default class ModalController {
  #flagState;
  #modalInfos = []

  constructor(flagState) {
    this.#flagState = flagState;
  }

  flush() {
    const [_, setFlag] = this.#flagState;
    setFlag((prev) => prev + 1);
  }

  get top() {
    return this.#modalInfos[this.#modalInfos.length - 1];
  }

  handlePromise(key, resolver, value) {
    resolver(value)
    this.#modalInfos = this.#modalInfos.filter(({ key: _key }) => key !== _key)
    this.flush()
  }

  clear() {
    while (this.#modalInfos.length) this.pop()
    this.flush()
  }

  pop() {
    this.top.reject(`Close modal: ${this.top.key}`)
    this.#modalInfos.pop()
    this.flush()
  }

  async push(key, Component, props) {
    return await new Promise((resolve, reject) => {
      this.#modalInfos.push({
        key,
        Component,
        props,
        resolve: (value) => this.handlePromise(key, resolve, value),
        reject: (reason) => this.handlePromise(key, reject, reason),
      })
      this.flush()
    })
  }

}