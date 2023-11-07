const { processQueryResults, getEnv } = require('@evidence-dev/db-commons');

const envMap = {};

const runQuery = async (queryString, database) => {
	let url = database.url
	let urlObj = new URL(database.url)
	if (urlObj.search == '') {
		url += ''

	} else {

	}
	const response = await fetch("https://api.scratchdb.com/query?" + new URLSearchParams({
		api_key: database.opt_id,
		q: queryString
	}))
	const rows = await response.json();
	let columnTypes = {};
	if (rows) {
		for (const [key, value] of Object.entries(rows[0])) {
			columnTypes[key.toLowerCase()] = {
				name: key,
				evidenceType: "string",
				fidelity: "precise"
			}
			console.log(`${key}: ${value}`);
		  }
	}
	let rc = { rows: rows, columnTypes: columnTypes };
	return rc
};

module.exports = runQuery;
