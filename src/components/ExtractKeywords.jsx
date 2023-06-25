import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Code } from '@mantine/core';
import { Textarea , Radio , Group} from '@mantine/core';
import Dropzone from "./DropZone";

export default function ExtractKeywords(props) {
    const [text, setText] = useState("");
    const [file, setFile] = useState();
    const [article, setArticle] = useState("yes");
    const [language, setLanguage] = useState("fr");
    const [ocr, setOcr] = useState("no");

    const [result ,setResult] = useState("");
    const [visible ,setLoading] = useState(false);

    const hancleSubmit =  () => {
        setLoading(true)
        var data = new FormData();
        data.append('text', text);
        data.append("lang",language);
        data.append("ocr",ocr);
        data.append("type",article);
        data.append('file', file);

        console.log(data);
    
        fetch('http://38.242.132.182:5000/nlp/extractor-json', {
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

                            <h1 style={{marginLeft:"7%"}}>Extract abstract and keywordsfrom an article</h1>
                            <p>
                            The endpoint in question is specifically designed to accept 
                            the abstract of a scientific article as input and leverages 
                            artificial intelligence to extract both the abstract and keywords 
                            from the article. When an abstract is provided, the endpoint utilizes 
                            advanced natural language processing techniques and machine learning 
                            algorithms to process and analyze the text.
                            </p>
                        </Paper>

                            <Paper elevation={1} style ={{ margin : "auto",  marginBottom:"20px" , padding :"5%" , width:"90%"}}>
                                <Grid container>
                                    <h1 style={{margin:"auto" ,marginBottom:"50px", marginBottom:50}}>Write some text and run model  </h1>

                                <Grid item xs={12} md={12} > 
                                    <Dropzone fileupload = {setFile}  overlay = {visible}>
                                    </Dropzone>
                                    <div style={{margin:"50px 0"}}>
                                    <Radio.Group
                                    value={article}
                                    onChange={setArticle}
                                    name="article"
                                    label="Article"
                                    description="Is this a journal article from a scientific journal yes/np"
                                    withAsterisk
                                    >
                                        <Group mt="xs">
                                            <Radio value="yes" label="Yes" />
                                            <Radio value="no" label="No" />
                                        </Group>
                                    </Radio.Group>
                                    <Radio.Group
                                    value={ocr}
                                    onChange={setOcr}
                                    name="OCR"
                                    label="OCR"
                                    description="Choose yes for OCR and no for pdf mining"
                                    
                                    >
                                        <Group mt="xs">
                                            <Radio value="yes" label="Yes" />
                                            <Radio value="no" label="No" />
                                        </Group>
                                    </Radio.Group>
                                    <Radio.Group
                                    value={language}
                                    onChange={setLanguage}
                                    name="language"
                                    label="Language"
                                    description="In what language is the document written"
                                    withAsterisk
                                    >
                                        <Group mt="xs">
                                            <Radio value="ar" label="Arabic" />
                                            <Radio value="fr" label="French" />
                                            <Radio value="en" label="English" />
                                        </Group>
                                    </Radio.Group>
                                    </div>
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