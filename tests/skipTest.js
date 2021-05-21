import ExamplePage from "../page-objects/pages/examplePage";

const examplePage = new ExamplePage()
fixture("First Fixture")
    .page("http://devexpress.github.io/testcafe/");

test.skip.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t
        .typeText(examplePage.developerName,"Aldo")
        .click(examplePage.osOption)
        .click(examplePage.submitButton);
});

test.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t
        .typeText(examplePage.developerName,"Aldo")
        .click(examplePage.osOption)
        .click(examplePage.submitButton);
});


