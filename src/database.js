import { connect } from "mongoose";

import { MONGODB_URI } from "./config"

(async () => { 
  try {
    const db = await connect(MONGODB_URI);
    console.log("DB connected to", db.connection.name);
  } catch(error) {
    console.error(error);
  }
})();

/* just found a solution in the internet 
If you are using latest nodejs (v17.x) , then try updating mongodb url from localhost to 127.0.0.1*/