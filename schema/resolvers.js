const { UsersList , MovieList } = require('./FakeData')

const _ = require("lodash")

const resolvers = {
    Query: {
        users: () => {
            return UsersList
        },
        user: (parent, args) => {
            const id = args.id
            const user = _.find(UsersList, { id: Number(id) })
            return user
        },
        movies : () => {
            return MovieList
        },
        movie : ( parent , args) => {
            const name = args.name
            const movie = _.find( MovieList , { name })
            return movie

        }
    }
}

module.exports = {
    resolvers
}