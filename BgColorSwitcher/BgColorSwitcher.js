const BgColorSwitcher = function (inputEle) {
  return {
    getInputValue() {
      return inputEle.value;
    },
    changeBgColor(ele, color) {
      ele.style.backgroundColor = color;
    },
    bindHandler(ele, event, handler) {
      ele.addEventListener(event, handler);
    },
    resetInput() {
      inputEle.value = "";
    },
  };
};

export default BgColorSwitcher;
