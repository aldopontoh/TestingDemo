import ExamplePage from '../page-objects/pages/examplePage';

const examplePage = new ExamplePage()

// const developerName = Selector("#developer-name");
// const osOption = Selector("#macos");
// const submitButton = Selector("#submit-button");

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t =>{
    await t 
        .typeText(examplePage.developerName,"Aldo")
        .click(examplePage.osOption)
        .click(examplePage.submitButton);
});