import { createConnection, getConnection } from "typeorm";
import ormconfig from "../../ormconfig";

const connectionDB = async () => {
  let connectionName;
  //   try {
  //     console.log(`test getconnection try`);
  //     connectionName = getConnection();
  //   } catch (err) {
  //     console.log(`Need to wait ${err}`);
  //   }
  try {
    if (!connectionName === undefined) {
      console.log(`connectionName ${connectionName}`);
      console.log(`connectionNamebooo ${connectionName.isConnected}`);
      if (!connectionName.isConnected) await connectionName.connect();
    } else {
      await createConnection(ormconfig);
      console.log(`222`);
    }
  } catch (err) {
    console.log("Connection error" + err);
  }
  console.log(`PASHA`);
};
// const connectionDB = async () => {
//   let connectionName;
//   try {
//     console.log(`test getconnection try`);
//     connectionName = getConnection();
//   } catch (err) {
//     console.log(`Need to wait ${err}`);
//   }
//   try {
//     if (connectionName) {
//       if (!connectionName.isConnected) await connectionName.connect();
//     } else {
//       await createConnection(ormconfig);
//       console.log(`222`);
//     }
//   } catch (err) {
//     console.log("Connection error" + err);
//   }
//   console.log(`PASHA`);
// };

export { connectionDB };
