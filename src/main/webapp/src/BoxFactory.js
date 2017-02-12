import TextBox from "./TextBox";

const boxes = {
    "text": TextBox
}
export default class BoxFactory {
    static get(type) {
        return boxes[type.toLowerCase()]
    }
}