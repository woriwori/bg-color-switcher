/**
 * @jest-environment jsdom
 */
import { rgbStringToHex } from "./helper";
import BgColorSwitcher from "./BgColorSwitcher.js";

describe("Background Color Switcher", () => {
  const bgColor = "#bbbbbb";
  const target = document.createElement("body");
  const inputEle = document.createElement("input");

  const switcher = BgColorSwitcher(inputEle);

  beforeEach(() => {
    inputEle.value = bgColor;
  });

  describe("getInputValue", () => {
    test("입력값을 확인할 수 있다.", () => {
      const expected = switcher.getInputValue();

      expect(expected).toBe(inputEle.value);
    });
  });

  describe("changeBgColor", () => {
    test("입력한 값으로 특정 dom의 background color를 변경할 수 있다.", () => {
      const color = switcher.getInputValue();
      switcher.changeBgColor(target, color);

      /*
      dom 엘리먼트에 inline으로 삽입된 hex color값은 rgb 값으로 변환되기 때문에
      hex값과의 비교를 위해선 rgb값을 다시 hex값으로 변환해주어야합니다.
      */
      const expected = rgbStringToHex(target.style.backgroundColor);

      expect(expected).toBe(bgColor);
    });

    describe("bindHandler", () => {
      test("element에 이벤트 핸들러를 등록할 수 있다.", () => {
        const btnEle = document.createElement("input");
        btnEle.type = "button";
        const handler = jest.fn(() => true);

        switcher.bindHandler(btnEle, "click", handler);
        btnEle.click();

        expect(handler).toHaveBeenCalled();
        expect(handler).toHaveReturnedWith(true);
      });
    });

    describe("resetInput", () => {
      test("입력값을 초기화할 수 있다.", () => {
        const currentValue = switcher.getInputValue();
        expect(currentValue).toBe(bgColor);

        switcher.resetInput();
        const expected = switcher.getInputValue();

        expect(expected).toBe("");
      });
    });
  });
});
