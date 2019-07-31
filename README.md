# domain-fix
To strict your api servers for your desired domains

### To install
npm install domain-fix --save


``` javascript
//For a single domain
const domainFix = require('domain-fix');

let domainCheck = domainFix(domainName,request); // domainName should be a string; request is the request parameter coming from your UI
// The module will give you true/false response
```

``` javascript
//For multiple domain
const domainFix = require('domain-fix');

let domainCheck = domainFix(domainList,request); // domainList should be an array of domains you want to allow; request is the request parameter coming from your UI
// The module will give you true/false response
```

``` html
<h3> Author</h3><br/>
<b>Tanumay Ghosh</b><br/>

```