export default `
  type Meta {
    count: Int!
  }
  type Say {
    _id: String!
    content: String!
    photos: [String!]
    createdAt: String!
    user: User!
  }
  input SayInput {
    content: String!
  }
  type Query {
    say(_id: String): Say!
    says(first: Int, skip: Int): [Say!]
    _saysMeta: Meta!
  }
  type Mutation {
    createSay(input: SayInput): Say!
  }
`;
