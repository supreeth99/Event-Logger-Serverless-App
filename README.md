# Event Logger App

Serverless Event logging application where a user can make a note of their upcoming events that they need to attend, along with any details and picture of the invitation itself.
## Functionality 

- The application allows users to create, update, delete event items.
- The application allows users to upload a file. 
- The application only displays items/Events for a logged in user.
- A user needs to authenticate in order to use an application

## Codebase

- The code is split into multiple layers separating business logic from I/O related code.
- Code is implemented using async/await and Promises without using callbacks.

## Best Pratices

- All resources in the application are defined in the `serverless.yml` file.
- Each function has its own set of permissions.
- Application has sufficient monitoring.
- HTTP requests are validated.

## Architecture

- Data is stored in a table with a composite key.

```
KeySchema:
      - AttributeName: partitionKey
        KeyType: HASH
      - AttributeName: sortKey
        KeyType: RANGE
```

- items are fetched using the `query()` method and not `scan()` method.


# How to run the application

## Backend

To deploy an application run the following commands:

```
cd backend
npm install
serverless deploy -v
```

## Client

To run a client application first edit the `client/src/config.ts` file to set correct parameters. And then run the following commands:

```
cd client
npm install
npm run start
```




