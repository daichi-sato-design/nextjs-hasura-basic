import { graphql } from 'msw'
export const handlers = [
  graphql.query('GetUsers', (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          {
            __typename: 'users',
            id: '5d8c3cfa-76e1-4fe6-89cb-4e79dd8c20e4',
            name: 'Test user 3',
            created_at: '2021-10-03T08:03:00.036485+00:00',
          },
          {
            __typename: 'users',
            id: '2408e4ac-de7d-44cd-8307-ddce8717d71f',
            name: 'Test user 2',
            created_at: '2021-10-03T08:02:54.767987+00:00',
          },
          {
            __typename: 'users',
            id: '158cee36-b5b7-43b7-a8e7-fae46c4f7b1a',
            name: 'Test user 1',
            created_at: '2021-10-03T08:02:38.208171+00:00',
          },
        ],
      })
    )
  }),
  graphql.query('GetUserIds', (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          {
            __typename: 'users',
            id: '5d8c3cfa-76e1-4fe6-89cb-4e79dd8c20e4',
          },
          {
            __typename: 'users',
            id: '2408e4ac-de7d-44cd-8307-ddce8717d71f',
          },
          {
            __typename: 'users',
            id: '158cee36-b5b7-43b7-a8e7-fae46c4f7b1a',
          },
        ],
      })
    )
  }),
  graphql.query('GetUserById', (req, res, ctx) => {
    const { id } = req.variables
    if (id === '5d8c3cfa-76e1-4fe6-89cb-4e79dd8c20e4') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: '5d8c3cfa-76e1-4fe6-89cb-4e79dd8c20e4',
            name: 'Test user 3',
            created_at: '2021-10-03T08:03:00.036485+00:00',
          },
        })
      )
    }
    if (id === '2408e4ac-de7d-44cd-8307-ddce8717d71f') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: '2408e4ac-de7d-44cd-8307-ddce8717d71f',
            name: 'Test user 2',
            created_at: '2021-10-03T08:02:54.767987+00:00',
          },
        })
      )
    }
    if (id === '158cee36-b5b7-43b7-a8e7-fae46c4f7b1a') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: '158cee36-b5b7-43b7-a8e7-fae46c4f7b1a',
            name: 'Test user 1',
            created_at: '2021-10-03T08:02:38.208171+00:00',
          },
        })
      )
    }
  }),
]
