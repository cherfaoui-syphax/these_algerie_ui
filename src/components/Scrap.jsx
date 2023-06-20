import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Dropzone from "./DropZone";
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Code , LoadingOverlay} from '@mantine/core';
import { NumberInput } from '@mantine/core';
import { DataGrid } from '@mui/x-data-grid';

export default function Scrap(props) {
    const columns = [
        { field: 'Auteur', headerName: 'Auteur', width: 300 },
        { field: 'Titre', headerName: 'Titre', width: 500 }]

    const [value, setValue] = useState();
    const [result ,setResult] = useState([]);
    const [visible ,setLoading] = useState(false);

    const hancleSubmit =  () => {
        setLoading(true)
        var data = new FormData();
        data.append('number', value);

        fetch('http://38.242.132.182:5000/scrap?number='+value.toString(), {
            method: 'GET',
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

                            <h1 style={{marginLeft:"40%"}}>PNST scrap</h1>
                            <p>
                            By leveraging web scraping techniques, the API endpoint navigates through the catalog's 
                            website, gathering valuable data such as thesis titles, authors, abstracts, and submission 
                            dates. It intelligently scrapes the website's pages, 
                            ensuring that only the most recent theses are included in the JSON response.
                            </p>
                        </Paper>

                            <Paper elevation={1} style ={{ margin : "auto",  marginBottom:"20px" , padding :"5%" , width:"90%"}}>
                                <Grid container>
                                    <h1 style={{margin:"auto" , marginBottom:50}}>Input how many documents to scrap  </h1>

                                <Grid item xs={12} md={12} > 

                                    <NumberInput value={value} onChange={setValue} />
                                </Grid>
                                <Grid item xs={12} md={12} style={{marginTop:"50px"}} >
                                   <Button onClick={hancleSubmit}  variant="contained" fullWidth disabled={visible}>RUN</Button>
                                </Grid>
                                </Grid>

                            </Paper>
                            <Paper elevation={1} style ={{ margin : "auto" , padding :"5%" , width:"90%"}}>
                                <Grid container>
                                    <h1 style={{margin:"auto" , marginBottom:50}}> Output </h1>
                                    <div style={{ height: 400, width: '100%' }}>
                                        <DataGrid
                                            rows={result}
                                            columns={columns}
                                            initialState={{
                                            pagination: {
                                                paginationModel: { page: 0, pageSize: 5 },
                                            },
                                            }}
                                            pageSizeOptions={[5, 10]}
                                        />
                                    </div>
                                    <div style={{minWidth:"90%",margin:"auto"}}>
                                        <Code block style={{minWidth:"90%",fontSize:"1rem"}}> {JSON.stringify(result, null, 2) }</Code>
                                    </div>
                                    

                                </Grid>

                            </Paper>
                    </Paper>
      </Container>

  );
}