import url from 'url'

const myUrl = new URL('http://mywebsite.com:800/hello.html?id=100&status=active')

//Serialize URL
console.log(myUrl.href)
console.log(myUrl.toString())

///host (root domain)
console.log(myUrl.hostname) //DOES NOT GET PORT
console.log(myUrl.host)

///port number
console.log(myUrl.port)

//Pathname
console.log(myUrl.pathname)

//serialized query
console.log(myUrl.search)

// Params object
console.log(myUrl.searchParams)

//add params
myUrl.searchParams.append("new","param")
console.log(myUrl.searchParams) 

//loop through params
myUrl.searchParams.forEach((value,name)=> console.log(`${name}: ${value}`))