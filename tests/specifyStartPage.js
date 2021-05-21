import ExamplePage from "../page-objects/pages/examplePage";

const examplePage = new ExamplePage
fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/");

test.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t 
        .typeText(examplePage.developerName,"Aldo")
        .click(examplePage.osOption)
        .click(examplePage.submitButton);
});