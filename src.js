const req = new XMLHttpRequest
method = 'GET'
url = 'https://api.covid19api.com/summary'
req.open(method, url, true)
req.onload = function(){
    let data = JSON.parse(this.response)
    console.log(data)
}
req.send()