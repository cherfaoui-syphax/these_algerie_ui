import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Dropzone from "./DropZone";
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Code } from '@mantine/core';
export default function ESI(props) {
    const [file, setFile] = useState();
    const [result ,setResult] = useState("");
    const [visible ,setLoading] = useState(false);

    const hancleSubmit =  () => {
        setLoading(true)
        var data = new FormData();
        data.append('file', file);

    
        fetch('http://38.242.132.182:5000/deepdoctection-json', {
            method: 'POST',
            body: data
          })
          .then(
            response => response.json() // if the response is a JSON object
          ).then(
            success => {console.log(success) ; setResult(success)} // Handle the success response object
          ).catch(
            error => console.log(error) // Handle the error response object
          ).then(() =>setLoading(false));
    }



  return (

      <Container >
                    <Paper  elevation={3} style ={{ textAlign:"left",margin : "auto" , marginTop : "5%" , padding :"5%"}}>
                        <Paper elevation={1} style ={{ margin : "auto", marginBottom:"20px" , padding :"5%" , width:"90%"}}>

                            <h1 style={{marginLeft:"15%"}}>ESI cover page data extraction</h1>
                            <p>
                            The PDF Processing and Classification endpoint is specifically designed to 
                            handle PDF documents, with a focus on the cover page or "Page de garde." 
                            When a PDF is submitted as input, the endpoint first extracts the cover page 
                            and converts it into an image format. This image is then processed using 
                            deepdoctection, a cutting-edge OCR technology, to accurately extract the 
                            text content from the cover page. The OCR results are then passed through 
                            a neural network and a Naive Bayes model, which have been trained to classify 
                            different text zones based on their content.
                            </p>
                        </Paper>

                            <Paper elevation={1} style ={{ margin : "auto",  marginBottom:"20px" , padding :"5%" , width:"90%"}}>
                                <Grid container>
                                    <h1 style={{margin:"auto" , marginBottom:50}}>Upload a document and run model  </h1>

                                <Grid item xs={12} md={12} > 

                                    <Dropzone fileupload = {setFile}  overlay = {visible}>
                                    </Dropzone>
                                </Grid>
                                <Grid item xs={12} md={12} style={{marginTop:"50px"}} >
                                   <Button onClick={hancleSubmit}  variant="contained" fullWidth disabled={visible}>RUN</Button>
                                </Grid>
                                </Grid>

                            </Paper>
                            <Paper elevation={1} style ={{ margin : "auto" , padding :"5%" , width:"90%"}}>
                                <Grid container>
                                    <h1 style={{margin:"auto" , marginBottom:50}}> Output </h1>
                                    <div style={{minWidth:"90%",margin:"auto"}}>
                                        <Code block style={{minWidth:"90%",fontSize:"1rem"}}> {JSON.stringify(result, null, 2) }</Code>
                                    </div>
                                    

                                </Grid>

                            </Paper>
                    </Paper>
      </Container>

  );
}