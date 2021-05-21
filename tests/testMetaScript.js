import ExamplePage from "../page-objects/pages/examplePage";

const examplePage = new ExamplePage
fixture.meta('version', '1')("First Fixture")
    .page("https://devexpress.github.io/testcafe/");

test.meta('env', 'production')
.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t 
        .typeText(examplePage.developerName,"Aldo")
        .click(examplePage.osOption)
        .click(examplePage.submitButton);
});

test
.page("https://devexpress.github.io/testcafe/example/")
("Second Test", async t =>{
    await t 
        .typeText(examplePage.developerName,"Aldo")
        .click(examplePage.osOption)
        .click(examplePage.submitButton);
});