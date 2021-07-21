import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "katy",
    email: "katyn@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "perry",
    email: "perry@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
