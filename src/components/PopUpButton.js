import React from 'react';
import {Button} from "reactstrap";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    
      <Button
                    block
                    className="btn-round"
                    color="info"
                
                    onClick={handleClickOpen}
                    size="lg"
                  >
                    <img
                alt="..."
                className=""
                style={{width:"3.5em",height:"3.5em",marginRight:"20px"}}
                src={require("assets/img/marinella5.jpg")}
              ></img>{props.title}
                    </Button>  
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.content.split("\n").map((frase,index2)=>{
              return( 
                <span key={index2}>{frase}<br/></span>
                );
            })}
          </DialogContentText>
        </DialogContent>
       
      </Dialog>
    </div>
  );
}