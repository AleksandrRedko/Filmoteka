export default class LocalStorageId {
  constructor() {
    this.keyWatch = 'watch';
    this.keyQueue = 'queue';
  }
  getIdWatch() {
    const serializedState = localStorage.getItem(this.keyWatch);
    if (serializedState !== null) {
      return JSON.parse(serializedState);
    }
    return [];
  }
  getIdQueue() {
    const serializedState = localStorage.getItem(this.keyQueue);
    if (serializedState !== null) {
      return JSON.parse(serializedState);
    }
    return [];
  }
  putIdWatch(id) {
    let idsWatch = this.getIdWatch();
    let pushId = false;
    const index = idsWatch.indexOf(id);

    if (index === -1) {
      idsWatch.unshift(id);
      pushId = true;
    } else {
      idsWatch.splice(index, 1);
    }

    localStorage.setItem(this.keyWatch, JSON.stringify(idsWatch));
    return { pushId, idsWatch };
  }
  putIdQueue(id) {
    let idsQueue = this.getIdQueue();
    let pushIdQueue = false;
    const index = idsQueue.indexOf(id);

    if (index === -1) {
      idsQueue.unshift(id);
      pushIdQueue = true;
    } else {
      idsQueue.splice(index, 1);
    }

    localStorage.setItem(this.keyQueue, JSON.stringify(idsQueue));
    return { pushIdQueue, idsQueue };
  }
}
