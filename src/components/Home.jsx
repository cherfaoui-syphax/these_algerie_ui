import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Button from '@mui/material/Button';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import {Link} from "react-router-dom";
export default function Home(props) {
  return (

      <Container>
            <Grid container>
                <Grid item xs={12} md={6} >
                    <Paper elevation={3} style ={{ margin : "5%" , padding :"5%"}}>
                        <Grid container>
                            <Grid item xs={3} lg={3} ><SearchOutlinedIcon style = {{fontSize : '5rem' }} /></Grid>
                            <Grid item xs={9} lg={9} >
                                
                                <div style={{textAlign:"justify"}}>
                                    Metadata extraction for scientific literature is to automatically 
                                    annotate each paper with metadata that represents its 
                                    most valuable information <br/><br/>

                                    Keyword extraction is tasked with the automatic identification 
                                    of terms that best describe the subject of a document<br/><br/>

                                    Automatic summarization is the process of shortening a set of 
                                    data computationally, to create a subset (a summary) that represents 
                                    the most important or relevant information within the original content<br/><br/>
                                </div>

                                <Button variant="contained"><Link style ={{color:"white",textDecoration:"None"}} to="/keywords">Keyword and abstract</Link></Button>
                            </Grid>

                        </Grid>
                    </Paper>
                    <Paper elevation={3} style ={{ margin : "5%" , padding :"5%"}}>
                        <Grid container>
                            <Grid item xs={3} lg={3} ><PersonSearchOutlinedIcon style = {{fontSize : '5rem' }} /></Grid>
                            <Grid item xs={9} lg={9} >
                                
                                <div style={{textAlign:"justify"}}>
                                    Authors of scholarly documents often share names which makes 
                                    it hard to distinguish each author's work <br/><br/>

                                    Author name disambiguation aims to find all mentions of the 
                                    same author and cluster them together<br/><br/>
                                </div>

                                <Button variant="contained"><Link style ={{color:"white",textDecoration:"None"}} to="/authors">Author names</Link></Button>
                            </Grid>

                        </Grid>
                    </Paper>
                    <Paper elevation={3} style ={{ margin : "5%" , padding :"5%"}}>
                        <Grid container>
                            <Grid item xs={3} lg={3} ><FindInPageOutlinedIcon style = {{fontSize : '5rem' }} /></Grid>
                            <Grid item xs={9} lg={9} >
                                
                                <div style={{textAlign:"justify"}}>
                                    ESI page de garde <br/>
                                    This service uses OCR and Ai to extract formatted data from a pdf
                                    <br/><br/>
                                </div>

                                <Button variant="contained"><Link style ={{color:"white",textDecoration:"None"}} to="/esi">ESI cover page</Link></Button>
                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Paper elevation={3} style ={{ margin : "5%" , padding :"5%"}}>
                        <Grid container>
                            <Grid item xs={3} lg={3} ><ContentPasteSearchOutlinedIcon style = {{fontSize : '5rem' }} /></Grid>
                            <Grid item xs={9} lg={9} >
                                
                                <div style={{textAlign:"justify"}}>
                                    Document classification is the task that assigns a document to
                                    one or more subjects <br/><br/>
                                    Algerian LMD classification system
                                    <br/><br/>
                                </div>

                                <Button variant="contained"><Link style ={{color:"white",textDecoration:"None"}} to="/classify">Classify</Link></Button>
                            </Grid>

                        </Grid>
                    </Paper>
                    <Paper elevation={3} style ={{ margin : "5%" , padding :"5%"}}>
                        <Grid container>
                            <Grid item xs={3} lg={3} ><ScreenSearchDesktopOutlinedIcon style = {{fontSize : '5rem' }} /></Grid>
                            <Grid item xs={9} lg={9} >
                                
                                <div style={{textAlign:"justify"}}>
                                    Scrap the most recent docuemnts added to pnst.
                                    PNST compiles a great number of algerian doctorate thesis. 
                                    unfortunately the service doesn't offer an api. On top of 
                                    that it's quite slow<br/><br/>
                                    This function sends multiple http requests to their 
                                    servers and returns the most recent additions
                                        <br/><br/>
                                </div>

                                <Button variant="contained"><Link style ={{color:"white",textDecoration:"None"}} to="/scrap">Pnst scrap</Link></Button>
                            </Grid>

                        </Grid>
                    </Paper>
                    <Paper elevation={3} style ={{ margin : "5%" , padding :"5%"}}>
                        <Grid container>
                            <Grid item xs={3} lg={3} ><BiotechOutlinedIcon style = {{fontSize : '5rem' }} /></Grid>
                            <Grid item xs={9} lg={9} >
                                
                                <div style={{textAlign:"justify"}}>
                                    Extract and parse citations from articles
                                    This uses Google vision api to extract text from a pdf 
                                    then uses the Gpt3 api to parse the text.The result is a list of formatted citations <br/><br/>
                                    
                                    <br/><br/>
                                </div>

                                <Button variant="contained"><Link style ={{color:"white",textDecoration:"None"}} to="/citations">Extract citations</Link></Button>
                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
      </Container>

  );
}