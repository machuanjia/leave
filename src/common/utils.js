/**
 * localStorage
 */
export const localStore = {
  setStore: (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
  },
  getStore: (name) => {
    if (!name) return;
    return window.localStorage.getItem(name);
  },
  removeStore: (name) => {
    if (!name) return;
    window.localStorage.removeItem(name);
  }
}

/**
 * cookies
 */
export const cookies = {
  setCookie: (name, value, days) => {
    var exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString();
  },
  getCookie: (name) => {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return decodeURIComponent(arr[2]);
    else
      return null;
  },
  deleteCookie: (name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() + -1 * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" +''+ ";expires=" + exp.toGMTString();
  }
}

/**
 * validator
 */
export const validator = {
  username: (value) => {
    return /^[a-zA-Z0-9_-]{1,16}$/.test(value);
  },
  password: (value) => {
    return /^[a-zA-Z0-9_-]{6,16}$/.test(value);
  }
}
