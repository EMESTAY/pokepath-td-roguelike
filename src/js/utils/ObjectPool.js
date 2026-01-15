export class ObjectPool {
  constructor(createFn, resetFn) {
    this.createFn = createFn;
    this.resetFn = resetFn;
    this.pool = [];
  }

  get(...args) {
    let obj;
    if (this.pool.length > 0) {
      obj = this.pool.pop();
    } else {
      obj = this.createFn();
    }

    if (this.resetFn) {
      this.resetFn(obj, ...args);
    }
    return obj;
  }

  release(obj) {
    this.pool.push(obj);
  }
}
