export const debounce = (fn, wait) => {
	let debouncer;

	return () => {
		if (debouncer) clearTimeout(debouncer);

		debouncer = setTimeout(() => {
			debouncer = null;
			fn();
		}, wait);
	};
};
