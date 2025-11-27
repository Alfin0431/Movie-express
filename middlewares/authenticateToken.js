import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({
            error: "Token tidak ditemukan",
            data: null
        });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send({
            error: "Token tidak ditemukan",
            data: null
        });
    }

    jwt.verify(token, "APP_JWT_SECRET_KEY", (err, user) => {
        if (err) {
            return res.status(403).send({
                error: "Token tidak valid",
                details: err.message,
            });
        }

        req.user = user;
        next();
    });
};