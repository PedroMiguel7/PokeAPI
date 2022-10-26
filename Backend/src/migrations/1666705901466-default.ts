import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666705901466 implements MigrationInterface {
    name = 'default1666705901466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "nickname" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_ad02a1be8707004cb805a4b502" ON "users" ("nickname") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `);
        await queryRunner.query(`CREATE TABLE "favs" ("id" SERIAL NOT NULL, "pokemon_id" integer NOT NULL, "user_id" integer, CONSTRAINT "PK_2fde25c80bd089c0fa0e7986409" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "favs" ADD CONSTRAINT "FK_d3308874f33cbe64f83a034e25f" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favs" DROP CONSTRAINT "FK_d3308874f33cbe64f83a034e25f"`);
        await queryRunner.query(`DROP TABLE "favs"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_97672ac88f789774dd47f7c8be"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ad02a1be8707004cb805a4b502"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
