import { Box, Button, Typography } from "@mui/material";

export const MovieInfo = () => {
  return (
    <Box minHeight='334px' width='80%' margin='0 auto' paddingTop='80px'>
      <Box>
        <Typography variant="h3">Movie title</Typography>
      </Box>
      <Box>
        <Typography variant="body1">Movie info, rating etc</Typography>
      </Box>
      <Box>
        <Typography variant="body1">Movie descirption</Typography>
      </Box>
      <Box marginTop='40px' display='flex' gap='10px'>
        <Button variant="outlined">Watch trailer</Button>
        <Button variant="contained">Watch now</Button>
      </Box>
    </Box>
  );
};
