import React, { useState, useEffect } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1
    }
  })
);

type AppProps = {};

type TestObj = {
  name: 'string'
};

const App = (props: AppProps) => {
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let result = await fetch(
        `/api/test`
      );

      if (result.ok) {
        let d = await result.json();
        setData(d);
      }
    }

    fetchData();
  });

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TODO
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <h1>Hello</h1>
      {data && data.map((d: TestObj) =>
        <p>{d.name}</p>
      )}
    </div>
  )
}

export default App;
