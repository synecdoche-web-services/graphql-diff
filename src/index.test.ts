import test from "ava";

test('Success', async t => {
    const s = Promise.resolve('success');
    t.is(await s, 'success');
});
