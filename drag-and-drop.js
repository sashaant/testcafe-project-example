import {Selector} from "testcafe";

fixture `Drag-and-drop`
    .page('http://the-internet.herokuapp.com/drag_and_drop');
test('Upload avatar', async t => {
    await t.wait(3000);
    await t.expect(Selector('[id="column-a"]').innerText).eql('A');
    await t
        .dragToElement(Selector('[id="column-a"]'), Selector('[id="column-b"]'))
        .expect(Selector('[id="column-a"]').innerText).eql('B');
    await t.wait(3000);
});