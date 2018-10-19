export class Util {

  static gerarChaveAPI(dest: string): string {

    let ret = "";
    let data = new Date();

    ret = this.randomInt(100, 999).toString();
    ret += this.leftPad(data.getSeconds().toString(), 2, '0');
    ret += this.mountInvalidString(data.getSeconds());
    ret += this.leftPad(data.getMinutes().toString(), 2, '0');
    ret += this.mountInvalidString(data.getMinutes());
    ret += this.leftPad(data.getHours().toString(), 2, '0');
    ret += this.mountInvalidString(data.getHours());
    ret += this.leftPad(data.getDate().toString(), 2, '0');
    ret += this.mountInvalidString(data.getDate());
    ret += this.leftPad(data.getMonth().toString(), 2, '0');
    ret += this.mountInvalidString(data.getMonth());
    ret += this.leftPad(data.getFullYear().toString(), 2, '0');
    ret += this.stringToASCii(dest);

    return ret;
  }

  static randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static leftPad(str: string, len: number, ch: string): string {
    len = len - str.length + 1;
    return len > 0 ?
      new Array(len).join(ch) + str : str;
  }

  static mountInvalidString(num: number) {
    if (num < 10)
      return this.randomInt(1, 9).toString();
    else if (num < 20)
      return this.randomInt(10, 99).toString();
    else if (num < 30)
      return this.randomInt(100, 999).toString();
    else if (num < 40)
      return this.randomInt(1000, 9999).toString();
    else if (num < 50)
      return this.randomInt(10000, 99999).toString();
    else if (num < 60)
      return this.randomInt(100000, 999999).toString();
  }

  static stringToASCii(ent: string) {
    var j;
    let ret = "";
    for (j = 0; j < ent.length; j++) {
      ret += ent.charCodeAt(j);
    }
    return ret;
  }

  static formatDate(data, formato) {
    if (formato == 'pt-br') {
      return (data.substr(0, 10).split('-').reverse().join('/'));
    } else {
      return (data.substr(0, 10).split('/').reverse().join('-'));
    }
  }

}
