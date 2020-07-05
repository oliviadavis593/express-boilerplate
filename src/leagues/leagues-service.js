  
const LeaguesService = {
    getAllLeagues(knex) {
        return knex.select('*').from('')
    },
    //creating a method & having it return a promise => adding Leagues 
    insertLeagues(knex, newLeague) {
        //return Promise.resolve({})
     return knex
         .insert(newLeague)
         .into('')
         .returning('*')
         .then(rows => {
             return rows[0]
         })
    }, 
    getById(knex, id) {
        return knex('').select('*').where('id', id).first();
    },
    deleteLeague(knex, id) {
     return knex('')
          .where({ id })
          .delete()
     },
     updateLeague(knex, id, newLeagueFields) {
         return knex('')
             .where({ id })
             .update(newLeagueFields)
     }
 }
 module.exports = LeaguesService