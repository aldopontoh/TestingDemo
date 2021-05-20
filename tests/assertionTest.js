import ExamplePage from '../page-objects/pages/examplePage';

const examplePage = new ExamplePage()

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
    await t
        .expect(examplePage.developerName.value).eql('', 'input is empty')
        .typeText(examplePage.developerName, "TAU")
        .expect(examplePage.developerName.value).eql('TAU', 'input contains "TAU"')//"TAUddd" after .eql
        .click(examplePage.osOption)
        .click(examplePage.submitButton);
});