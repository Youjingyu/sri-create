# sri-create
create sri from local file or remote file
## usage
#### use in terminal
```bash
npm i sri-create -g
create-sri <file-url|file-path>
## for example
create-sri https://github.com/Youjingyu/sri-create/blob/master/index.js
## output: sha384-g9DKYp9nQxOuOEs+Nje4BEPAjXGFhDp7EemMl4RMxedE259rme+4qsCFKX9LIE37

## or
create-sri /utils/index.js
```
#### use in script
```bash
npm i sri-create --save
```
```javascript
const createSri = require('sri-create')
createSri('https://github.com/Youjingyu/sri-create/blob/master/index.js').then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})
```