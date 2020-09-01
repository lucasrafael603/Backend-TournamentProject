import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import { query } from "express";

export class CreateTournamentTable1597447212840 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'Tournaments',
            columns: [
               { 
                name: 'idTournament',
                type: 'varchar',
                default: 'uuid_generate_v4()',
                isPrimary: true,
                generationStrategy: "uuid"
               },

               {
                name: 'tournamentName',
                type: 'varchar',
                isNullable: false
               },

               {
                name: 'date',
                type: 'timestamp with time zone',
                isNullable: false
               },
               {
                name: 'maxTeams',
                type: 'integer',
                isNullable: true
               },
               {
                name: 'award',
                type: 'varchar',
                isNullable: true
               },
               {
                name: 'userId',
                type: 'varchar',
                isNullable: true
               },
               {name: 'created_at', type: 'timestamp', default: 'now()',},
               {name: 'updated_at', type: 'timestamp', default: 'now()',}
            ]
        }))

        //  await queryRunner.createForeignKey('Tournaments', new TableForeignKey(
        //     {
        //         name: 'UserIdentity',
        //         columnNames: ['userId'],
        //         referencedColumnNames: ['idUser'],
        //         referencedTableName: 'Users',
        //         onDelete: 'SET NULL',
        //         onUpdate: 'CASCADE', 
                 
                
        //     }

        //  ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //await queryRunner.dropForeignKey('Tournaments','UserIdentity')

        await queryRunner.dropTable('Tournaments')

    }

}
