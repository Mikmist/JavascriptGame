class Button {
  constructor (cost, visible) {
    this.cost = cost;
    this.visible = visible;
  }
}

class upgradeButton extends Button {
  constructor (cost, visible) {
    super(cost, visible)
  }
}
