import mongoose from "mongoose";
import {loadType} from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const ProductSchema = new Schema({
    price: {
        type: mongoose.Types.Currency,
        Currency: 'USD',
        get: (value) => value/100,  // Convert cents to dollars, its the way mongoose stores currency
    },
    expense: {
        type: mongoose.Types.Currency,
        Currency: 'USD',
        get: (value) => value/100,  // Convert cents to dollars, its the way mongoose stores currency
    },
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Transaction',
        }
    ],
},
{ timestamps: true, toJSON: { getters: true } } // This is to ensure that the getters are applied when the data is sent as a response
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;