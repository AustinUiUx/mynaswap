import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Nav from "./Nav"




const Hero = () => {
    return(
        <div className=" hero--img">

        <Container>
            <div className=" ">
            <Nav />
            <Box>
                <Typography variant="h1">
                    A New Way to
                </Typography>
                <Typography variant="h1" sx={{
                    marginTop: "-16px",
                }}>
                    Buy, Sell, Trade
                </Typography>
                <Box sx={{
                    maxWidth: "400px",
                }}>
                <Typography variant="caption" sx={{
                    marginTop: "-16px",
                }}>
                    Buy,sell,and trade physical collectibles with instant settlement and low fees
                </Typography>

                <Typography variant="caption" sx={{
                    marginTop: "-16px",
                }}>
                    by turning your physical collectibles into digital assets.
                </Typography>
                </Box>
            </Box>
            </div>
        </Container>
        </div>
    )
}

export default Hero