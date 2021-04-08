import {Selector} from "testcafe";

fixture `Iframe test`
    .page('http://the-internet.herokuapp.com/iframe');

test('Iframe test', async t => {
    await t.wait(3000);

    await t.click('.mce-reset button[role="presentation"]');

    const iframeSelector = Selector('* iframe', { timeout: 60000 });
    await t.switchToIframe(iframeSelector);

    await t.typeText('[id="tinymce"]', 'Some Text', {replace: true})
    const text = await Selector('[id="tinymce"] p').innerText;
    await t.expect(text.trim()).contains('Some Text')
    await t.wait(3000);

});