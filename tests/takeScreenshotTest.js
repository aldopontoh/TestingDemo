fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t =>{
    await t 
        .typeText("#developer-name","Aldo Pontoh")
        .click("#macos")
        .click("#submit-button");
});


test("Second Test", async t =>{
    await t 
        .typeText("#developer-name","Renaldo Pontoh")
        .click("#macos")
        .click("#submit-button");
});