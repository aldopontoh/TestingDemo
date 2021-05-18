fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/");

test.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t 
        .typeText("#developer-name","Aldo")
        .click("#macos")
        .click("#submit-button");
});