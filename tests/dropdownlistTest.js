import {Selector} from 'testcafe';

const insterfaceSelect = Selector('select#preferred-interface');
const interfaceOption = insterfaceSelect.find('option');

fixture("Select elementfrom DropdownList")
.page('https://devexpress.github.io/testcafe/example/');

test('select element test', async t =>{
    await t
    .click(insterfaceSelect)
    .click(interfaceOption.withText('Both'));
})