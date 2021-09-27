import Joi from "joi";

// TODO change tlds
const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  remember: Joi.boolean(),
});

export default loginSchema;
