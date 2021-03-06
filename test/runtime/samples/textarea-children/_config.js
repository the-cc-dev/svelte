export default {
	'skip-ssr': true, // SSR behaviour is awkwardly different

	data: {
		foo: 42
	},

	html: `<textarea></textarea>`,

	test ( assert, component, target ) {
		const textarea = target.querySelector( 'textarea' );
		assert.strictEqual( textarea.value, `\n\t<p>not actually an element. 42</p>\n` );

		component.set({ foo: 43 });
		assert.strictEqual( textarea.value, `\n\t<p>not actually an element. 43</p>\n` );
	}
};