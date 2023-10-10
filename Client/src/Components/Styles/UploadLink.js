
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    backgroundColor: '#872657',
    paddingTop: '10px'
  },
  paper: {
    padding: theme.spacing(2),
    color: 'black',

  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '50%',
    margin: '10px 0',
  },
  linkSubmit: {
    marginBottom: 10,
    marginLeft:20,
    backgroundColor: '#E77EB3'
  },
  picSubmit: {
    marginTop: 15,
    marginLeft:20
  },
  file: {
    backgroundColor: '#E77EB3'
  }

}));
