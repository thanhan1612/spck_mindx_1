import mongoose from "mongoose";
const schema = await mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    album : {
        type : [String],
        required:true
    },
    songs : {
        type :[String],
        required:true
    }
})
const ArtistModel = new mongoose.model('artists',schema);
export default ArtistModel;