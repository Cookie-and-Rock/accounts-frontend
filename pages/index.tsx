import TextField from '@mui/material/TextField';

export default function HomePage() {

  return (
    <div>
      <TextField
        id="outlined-username-input"
        label="Email"
        type="username"
        autoComplete="username"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
    </div>
  );
}