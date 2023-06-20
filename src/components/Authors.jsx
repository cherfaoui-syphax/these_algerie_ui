import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Dropzone from "./DropZone";
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Code , LoadingOverlay} from '@mantine/core';
export default function Authors(props) {
    const [file, setFile] = useState();
    const [result ,setResult] = useState("");
    const [visible ,setLoading] = useState(false);

    const hancleSubmit =  () => {
        setLoading(true)
        var data = new FormData();
        data.append('file', file);

    
        fetch('http://38.242.132.182:5000/nlp/disambig-json', {
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

                            <h1 style={{marginLeft:"25%"}}>Author names disambiguation</h1>
                            <p>
                                Author name disambiguation is a crucial process in bibliographic 
                                research aimed at distinguishing between authors with similar or 
                                identical names. In academic literature and other scholarly domains, 
                                this task is essential for accurately attributing publications to the 
                                correct authors, especially when dealing with common names or prolific authors. 
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