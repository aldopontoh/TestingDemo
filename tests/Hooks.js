fixture.meta('version', '1')("First Fixture")
    .page("https://devexpress.github.io/testcafe/")
    .beforeEach(async t =>{
        await t
            .maximizeWindow()
            .setTestSpeed(0.1)
            .setPageLoadTimeout(0);
    })

test
.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t 
        .typeText("#developer-name","Aldo")
        .click("#macos")
        .click("#submit-button");
});

test
.page("https://devexpress.github.io/testcafe/example/")
("Second Test", async t =>{
    await t 
        .typeText("#developer-name","Aldo")
        .click("#macos")
        .click("#submit-button");
});