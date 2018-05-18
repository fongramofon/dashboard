# Almighty Employee Fetcher

> React+Redux (sagas) tiny test project with json-server as backend.

Use this [db.json](https://drive.google.com/file/d/1_x1JVQ5TJ61XM3DnssmhMHeNOJ9mLumk/view?usp=sharing) for json-server.

## Build Setup

``` bash
# install dependencies
npm install

# install json-server
git clone https://github.com/typicode/json-server.git

# navigate there and install dependencies
cd json-server
npm install

# if you don't have globally installed json-server install it then
npm install -g json-server

# use db.json above and start json-server
json-server --watch db.json

# return to the app and serve it on localhost:3001 (create-react-app will ask you about it, don't be scared of it)
cd ..
npm start
```