import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function NewTask() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    descripcion: "",
    responsable: {
      name: "",
      email: ""
    },
    status: "",
    dueDate: new Date("2014-08-18T21:11:54")
  });

  const handleDescripcion = event => {
    setState({ ...state, descripcion: event.target.value });
  };

  const handleResponsable = e => {
    setState({ ...state, responsable: { name: e.target.value } });
  };

  const handlEstatus = e => {
    setState({ ...state, status: e.target.value });
  };

  const handleDueDate = date => {
    setState({ ...state, dueDate: date });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <form>
        <h3>New Task</h3>
        <TextField
          id="text"
          label="Descripcion"
          variant="outlined"
          onChange={handleDescripcion}
          value={state.descripcion}
        />
        <br />
        <br />
        <TextField
          id="Responsable"
          type="text"
          variant="outlined"
          label="Responsable"
          onChange={handleResponsable}
          value={state.descripcion.name}
        />
        <br />
        <br />

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={state.status}
            onChange={handlEstatus}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>New</MenuItem>
            <MenuItem value={20}>Ready</MenuItem>
            <MenuItem value={30}>In progress</MenuItem>
            <MenuItem value={40}>Done</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={state.dueDate}
            onChange={handleDueDate}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>

        <br />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
    </div>
  );
}
