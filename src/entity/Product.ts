import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity()

export class Product {

    @PrimaryGeneratedColumn()
    public readonly id: number;

    @Column()
    public price: number;

    @Column({type: "varchar"})
    public name: string;

    @Column({type: "varchar"})
    public author: string;

    @Column({type: "varchar"})
    public image: string;
}