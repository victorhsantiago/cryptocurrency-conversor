function getCoin() {

	const xhr = new XMLHttpRequest()
	const method = 'GET'
	const url = 'https://api.coinmarketcap.com/v1/ticker/?convert=BRL'

	xhr.open(method, url, false)
	xhr.send()

	respostaJson = JSON.parse(xhr.response)

	for (let index = 0; index < respostaJson.length; index++) {
		var tr = document.createElement('tr')

		var td = document.createElement('td')
		td.textContent = respostaJson[index].rank
		tr.appendChild(td)

		var td = document.createElement('td')
		td.textContent = respostaJson[index].name
		tr.appendChild(td)

		var td = document.createElement('td')
		td.textContent = respostaJson[index].symbol
		tr.appendChild(td)

		var td = document.createElement('td')
		td.textContent = respostaJson[index].price_brl
		tr.appendChild(td)

		var td = document.createElement('td')
		td.textContent = respostaJson[index].price_usd
		tr.appendChild(td)

		var tbody = document.querySelector('tbody');
		tbody.appendChild(tr)

		var option = document.createElement('option')
		option.textContent = respostaJson[index].name
		option.value = respostaJson[index].price_brl

		var select = document.querySelector('select')
		select.appendChild(option)
	}

}

document.querySelector('#conversor').addEventListener('submit', function (event) {
	event.preventDefault();

	var vlrReal = document.querySelector('#inputValue')
	var vlrCoin = document.querySelector('#coins')
	var result = document.querySelector('#result')

	result.innerHTML = vlrReal.value / vlrCoin.value;
})

getCoin()