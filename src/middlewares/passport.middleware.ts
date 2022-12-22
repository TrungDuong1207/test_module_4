const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Sử dụng FacebookStrategy cùng Passport.
passport.use(
  new FacebookStrategy(
    {
      clientID: "836706314093742",
      clientSecret: '3b45b54cea3e58673d41818d3d9e22e3',
      callbackURL: "http://localhost:3000/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      process.nextTick(function () {
        return done(null, profile);
      });
    }
  )
);
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`,
//     },
//     function (accessToken, refreshToken, profile, done) {
//       return done(null, profile);
//     }
//   )
// );

// Passport session setup.
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});



export default passport;