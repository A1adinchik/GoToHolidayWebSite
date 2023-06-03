import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Initial1685816042233 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
