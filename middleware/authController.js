import firebase from "firebase-admin";
import { serviceAccount } from "../config/serviceAccount.js"; //getting private key

// initialising firebase-admin

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
})

export const authMiddleware = async (req, res, next) => {
    const headerToken = req.headers.authorization;
    if (!headerToken) {
        return res.send({ message: "No token provided" }).status(401);
    }

    if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
        res.send({ message: "Invalid token" }).status(401);
    }

    const token = headerToken.split(" ")[1];
    console.log(token);
    try {
        const isAuth = await firebase.auth().verifyIdToken(token);
        console.log(isAuth);
        if (isAuth) console.log("Authenticated");
        next();
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Something went wrong!",
            err: err.message,
        });
    }
};
