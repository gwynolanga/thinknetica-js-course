let queryTimeoutID = undefined
let queryCache = []

function giphyQuery(query) {
	let apiKey = 'DFBb9yBSLVVoSGcwHfvilQhRqFIiNKbv'
	let giphyUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}`
	let cacheItem = queryCache.find((item) => item.query === query)

	if (cacheItem) {
		return Promise.resolve(cacheItem.results)
	} else {
		return fetch(giphyUrl)
			.then((response) => response.json())
			.then((json) => json.data)
			.then((results) => {
				queryCache.push({ query: query, results: results })
				return results
			})
	}
}

function updatePage(tag, results) {
	tag.textContent = ''
	results.forEach((gif) => {
		let item = document.createElement('img')
		item.setAttribute('src', gif.images.fixed_height_small.url)
		tag.append(item)
	})

	return results
}

document.querySelector('input#search').addEventListener('input', (event) => {
	clearTimeout(queryTimeoutID)

	let gifResults = document.querySelector('.results')
	queryTimeoutID = setTimeout((query) => {
		giphyQuery(query).then((results) => updatePage(gifResults, results))
	}, 500, event.target.value)
})
