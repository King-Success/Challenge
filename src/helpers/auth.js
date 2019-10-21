import bcrypt from "bcryptjs";
const { REACT_APP_SALT: salt } = process.env;
const hashPassword = async password => {
  return bcrypt.hash(password, 10, (err, hash) => {
    return hash;
  });
};

const comparePassword = async (password, hashPassword) => {
  return bcrypt.compare(password, hashPassword);
};

export const signupHelper = async data => {
  const { username, email, password } = data;
  data.password = await hashPassword(password);
  const user = JSON.stringify(data);
  await localStorage.setItem("user", user);
  return {
    data: {
      username,
      email
    },
    status: 200
  };
};

export const loginHelper = async data => {
  const { email, password } = data;
  try {
    let user = JSON.parse(await localStorage.getItem("user"));
    // eslint-disable-next-line eqeqeq
    if (
      email == user.email &&
      (await comparePassword(password, user.password))
    ) {
      return {
        data: {
          username: user.username,
          email: user.email
        },
        status: 200
      };
    }
  } catch (e) {
    return {
      error: "User not found",
      status: 404
    };
  }
};

export const loadHelper = async () => {
  let user = JSON.parse(await localStorage.getItem("user"));
  if (!user) return { error: "User not found", status: 404 };
  return {
    data: {
      username: user.username,
      email: user.email
    },
    status: 200
  };
};
