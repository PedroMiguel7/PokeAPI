import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("favs")
export class Fav {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  user_id: number;

  @Column({ type: "int" })
  pokemon_id: number;
}
