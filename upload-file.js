import * as fs from "fs";
import * as path from "path";
import {Selector, t} from "testcafe";
const fileUploadElement = Selector('input[id="file-upload"]'); // WAIT FOR ELEMENT EXIST
const files = fs.createReadStream(path.resolve(__dirname, "./download.jpeg"));


fixture `File uploading`
    .page('http://the-internet.herokuapp.com/upload');
test('Upload avatar', async t => {
    await t
        .setFilesToUpload(Selector(fileUploadElement), [files.path.toString()])
        .click('[id="file-submit"]') // WAIT FOR ELEMENT VISIBLE
        .expect(Selector('[id="uploaded-files"]').innerText).eql("download.jpeg");
    await t.wait(5000)
});
