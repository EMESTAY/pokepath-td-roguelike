export class Trait {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.active = false;
  }

  onEvent(event, payload, context) {
    // Override me
  }

  attach(entity) {
    this.entity = entity;
  }

  detach() {
    this.entity = null;
  }
}
