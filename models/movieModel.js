import mongoose, { mongo } from "mongoose";
import userModel from "../models/userModel.js";

const MovieSchema = new mongoose.Schema(
    {
        judul: {
            type : String,
            unique : true,
            required : true,
            trim : true,
        },
        tahunRilis : {
            type : String,
            required : true,
            trim : true,
        },
        sutradara: {
            type : String,
            required : true,
            trim : true,
        },

        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true,
    }
);

const movieModel = mongoose.model("movies", MovieSchema);

export default movieModel;