import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton ,TextField  , InputBase} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar  sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Amazon.In
        </Typography>

				<div style={{ position: 'relative', backgroundColor: 'white', borderRadius: 4, marginLeft: 10 }}>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            style={{ paddingLeft: 10 }}
          />
          <IconButton
            type="submit"
            aria-label="search"
            style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
          >
            <SearchIcon />
          </IconButton>
        </div>


        <Button color="inherit">Home</Button>
        <Button color="inherit">Sign Up</Button>
        <IconButton color="inherit">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
