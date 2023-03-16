import React,{useState} from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Grid, TextField } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function Form({ tittle }) {
  const [open, setOpen] = React.useState(false);
  const [formData,setFormData] = useState({})
  const [firtsName,setFirstName] =useState("")
  const [lastName,setLastName] =useState("")
  const [designation,setDesignationt] =useState("")
  const [contact,setContact] =useState("")
  const [error,seterror] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit =(e)=>{
    console.log(e.target.value)
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {tittle}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Add Employee
        </BootstrapDialogTitle>
        <DialogContent dividers>
         
          <Typography gutterBottom>
            <Grid container xs={12} spacing={2}>
              <Grid item xs={6}>
                <label>First Name*</label>
                <TextField id="outlined-basic"  onChange={(e)=> setFirstName(e.target.value)}  required />
                {error?<p>Error</p>:""}
              </Grid>
              <Grid item xs={6}>
                <label>Last Name*</label>
                <TextField id="outlined-basic"  onChange={(e)=> setLastName(e.target.value)} required/>
                {error?<p>Error</p>:""}
              </Grid>
                  
            <Grid item sm={6}>
                <label>Designation*</label>
                <TextField id="outlined-basic"  onChange={(e)=> setDesignationt(e.target.value)} required/>
                {error?<p>Error</p>:""}
              </Grid>
              <Grid item sm={6}>
                <label>Contact Number*</label>
                <TextField id="outlined-basic"  onChange={(e)=> setContact(e.target.value)} required />
                {error?<p>Error</p>:""}
              </Grid>
              </Grid>   
          </Typography>
          
        </DialogContent>
        <DialogActions>
        <Button autoFocus onClick={handleSubmit} type="submit">
            Cancel
          </Button>
          <Button autoFocus onClick={handleSubmit} type="submit">
            Add
          </Button>
        </DialogActions>
        <Form/>
      </BootstrapDialog>
    </div>
  );
}
