---
Date: 20/06/19
Speaker: matthew Leak @ InfinityWorks
---

## Issues with REST

- endpoints are inflexible
- joining data is difficult
- overfetching data

## Benefits of GraphQL

- strongly typed
- introspective
- hierarchical
- similar to js (but not)


## Schema

```graphql
type T {
    // primative, obj, array, not null
    stringField: String
    intField: Int
    objField: U
    arrayField: [V]
    notNullField: T!
}
```

## Queries

```graphql
fetch data with queries, only get back what was asked for

{
    name {
        T
        U
        V
    }
}
```

## Mutations

```graphql
{
    mutation(input) {
        // Payload/return like query
    }
}
```

## Subscriptions

```graphql
{
    subscription {
        // query
    }
}
```

## Define Schema

```graphql
{
    type [Query, Mutation, Schema] {
      // ...
    }
}
```

## Resolvers

each field is backed by a resolver, they fetch data for the field
can return primative, objects, etc
can be async

## Apollo

- Caching
- Refetching Data
- Built-in Pagination
- Quick setup

> Appsync/Amplify is AWS's implementation for graphql
> Appsync is fully featured apollo
> Amplify is lightweight
