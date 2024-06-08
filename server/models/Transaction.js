import mongoose from "mongoose";
import {loadType} from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const TransactionSchema = new Schema({
    buyer: {
        type: String,
        required: true,
    },
    amount: {
        type: mongoose.Types.Currency,
        Currency: 'USD',
        get: (value) => value/100,  // Convert cents to dollars, its the way mongoose stores currency
    },
    productIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        }
    ],
},
{ timestamps: true, toJSON: { getters: true } } // This is to ensure that the getters are applied when the data is sent as a response
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;