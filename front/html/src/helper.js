const mod = {

	fetchPost: (path, data, callback) => {

		fetch(path, {

			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)

		})
		.then(response => {

			if (!response.ok) {
				throw new Error('Network response != OK: ' + response.statusText);
			}

			return response.text();

		})
		.then(res => {

			try {
				callback(JSON.parse(res));
			} catch (e) {
				callback(res);
			}

		})
		.catch(error => {
			console.error(error);
		});

	}

}

export default mod;
