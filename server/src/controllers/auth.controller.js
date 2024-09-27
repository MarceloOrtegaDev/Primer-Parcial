import { createJwt } from "../helpers/createJwt.js";
import { getUserByCredentials } from "../models/user.model.js";
import { usersCollection } from "../models/user.model.js";

export const signInCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByCredentials(email, password);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = await createJwt(user.id);

    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signUpCtrl = async (req, res) => {
  try {
    // ! Completar la función signUpCtrl
    const { username, email, password } = req.body;
    const newUser = await getUserByCredentials({
      id: usersCollection.length + 1,
      username,
      email,
      password
    })

    usersCollection.push(newUser);


    res.status(201).json({ msg: "se creó el usuario correctamente" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signOutCtrl = (req, res) => {
  try {
    // ! Completar la función signOutCtrl
    res.clearCookie("token");

    res.status(200).json({ message: "Sign out success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMeCtrl = (req, res) => {
  try {
    
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


