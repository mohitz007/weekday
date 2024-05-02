import React from "react";
import { AppBar, Toolbar, Typography, TextField, Checkbox, FormControlLabel } from '@mui/material';


const Header = ({ minExpFilter, locationFilter, salaryFilter, remoteFilter, roleFilter, handleMinExpChange, handleLocationChange, handleSalaryChange, handleRemoteChange, handleRoleChange }) => {

    return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Job Search
            </Typography>
            <TextField
              label="Min Exp"
              type="number"
              value={minExpFilter}
              onChange={handleMinExpChange}
              style={{ marginRight: '10px' }}
            />
            <TextField
              label="Location"
              value={locationFilter}
              onChange={handleLocationChange}
              style={{ marginRight: '10px' }}
            />
            <TextField
              label="Salary"
              type="number"
              value={salaryFilter}
              onChange={handleSalaryChange}
              style={{ marginRight: '10px' }}
            />
            <FormControlLabel
              control={<Checkbox checked={remoteFilter} onChange={handleRemoteChange} />}
              label="Remote"
            />
            <TextField
              label="Role"
              value={roleFilter}
              onChange={handleRoleChange}
              style={{ marginLeft: '10px' }}
            />
          </Toolbar>
        </AppBar>
      );
    
}


export default Header;