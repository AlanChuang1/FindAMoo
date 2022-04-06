import mongoose from 'mongoose'; 

const Schema = mongoose.Schema;

const usersSchema = new Schema(
    {
      name: { type: [String], required: true },
      email: { type: String, required: true },
      collectedIDs: { type: [String], required: true },
      favoriteID: { type: [String], required: true },
      huntStreak: { type: [String], required: true },
    },
    {
      timestamps: true,
    }
  );
  
  const User = mongoose.model("Users", usersSchema);
  export default User; 