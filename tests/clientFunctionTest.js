import {Selector,ClientFunction} from 'testcafe';
import ExamplePage from '../page-objects/pages/examplePage';

const examplePage = new ExamplePage()


const getPageURL = ClientFunction(() => window.location.href); 

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
 await t
        .typeText(examplePage.developerName,"TAU")
        .click(examplePage.osOption)
        .click(examplePage.submitButton)
        .expect(getPageURL()).contains('thank-you');
});