import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({name:"tweets"})
export class Tweet{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    title:  string;

    @Column()
    content: string;

    @ManyToOne(type=> User, user =>user.tweets)
    user: User;

}