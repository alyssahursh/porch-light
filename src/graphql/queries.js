/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    lightOn
    guestroomOpen
    closestFriends {
      id
      username
      lightOn
      guestroomOpen
      closestFriends {
        id
        username
        lightOn
        guestroomOpen
      }
      friends {
        id
        username
        lightOn
        guestroomOpen
      }
    }
    friends {
      id
      username
      lightOn
      guestroomOpen
      closestFriends {
        id
        username
        lightOn
        guestroomOpen
      }
      friends {
        id
        username
        lightOn
        guestroomOpen
      }
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      lightOn
      guestroomOpen
      closestFriends {
        id
        username
        lightOn
        guestroomOpen
      }
      friends {
        id
        username
        lightOn
        guestroomOpen
      }
    }
    nextToken
  }
}
`;
