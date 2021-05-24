import ExamplePage from '../page-objects/pages/examplePage';

const examplePage = new ExamplePage


fixture("File Upload Fixture")
    .page("https://the-internet.herokuapp.com/upload");

test("File Upload test",async t =>{
    await t
        .setFilesToUpload(examplePage.fileUpload,'../page-objects/upload/logo.png')
        .clearUpload(examplePage.fileUpload)
        .setFilesToUpload(examplePage.fileUpload,'../page-objects/upload/logo.png')
        .debug()//debug
        .click(examplePage.uploadFileButton);
});