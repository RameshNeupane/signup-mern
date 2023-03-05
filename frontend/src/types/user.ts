export type User = {
  _id: string;
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
};

export type errorType = {
  message?: string;
};

export type usersStateType = {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: errorType;
  data: User;
};

export type actionType = {
  type: string;
  payload?: User | User[] | errorType;
};

export type loginData = {
  username: string;
  password: string;
};
