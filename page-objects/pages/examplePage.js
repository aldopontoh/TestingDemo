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
        this.iFrameName = Selector('iframe#mce_0_ifr');
        this.textArea = Selector('body#tinymce.mce-content-body');
        this.fileUpload = Selector('input#file-upload');
        this.uploadFileButton = Selector('input#file-submit.button');

    }
}
export default ExamplePage