import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

model("Task", taskSchema);

export default model("Task", taskSchema);