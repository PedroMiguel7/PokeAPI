import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666823754367 implements MigrationInterface {
    name = 'default1666823754367'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_ad02a1be8707004cb805a4b502"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_97672ac88f789774dd47f7c8be"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_ad02a1be8707004cb805a4b5023" UNIQUE ("nickname")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_ad02a1be8707004cb805a4b5023"`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_ad02a1be8707004cb805a4b502" ON "users" ("nickname") `);
    }

}
