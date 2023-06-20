import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Code , LoadingOverlay} from '@mantine/core';
import { Textarea } from '@mantine/core';
export default function Classify(props) {
    const [text, setText] = useState("");
    const [result ,setResult] = useState("");
    const [visible ,setLoading] = useState(false);

    const hancleSubmit =  () => {
        setLoading(true)
        var data = new FormData();
        data.append('text', text);

    
        fetch('http://38.242.132.182:5000//nlp/classifier-json', {
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

                            <h1 style={{marginLeft:"15%"}}>Classify an article using its abstract</h1>
                            <p>
                            The provided endpoint is specifically designed to receive the abstract of a 
                            scientific article as input and employs artificial intelligence 
                            techniques to classify the article into its respective domain of 
                            study. When an abstract is provided, the endpoint utilizes advanced 
                            machine learning algorithms and natural language processing techniques 
                            to analyze the text and extract meaningful features.
                            </p>
                        </Paper>

                            <Paper elevation={1} style ={{ margin : "auto",  marginBottom:"20px" , padding :"5%" , width:"90%"}}>
                                <Grid container>
                                    <h1 style={{margin:"auto" , marginBottom:50}}>Write some text and run model  </h1>

                                <Grid item xs={12} md={12} > 

                                    <Textarea value={text} onChange={(event) => setText(event.currentTarget.value)} />

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