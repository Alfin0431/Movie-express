import userModel from "../models/userModel.js";
import { hashPassword, verifyPassword } from "../utils/hashUtil.js";
import { getJwtToken } from "../utils/jwtUtil.js";

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({ 
                error: "email dan password wajib diisi",
                data : null 
            });
        }

        const user = await userModel.findOne({ email: email });
        if (!user) {
            return res.status(401).send({ 
                error: "Email atau password salah",
                data : null 
            });
        }

        const ismatch = await verifyPassword(password, user.password);
        if (!ismatch) {
            return res.status(401).send({ 
                error: "password salah",
                data : null 
            });
        }

        const token = getJwtToken(user._id, user.username);

        return res.status(200).send({ 
            message: "Login berhasil",
            data : { token }
        });
    } catch (error) {
        return res.status(400).send({ 
            error: error.message,
            error,
            data : null 
        });
    }
};

export const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).send({ 
                error: "username, email dan password wajib diisi",
                data : null 
            });
        }

        const hashedPassword = await hashPassword(password);

        const newUser = new userModel({
            username,
            email,
            password: hashedPassword
        });
        
        await newUser.save();

        if (newUser) {
            return res.status(201).send({ 
                message: "berhasil melakukan pendaftaran, silahkan login",
                data : null 
            });
        }

        return res.status(500).send({ 
            error: "gagal melakukan pendaftaran, coba lagi ya",
            data : null 
        });
    } catch (error) {
        return res.status(400).send({ 
            error: error.message,
            error,
            data : null 
        });
    }
};