// @flow
class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `Wah wah, I am ${this.name} and my tests run automatically on commit and push`
  }
}

export default Dog
