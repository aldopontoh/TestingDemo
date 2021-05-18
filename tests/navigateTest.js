fixture("Navigare Example")
.page('https://devexpress.github.io/testcafe/example/')

test('Navigate Test', async t =>{
    await t
        .navigateTo("https://www.google.com");
});