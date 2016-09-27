# rest-container

Very simple rest-handler, for getting json data from http://datawactest.com/AlexandraInstituttet_output.php, and serving as json.


### Usage

On first use run, make sure that node.js is installed on the machine.

Then type

```bash
npm install
```
from the terminal, in the subfolder, where the source is located. This should install dependencies for node

To start the node server, simply run

```bash
node index.js
```

By default the server is running on port 3000.

To use a custom port number for running the server use -p:

```bash
node index.js -p 8080
```
This command will start the server on port 8080


When the server is running, simply make a http GET call to localhost:3000/containers (assuming the server is running on port 3000), and the json data should be returned.

To test the server, run curl:

```bash
curl 'http://localhost:3000/containers'
```
