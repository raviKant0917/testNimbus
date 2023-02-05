import jwt from 'jsonwebtoken';

export const jwtAuth = async(req,res,next)=>{
    let token = req.headers.authorization;
    if(!token){
        return res.status(501).json({
            message: "Something went wrong"
        })
    }else{
        token = token.split(" ")[1];
        try {
            const user = await jwt.verify(token,process.env.SECRET_KEY);
            console.log("token verified");
            next();    
        } catch (e) {
            res.status(401).json({
                message: "Unauthorized access"
            })
        }
    }
}