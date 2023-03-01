import { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  fullname: string;
  bio?: string;
  email: string;
  mobile?: string;
  gender?: string;
  date_of_birth?: Date;
  address?: {
    country: string;
    city: string;
  };
  job?: string;
  skills?: string[];
  social_accounts?: {
    instagram: string;
    facebook: string;
    github: string;
  };
  website?: string;
  created_at: Date;
  updated_at: Date;
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    trim: true,
    maxlength: 200,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    sparse: true,
  },
  mobile: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    default: "male",
  },
  date_of_birth: {
    type: Date,
  },
  address: {
    country: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
  },
  job: {
    type: String,
    trim: true,
  },
  skills: {
    type: [String],
  },
  social_accounts: {
    instagram: {
      type: String,
      trim: true,
    },
    facebook: {
      type: String,
      trim: true,
    },
    github: {
      type: String,
      trim: true,
    },
  },
  website: {
    type: String,
    trim: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const User = model<IUser>("user", userSchema);

export default User;
