import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import morgan from 'morgan'
import cros from 'cors'
import cookieParser from 'cookie-parser'
import expressSession from 'express-session'
import dotenv from 'dotenv'
import passport from 'passport'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'

dotenv.config();
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cros());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false, // https를 쓸 때 true
    }
}));
app.use(passport.initialize());
app.use(passport.session());

const apollo = new ApolloServer({ typeDefs, resolvers })
apollo.applyMiddleware({ app })

app.listen(8080, () => {
    console.log(`server is running on http://localhost:8080${apollo.graphqlPath}`);
});