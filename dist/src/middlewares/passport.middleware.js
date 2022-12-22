"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
passport.use(new FacebookStrategy({
    clientID: "836706314093742",
    clientSecret: '3b45b54cea3e58673d41818d3d9e22e3',
    callbackURL: "http://localhost:3000/auth/facebook/callback",
}, function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    process.nextTick(function () {
        return done(null, profile);
    });
}));
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (obj, done) {
    done(null, obj);
});
exports.default = passport;
//# sourceMappingURL=passport.middleware.js.map