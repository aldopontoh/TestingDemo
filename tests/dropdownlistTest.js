// import ExamplePage from "../page-objects/pages/examplePage";

// const examplePage = new ExamplePage

// fixture("Select elementfrom DropdownList")
// .page('https://devexpress.github.io/testcafe/example/');

// test('select element test', async t =>{
//     await t
//     .click(examplePage.insterfaceSelect)
//     .click(examplePage.interfaceOption.withText('Both'));
// })

import ExamplePage from "../page-objects/pages/examplePage";

const examplePage = new ExamplePage()

fixture("Select element from DropdownList")
    .page('https://devexpress.github.io/testcafe/example/');

test.only('select element test', async t => {
    await t
        .click(examplePage.interFaceSelect)
        .click(examplePage.interFaceOption.withText('Both'));
})