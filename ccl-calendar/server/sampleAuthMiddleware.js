export const isAuthenticated = (req, res, next) => {
    // Check if user is authenticated, for example by verifying a JWT token
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ message: 'Authorization token required' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      req.user = decoded.user;
      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: 'Invalid authorization token' });
    }
  };
  
export const isOwner = async (req, res, next) => {
    const userId = req.user.id;
    const { id } = req.params;

try {
    const user = await User.findById(id);

    if (!user) {
    return res.status(404).json({ message: 'User not found' });
    }

    if (userId !== user.id.toString()) {
    return res.status(401).json({ message: 'Unauthorized' });
    }

    next();
} catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error occurred' });
}
};