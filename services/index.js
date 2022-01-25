import { graphql } from 'graphql'
import { request, gql } from 'graphql-request'
const graphqlAPI = process.env.NEXT_PUBLIC_BLOGCMS_ENDPOINT
export const getPost = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `
  const results = await request(graphqlAPI, query)
  return results.postsConnection.edges
}
