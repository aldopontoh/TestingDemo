import {Selector} from 'testcafe';

const iFrameName = Selector('iframe#mce_0_ifr');
const textArea = Selector('body#tinymce.mce-content-body');

fixture("Iframe Fiture")
.page("http://the-internet.herokuapp.com/iframe");

test("iFrame test", async t => {
    await t
        .switchToIframe(iFrameName)
        .click(textArea)
        .pressKey('ctrl+a delete')
        .typeText(textArea, "Hallo, Aldo here")
        .expect(textArea.innerText).contains("Aldo")
        .switchToMainWindow();
})