import express, { application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import KPIRoutes from './routes/kpi.js';
import ProductRoute from './routes/product.js';
import TransactionRoute from './routes/transaction.js';
import KPI from './models/KPI.js';
import Product from './models/Product.js';
import Transaction from './models/Transaction.js';
import { kpis, products, transactions } from "./data/data.js";;

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan('common'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// ROUTES
app.use('/kpi', KPIRoutes);
app.use('/product', ProductRoute);
app.use('/transaction', TransactionRoute);

// MONGOOSE SETUP
const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URL)
    .then(async () => {
        app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})

        // const collectionName = 'kpis'; // replace with your collection name
        // if ((await mongoose.connection.db.listCollections({name: collectionName}).toArray()).length > 0) {
        //     await mongoose.connection.db.dropCollection(collectionName);    // Drop the collection to avoid duplicates
        // }
        // KPI.insertMany(kpis); // Create database if it didn't exist and insert the data into the database
        // Product.insertMany(products); // Create database if it didn't exist and insert the data into the database
        // Transaction.insertMany(transactions); // Create database if it didn't exist and insert the data into the database
    })
    .catch((error) => {console.log(`Server did not connect due to error: ${error}`)});