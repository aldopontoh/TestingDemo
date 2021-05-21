import ExamplePage from "../page-objects/pages/examplePage";

const examplePage = new ExamplePage()
fixture("Spees Test Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("FSet Test Speed", async t =>{
    await t 
        .setTestSpeed(0.01)
        //.setPageLoadTimeout(0)  page timeout
        .typeText(examplePage.developerName,"Aldo")
        .click(examplePage.osOption)
        .click(examplePage.submitButton);
});