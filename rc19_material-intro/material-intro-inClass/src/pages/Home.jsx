import CardGrid from "../components/CardGrid"
import TextFieldComp from "../components/TextFieldComp"
import TypoButtons from "../components/TypoButtons"
import AppBarComp from "../components/AppBarComp"
import {createTheme ,ThemeProvider} from "@mui/material"
const Home = () => {

  const theme = createTheme({

  })
  return (

    <ThemeProvider theme={theme}>
    <AppBarComp/>
      {/* <TypoButtons />
      <TextFieldComp /> */}
      <CardGrid />
    </ThemeProvider>
  )
}

export default Home