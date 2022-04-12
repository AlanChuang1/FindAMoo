import mongoose from 'mongoose'; 

const Schema = mongoose.Schema;

const cowsSchema = new Schema(
    {
      S3link: { type: String, required: true },
      layersID: { type: String, required: true },
      location: { 
        type: {lat: Number, lon: Number}, required: true 
      }, 
      collectedDate: { type: Date, required: true },
      name: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );
  
  const Cow = mongoose.model("Cows", cowsSchema);
  export default Cow; 