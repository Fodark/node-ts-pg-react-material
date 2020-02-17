import { Model } from 'objection';

const knex = require('../db/knex');
Model.knex(knex);

class Test extends Model {
    id!: number
    name!: string

    static get tableName() {
        return 'test';
      }

    static jsonSchema = {
        type: 'object',
        required: ['name'],

        properties: {
            id: { type: 'integer' },
            name: { type: 'string', minLength: 1, maxLength: 255 }
          }
    }

    static relationMappings = () => ({})
}

module.exports = Test;