import $cc from './utils/index.js';

uni.$cc = $cc;

const install = function (Vue) {
  Vue.prototype.$cc = $cc;
};

export default { install };
