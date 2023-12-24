export default class Validator {
    static validateUsername(name) {
      if (/^[a-z][\w-]*[a-z]$/i.test(name) && name.search(/[\d]{4}/) === -1) {
        return true;
      }
  
      throw new Error(
        'Ошибка! Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.',
      );
    }
  }