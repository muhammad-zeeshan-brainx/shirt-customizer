import { Box, Button, TextareaAutosize, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { API_BASE_URL } from './constants';
import SpinnerLoader from './components/SpinnerLoader';
import { state } from './TShirtViewer/state';

function AIImageGenerator() {
  const [aiPromt, setAiPromt] = useState();
  const [spinner, setSpinner] = useState(false);
  const [imageUrl, setImageUrl] = useState(false);

  const handleGenerateImage = async () => {
    if (!aiPromt || aiPromt?.length < 2) {
      return;
    }
    console.log('generating...');
    try {
      setSpinner(true);

      const response = await axios.post(`${API_BASE_URL}/generate_image`, {
        promt: aiPromt,
      });

      const image = response?.data?.image;

      if (image) {
        const byteCharacters = atob(image);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'image/png' });

        // Create a URL from the Blob
        const localUrl = URL.createObjectURL(blob);
        state.imageUrl = localUrl;
        console.log({ localUrl });
      }
      setSpinner(false);
    } catch (error) {
      console.log({ error });
      setSpinner(false);

      alert('something went wrong');
    }
  };

  return (
    <>
      {spinner && <SpinnerLoader showSpinner={spinner} />}
      <Box
        display='flex'
        flexDirection='column'
        gap='1rem'
        justifyContent='center'
      >
        <Typography fontSize='2rem'>AI Image Generator</Typography>
        <TextareaAutosize
          value={aiPromt}
          onChange={(e) => setAiPromt(e.target.value)}
          minRows={7}
          placeholder='Write your promt'
        />
        <Button
          variant='contained'
          size='large'
          onClick={() => handleGenerateImage()}
        >
          Generate Image
        </Button>
      </Box>
    </>
  );
}

export default AIImageGenerator;
