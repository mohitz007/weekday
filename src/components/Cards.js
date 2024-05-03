import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, CardMedia } from '@mui/material';
import './styles.css'

import Logo from '../images/logo192.png'

const Cards = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data.map((job, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card style={{ display: 'flex', borderRadius: '12px' , height:"600px" }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <CardMedia
                  component="img"
                  height="40"
                  image={Logo}
                  alt={job.title}
                  style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
                />
                <div>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom align='left'>
                    {job.company || "Company name not available"}
                  </Typography>
                  <Typography variant="h5" component="div" gutterBottom align='left'>
                    {job.title || "Title not available"}
                  </Typography>
                  <Typography variant="body2" component="p" gutterBottom align='left'>
                    {job.location || "Location not available"}
                  </Typography>
                </div>
              </div>
              <Typography variant="body2" component="p" gutterBottom align='left'>
                About Company:
              </Typography>
              <Typography variant="body2" component="p" gutterBottom align='left'>
                About us
              </Typography>
              <Typography variant="body2" component="p" sx={{ mb: 1, color: 'rgba(0, 0, 0, 0.6)', fontWeight: 'bold' }} align='left'>
                Description: {job.jobDetailsFromCompany ? (
                  job.jobDetailsFromCompany.substring(0, 500) + (job.jobDetailsFromCompany.length > 500 ? '...' : '')
                ) : "Description not available"}
              </Typography>
              <Typography variant="body2" component="p" sx={{ mb: 1, color: 'rgba(0, 0, 0, 0.6)' }} align='left'>
                Minimum Experience
              </Typography>
              <Typography variant="body2" component="p" sx={{ mb: 1, color: 'rgba(0, 0, 0, 0.6)' }} align='left'>
                {job.minExp? job.minExp + " years" : "Experience not available"}
              </Typography>
              <Button variant="contained" href={job.jdLink} target="_blank" style={{ marginTop: 'auto', backgroundColor: 'rgb(85, 239, 196)', color: 'white' }}>
                Apply
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Cards;
