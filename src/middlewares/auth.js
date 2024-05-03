const authenticateUser = (req, res, next) => {
    // Check if user is authenticated
    if (req.isAuthenticated()) {
        // If authenticated, continue to the next middleware or route handler
        return next();
    } else {
        // If not authenticated, redirect to login page
        res.redirect('/login');
    }
};

// Export the middleware function
module.exports = authenticateUser;
