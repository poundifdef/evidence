<script context="module">
	export const evidenceInclude = true;
</script>

<script>
	export let credentials;
	export let existingCredentials;
	export let disableSave;

	credentials = { ...existingCredentials };

	let opts = [
		{
			id: 'url',
			label: 'URL',
			type: 'text',
			optional: false,
			override: false,
			placeholder: 'https://api.scratchdb.com?api_key=foo',
			value: credentials.url ?? ''
		},
	];
	import GenericForm from './GenericForm.svelte';
</script>

<GenericForm {opts} bind:credentials bind:disableSave />
