import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import LoadingButton from "@mui/lab/LoadingButton"

import { Form } from "formik"
import { useSelector } from "react-redux"
import { object, string } from "yup"
import { Button } from "@mui/material"

export const loginScheme = object({
  email: string()
    .email("Please enter a valid email adress")
    .required("Email is required"),
  password: string()
  .required("password zorunludur")
  .min(8, "password must contain at least 8 character")
  .max(20, "password can be maximum 20 character")
  .matches(/\d+/, "Password must contain a number")
  .matches(/[a-z]/, "Password must contain lowercase")
  .matches(/[A-Z]/, "Password must contain uppercase")
  .matches(/[!,?{}><%&$#£+-.]+/, "Password must contain a special character"),
})

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  const { loading } = useSelector((state) => state.auth)
  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.email && errors.email}
          error={touched.email && Boolean(errors.email)}
        />
        <TextField
          label="password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
        />
        <Button
          loading={loading}
          loadingPosition="center"
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </Form>
  )
}

export default LoginForm
