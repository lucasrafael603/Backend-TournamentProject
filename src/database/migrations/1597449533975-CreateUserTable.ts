import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import { query } from "express";

export class CreateUserTable1597449533975 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Users',
            columns: [
                {name: 'idUser',
                 type: 'varchar',
                 default: 'uuid_generate_v4()',
                 isPrimary: true,
                 generationStrategy: 'uuid'
                },
                
                {  
                name: 'email',
                type: 'varchar',
                isUnique: true

                },

                {
                name: 'password',
                type: 'varchar',
                isNullable: false 
                },

                {  
                 name: 'nickName',
                 type: 'varchar',
                 isNullable: false 
                },

                { 
                  name: 'age',
                  type: 'integer',
                  isNullable: false  
                },

                {
                 name: 'plataform',
                 type: 'varchar',
                 isNullable: true   
                },

                {name: 'created_at', type: 'timestamp', default: 'now()',},
                {name: 'updated_at', type: 'timestamp', default: 'now()',}
                

            ]

        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Users')

    }

}
