// import { dataArrayDB, dataArrayTasksDB } from "../db";
import { getRepository } from "typeorm";
import { IUser } from "./intefases";
import { User } from "./entity/User";
// import { createConnection } from "typeorm";

const getAllMemory = async () => {
  console.log(`testget`);
  const userrep = getRepository(User);

  console.log(`testget2`);
  const test = userrep.find({ where: {} });
  console.log(test);
  return test;
  // return userrep.find({ where: {} });
};

const postUserMemory = async (createUser: IUser) => {
  // createConnection()
  //   .then(async (connection) => {
  //     console.log(createUser);

  //     // console.log(connection);
  //     console.log("Inserting a new user into the database...");

  //     const user = new User();
  //     user.id = createUser.id;
  //     user.firstName = createUser.firstName;
  //     user.lastName = createUser.lastName;
  //     user.age = createUser.age;
  //     await connection.manager.save(user);
  //     console.log(
  //       "Saved a new user with id: " + `${JSON.stringify(createUser)}`
  //     );
  //     console.log("Function POST");
  //   })
  //   .catch((error) => console.log(error));

  return createUser;
};

export { postUserMemory, getAllMemory };
