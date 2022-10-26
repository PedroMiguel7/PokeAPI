import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666791312798 implements MigrationInterface {
    name = 'default1666791312798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favs" DROP CONSTRAINT "FK_d3308874f33cbe64f83a034e25f"`);
        await queryRunner.query(`ALTER TABLE "favs" ALTER COLUMN "user_id" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favs" ALTER COLUMN "user_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "favs" ADD CONSTRAINT "FK_d3308874f33cbe64f83a034e25f" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
