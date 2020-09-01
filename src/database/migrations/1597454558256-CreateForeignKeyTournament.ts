import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateForeignKeyTournament1597454558256 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

          await queryRunner.createForeignKey('Tournaments', new TableForeignKey(
            {
                name: 'UserIdentity',
                columnNames: ['userId'],
                referencedColumnNames: ['idUser'],
                referencedTableName: 'Users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE', 
                 
                
            }

         ))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey('Tournaments','UserIdentity')

    }

}
