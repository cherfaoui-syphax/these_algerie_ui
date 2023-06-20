import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Dropzone from "./DropZone";
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Code } from '@mantine/core';
export default function ExtractCitation(props) {
    const [file, setFile] = useState();
    const [result ,setResult] = useState("");
    const [visible ,setLoading] = useState(false);

    const hancleSubmit =  () => {
        setLoading(true)
        var data = new FormData();
        data.append('file', file);

    
        fetch('http://38.242.132.182:5000/citations-json', {
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

                            <h1 style={{marginLeft:"25%"}}>Extract and format citations</h1>
                            <p>
                                The API endpoint in question is designed to handle scientific 
                                articles in PDF format as input. When a PDF of a scientific 
                                article is provided, the endpoint performs a specific set of 
                                tasks. First, it analyzes the PDF to identify pages that contain 
                                citations. This process involves scanning the document and identifying 
                                pages where references or citations are typically found.
                                Once the pages with citations are identified, the endpoint utilizes OCR 
                                technology to extract the text from those pages.
                                Next, the extracted citation information is processed and formatted into a structured format.
                                The endpoint organizes the citation details into JSON  objects.
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