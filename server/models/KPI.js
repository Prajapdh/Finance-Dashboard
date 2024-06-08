import mongoose from "mongoose";
import {loadType} from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const daySchema = new Schema({
    date: String,
    revenue: {
        type: mongoose.Types.Currency,
        Currency: 'USD',
        get: (value) => value/100,  // Convert cents to dollars, its the way mongoose stores currency
    },
    expenses: {
        type: mongoose.Types.Currency,
        Currency: 'USD',
        get: (value) => value/100,  // Convert cents to dollars, its the way mongoose stores currency
    },
},
{ toJSON: { getters: true } } // This is to ensure that the getters are applied when the data is sent as a response
);

const MonthSchema = new Schema({
    month: String,
    revenue: {
        type: mongoose.Types.Currency,
        Currency: 'USD',
        get: (value) => value/100,  // Convert cents to dollars, its the way mongoose stores currency
    },
    expenses: {
        type: mongoose.Types.Currency,
        Currency: 'USD',
        get: (value) => value/100,  // Convert cents to dollars, its the way mongoose stores currency
    },
    operationalExpenses: {
        type: mongoose.Types.Currency,
        Currency: 'USD',
        get: (value) => value/100,  // Convert cents to dollars, its the way mongoose stores currency
    },
    nonOperationalExpenses: {
        type: mongoose.Types.Currency,
        Currency: 'USD',
        get: (value) => value/100,  // Convert cents to dollars, its the way mongoose stores currency
    },
},
{ toJSON: { getters: true } } // This is to ensure that the getters are applied when the data is sent as a response
);

const KPISchema = new Schema({
    totalProfit: {
        type: mongoose.Types.Currency,
        Currency: 'USD',
        get: (value) => value/100,  // Convert cents to dollars, its the way mongoose stores currency
    },
    totalRevenue: {
        type: mongoose.Types.Currency,
        Currency: 'USD',
        get: (value) => value/100,  // Convert cents to dollars, its the way mongoose stores currency
    },
    totalExpenses: {
        type: mongoose.Types.Currency,
        Currency: 'USD',
        get: (value) => value/100,  // Convert cents to dollars, its the way mongoose stores currency
    },
    expensesByCategory: {
        type: Map, // Map is a data structure in JS that stores key-value pairs/Object
        of: {
            type: mongoose.Types.Currency,
            Currency: 'USD',
            get: (value) => value/100,  // Convert cents to dollars, its the way mongoose stores currency
        }
    },
    monthlyData: [MonthSchema],
    dailyData: [daySchema],
},
{ timestamps: true, toJSON: { getters: true } } // This is to ensure that the getters are applied when the data is sent as a response
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;