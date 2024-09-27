import { hash, genSalt, compare } from "bcrypt";
import crypto from "crypto";

export const usersCollection = [{
  "username": "marcelo",
  "email": "marcelo@gmail.com",
  "password": "1234567"
}];

// Función para crear un usuario
export const createUser = async (user) => {
  const { password } = user;
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);

  const newUser = {
    // Generate a random id
    id: crypto.randomUUID().toString(), user,
    password: hashedPassword,
  };

  usersCollection.push(newUser);

  return newUser;
};

// Función para obtener usuario por id
export const getUserById = async (id) => {
  const findedUser = usersCollection.find((user) => user.id === id) || null;
  return Promise.resolve(findedUser);
};

// Función para obtener usuario por credenciales
export const getUserByCredentials = async (email, password) => {
  const findedUser = usersCollection.find((user) => user.email === email);

  if (!findedUser) {
    return console.log("No se encontró la credencial");
  }

  const isPasswordMatch = await compare(password, findedUser.password);

  if (isPasswordMatch) {
    return findedUser;
  }

  return findedUser;
};
