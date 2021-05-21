import ExamplePage from '../page-objects/pages/examplePage';

const examplePage = new ExamplePage

fixture("Iframe Fiture")
.page("http://the-internet.herokuapp.com/iframe");

test("iFrame test", async t => {
    await t
        .switchToIframe(examplePage.iFrameName)
        .click(examplePage.textArea)
        .pressKey('ctrl+a delete')
        .typeText(examplePage.textArea, "Hallo, Aldo here")
        .expect(examplePage.textArea.innerText).contains("Aldo")
        .switchToMainWindow();
})