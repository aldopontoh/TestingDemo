fixture('Hover Test')
.page('https://devexpress.github.io/testcafe/example/');

test("Hover Test", async t =>{
    await t
        .setTestSpeed(0.1)
        .hover('input#populate');//mengarahkan kursor saja
})