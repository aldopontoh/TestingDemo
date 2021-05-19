import {Selector} from 'testcafe';

const checkTriedBox = Selector('label').withText("I have tried TestCafe");
const slider = Selector('#slider');

fixture('Drag Test')
.page("https://devexpress.github.io/testcafe/example/");

test('Drag Test', async t =>{
    await t
        .setTestSpeed(0.01)
        .click(checkTriedBox)
        .drag(slider,360,0,{offsetX:0, offsetY:0});
})