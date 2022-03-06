import cookie from 'cookie';

export const checkAuth = (handler) => {
    return (req, res) => { 
      const cookies = cookie.parse(req.headers.cookie); 
      const token = cookies.token;
  
      if (!token) {
        return res.status(401).json({ err: "Invalid token" });
      }
      
      req.user = user;
      return handler(req, res);
    }; 
};

  function handler(req, res) { 
    res.status(200).send(req.user); 
  }
  
  export default checkAuth(handler);