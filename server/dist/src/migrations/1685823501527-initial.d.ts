import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Initial1685823501527 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
