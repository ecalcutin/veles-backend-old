import { Schema } from 'mongoose';

import { CategoryRef } from './category.schema';

export const PrototypeRef = 'Prototype';
export const PrototypeSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: CategoryRef,
            required: true,
        },
        price_retail: {
            type: Number,
            default: 0,
        },

        price_wholesale: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    },
);
