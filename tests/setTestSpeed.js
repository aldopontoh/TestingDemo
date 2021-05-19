fixture("Spees Test Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("FSet Test Speed", async t =>{
    await t 
        .setTestSpeed(0.01)
        //.setPageLoadTimeout(0)  page timeout
        .typeText("#developer-name","Aldo")
        .click("#macos")
        .click("#submit-button");
});