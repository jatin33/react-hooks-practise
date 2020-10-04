export function uuid() {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      // eslint-disable-next-line no-bitwise
      const r = (dt + Math.random() * 16) % 16 | 0;
  
      dt = Math.floor(dt / 16);
  
      // eslint-disable-next-line no-bitwise
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  
    return uuid;
  }