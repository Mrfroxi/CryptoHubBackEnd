import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('crypt')
export class Crypt {

    @PrimaryGeneratedColumn()
    id: number;


    
}
