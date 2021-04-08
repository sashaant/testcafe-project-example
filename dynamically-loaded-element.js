import {Selector} from "testcafe";


fixture `Dynamic element 2`
    .page('http://the-internet.herokuapp.com/dynamic_loading/2');

    
test('Element on page that is hidden', async t => {
    await t.wait(2000);
    /*
    A call to an async function is not awaited. Use the "await" keyword before
      actions, assertions or chains of them to ensure that they run in the right
      sequence.
    */
    await t.click('[id="start"] button')
        .expect(Selector('[id="finish"]').innerText).eql('Hello World!', 'Error', {timeout: 10000});
    await t.wait(3000);
});

fixture `Dynamic element 1`
    .page('http://the-internet.herokuapp.com/dynamic_loading/1');


test('Element on page that is hidden', async t => {
    await t.wait(3000);

    const text = await Selector('[id="finish"]').innerText;
    const startButton = await Selector('[id="start"] button');
    const loadImage = Selector('[id="loading"]');
    await t
        .click(startButton)
        .expect(loadImage.getStyleProperty("display")).eql('none', {timeout: 10000})
        .expect(text.trim()).eql('Hello World!', 'Error', {timeout: 10000});
    await t.wait(3000);
});
