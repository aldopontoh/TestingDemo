import { Selector, t } from "testcafe";

class ExamplePage {
    constructor() {
        this.developerName = Selector("#developer-name");
        this.osOption = Selector("#macos");
        this.submitButton = Selector("#submit-button");
        this.checkTriedBox = Selector('label').withText("I have tried TestCafe");
        this.slider =  Selector('#slider');
        this.interFaceSelect = Selector('#preferred-interface');
        this.interFaceOption = Selector('#preferred-interface').find('option');
    }
}
export default ExamplePage