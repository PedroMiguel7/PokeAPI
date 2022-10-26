import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ type: "text" })
  nickname: string;

  @Index({ unique: true })
  @Column({ type: "text" })
  email: string;

  @Column({ type: "text" })
  password: string;
}