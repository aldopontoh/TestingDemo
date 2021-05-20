import { Selector, t } from "testcafe";

class ExamplePage {
    constructor() {
        this.developerName = Selector("#developer-name");
        this.osOption = Selector("#macos");
        this.submitButton = Selector("#submit-button");
    }
}
export default ExamplePage