const validatePassword = (req,res,next)=>{
    console.log(req.body)
    
    const password = req.body.newPassword;

  // Check if password is empty
  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  // Check if password has symbols
  if (/[^a-zA-Z0-9]/.test(password)) {
    return res.status(400).json({ error: 'Password should not contain symbols' });
  }

  // Check if password length is less than 5 or more than 18
  if (password.length < 8 || password.length > 30) {
    return res.status(400).json({ error: 'Password should be between 5 and 18 characters' });
  }

  // If the password passes all validation checks, call the next middleware
  next();
}
module.exports = validatePassword;