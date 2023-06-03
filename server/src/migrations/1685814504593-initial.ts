import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685814504593 implements MigrationInterface {
    name = 'Initial1685814504593'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "age" integer NOT NULL, "gender" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "hotel" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "location" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_3a62ac86b369b36c1a297e9ab26" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "booking" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "userId" integer, "tourId" integer, "hotelId" integer, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tour" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "duration" integer NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_972cd7fa4ec39286068130fa3f7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tour_hotels_hotel" ("tourId" integer NOT NULL, "hotelId" integer NOT NULL, CONSTRAINT "PK_f36178ddcea0dd7389554ef4155" PRIMARY KEY ("tourId", "hotelId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a384ff4560b1c0a6f69b5414f7" ON "tour_hotels_hotel" ("tourId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7b44ad042ae20306c0ee1c3419" ON "tour_hotels_hotel" ("hotelId") `);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_336b3f4a235460dc93645fbf222" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_c7cbbc825f4a9eb63d6fa130f56" FOREIGN KEY ("tourId") REFERENCES "tour"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_a8c9f0b0d2e97e4cdf825d3d830" FOREIGN KEY ("hotelId") REFERENCES "hotel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tour_hotels_hotel" ADD CONSTRAINT "FK_a384ff4560b1c0a6f69b5414f77" FOREIGN KEY ("tourId") REFERENCES "tour"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tour_hotels_hotel" ADD CONSTRAINT "FK_7b44ad042ae20306c0ee1c34193" FOREIGN KEY ("hotelId") REFERENCES "hotel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tour_hotels_hotel" DROP CONSTRAINT "FK_7b44ad042ae20306c0ee1c34193"`);
        await queryRunner.query(`ALTER TABLE "tour_hotels_hotel" DROP CONSTRAINT "FK_a384ff4560b1c0a6f69b5414f77"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_a8c9f0b0d2e97e4cdf825d3d830"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_c7cbbc825f4a9eb63d6fa130f56"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_336b3f4a235460dc93645fbf222"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7b44ad042ae20306c0ee1c3419"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a384ff4560b1c0a6f69b5414f7"`);
        await queryRunner.query(`DROP TABLE "tour_hotels_hotel"`);
        await queryRunner.query(`DROP TABLE "tour"`);
        await queryRunner.query(`DROP TABLE "booking"`);
        await queryRunner.query(`DROP TABLE "hotel"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
