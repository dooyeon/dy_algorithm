const { students, colleges } = require('./db');

const Query = {
 test: () => 'Test Success, GraphQL server is up & running !!',
 student: () => students.list(),
 college: () => colleges.list()
}
module.exports = {Query}