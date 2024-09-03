import jwt from 'jsonwebtoken';


const users = [
    { id: 1, username: 'manuel', password: 'manuel1234' },
    { id: 2, username: 'julio', password: 'julio4567' },
];


export const login = (req, res) => {
    const { username, password } = req.body;

  
    const user = users.find(u => u.username === username && u.password === password);

  
    if (!user) {
        return res.status(401).json({ message: 'credenciales no validas ' });
    }

   
    const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,  
        { expiresIn: '30m' }  
    );

  
    res.json({ token });
};

export const verifyToken = (req, res) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'no hay tokem' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'token invalido ' });
        }

        res.json({ message: 'El token es valido', user: decoded });
    });
};
