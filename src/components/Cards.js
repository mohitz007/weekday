import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const Cards = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data.map((job, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent style={{ flex: 1 }}>
              <Typography variant="h5" component="div">
                {job.title || "Title not available"}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {job.company || "Company name not available"}
              </Typography>
              <Typography variant="body2" component="p">
                Location: {job.location || "Location not available"}
              </Typography>
              <Typography variant="body2" component="p" sx={{ mb: 1 }}>
                Description: {job.jobDetailsFromCompany ? (
                  job.jobDetailsFromCompany.substring(0, 100) + (job.jobDetailsFromCompany.length > 100 ? '...' : '')
                ) : "Description not available"}
              </Typography>
              <Typography variant="body2" component="p" sx={{ mb: 1 }}>
                Experience Required: {job.minExp || "Experience not available"}
              </Typography>
            </CardContent>
            <Button variant="contained" href={job.jdLink} target="_blank" style={{ alignSelf: 'flex-end', marginBottom: '10px' }}>
              Apply
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Cards;
