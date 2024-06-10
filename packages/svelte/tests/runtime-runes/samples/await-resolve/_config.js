import { test } from '../../test';

export default test({
	async test({ assert, target, logs }) {
		const [b1, b2] = target.querySelectorAll('button');
		b1.click();
		await Promise.resolve();
		assert.htmlEqual(
			target.innerHTML,
			`<p>then a</p><button>Show Promise A</button><button>Show Promise B</button>`
		);
		b2.click();
		await Promise.resolve();
		assert.htmlEqual(
			target.innerHTML,
			`<button>Show Promise A</button><button>Show Promise B</button>`
		);
		await Promise.resolve();
		assert.htmlEqual(
			target.innerHTML,
			`<p>then b</p><button>Show Promise A</button><button>Show Promise B</button>`
		);

		assert.deepEqual(logs, [
			'mounting Pending.svelte',
			'mounting Then.svelte',
			'mounting Then.svelte'
		]);
	}
});
