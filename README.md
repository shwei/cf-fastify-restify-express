# cf-fastify-restify-express

A barebones codebase to try out Fastify, Restify, and Express frameworks in Cloud Functions

## Motivation

Express is supported by Cloud Functions (CF) out-of-box; CF is used for serverless services. There are other "middleware" frameworks -- mainly Fastify and Restify that claim to be faster. I want to create a simple project that can test routes based on these frameworks and can create benchmarks for them in CF quickly.

## Status

Express and Restify are working with CF.
Still trying to get Fastify work with CF...

## Tech/framework used

[Google Cloud Functions](https://cloud.google.com/functions/)

## Installation

Installing firebase-tools and local functions-emulator. I set up this project in firebase-aware structure, because it is another popular way of deploying code to Cloud Functions. The dependency, autocannon is a benchmarking tool.

```bash
npm i -g firebase-tools @google-cloud/functions-emulator autocannon
```

## Deloy

### Local Fastify functions

```bash
npm run deploy:fastify
```

## Local Restify functions

```bash
npm run deploy:restify
```

## Local Express functions

```bash
npm run deploy:express
```

## Trigger CFs

Create the file .firebaserc in project folder

```json
{
  "projects": {
    "default": "${your_own_gcp_project_id}"
  }
}
```

### Trigger local Fastify functions

Send a GET request

```bash
curl http://localhost:8010/${your_own_gcp_project_id}/us-central1/greetFromFastify/get
```

Exprected output from GET request

```
[Express] Response from GET request
```

### Trigger local Restify functions

Send a GET request

```bash
curl http://localhost:8010/${your_own_gcp_project_id}/us-central1/greetFromRestify/get
```

Exprected output

```
[Restify] Response from GET request
```

### Trigger local Express functions

Send a GET request

```bash
curl http://localhost:8010/${your_own_gcp_project_id}/us-central1/greetFromExpress/get
```

Exprected output from GET request

```
[Express] Response from GET request
```

## Credits

Tips from [nwoltman](/nwoltman), [mcollina](/mcollina)
[GitHub Issue 946](https://github.com/fastify/fastify/issues/946#issuecomment-454265405)
