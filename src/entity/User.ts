import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Generated,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

// @Entity({ name: "users" })
@Entity()
class User {
  //   @PrimaryGeneratedColumn()
  //   @Generated("uuid")
  //   id: string;

  @PrimaryColumn("varchar", { length: 250 })
  id!: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  constructor({
    id = uuid(),
    firstName = "USER",
    lastName = "user",
    age = 0,
  } = {}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

export { User };

// @Entity()
// export class User {
//   @PrimaryGeneratedColumn()
//   id: string;

//   @Column()
//   firstName: string;

//   @Column()
//   lastName: string;

//   @Column()
//   age: number;

//   constructor({
//     id = uuidv4IdUser(),
//     firstName = "USER",
//     lastName = "user",
//     age = 0,
//   } = {}) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
// }
