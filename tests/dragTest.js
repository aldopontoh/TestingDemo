import ExamplePage from '../page-objects/pages/examplePage';


const examplePage = new ExamplePage()

// const checkTriedBox = Selector('label').withText("I have tried TestCafe");
// const slider = Selector('#slider');

fixture('Drag Test')
.page("https://devexpress.github.io/testcafe/example/");

test('Drag Test', async t =>{
    await t
        .click(examplePage.checkTriedBox)
        .drag(examplePage.slider,360,0,{offsetX:0, offsetY:0});
})