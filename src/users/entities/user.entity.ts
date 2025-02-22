import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "utils/commons/user-roles.enum";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column({type:'enum', enum: Roles, default: [Roles.USER]})
    roles: Roles[];
}
