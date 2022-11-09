import { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'

import styles from '../styles/signup.module.css'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';

const Page: NextPageWithLayout = () => {

  return (
    <div>
      <div className={styles.signup}>

        <Typography variant="h4" gutterBottom>
          Cookie and Rock
        </Typography>
        <Typography variant="h6" gutterBottom>
          Create your Cookie and Rock Account
        </Typography>

        {/* <TextField
          type="text"
          size="small"
          id="first-name-input"
          placeholder="First name"
          autoComplete="given-name"
        />
        <TextField
          type="text"
          size="small"
          id="last-name-input"
          placeholder="Last name"
          autoComplete="family-name"
        />

        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ fontStyle: 'italic' }}
        >
          Your first and last name will only be used to address you privately
        </Typography>

        <Alert severity="info">
          Your first and last name will only be used to address you privately
        </Alert> */}

        <TextField
          id="username-input"
          placeholder="Username"
          type="text"
          autoComplete="username"
          size="small"
          helperText="You can use letters, numbers, periods, and underscores"
        />

        <Alert severity="info">
          Your username can be changed later
        </Alert>

        <TextField
          type="text"
          size="small"
          id="password-input"
          placeholder="Password"
          autoComplete="new-password"
        />
        <TextField
          type="text"
          size="small"
          id="password-confirm-input"
          placeholder="Confirm"
          autoComplete="new-password"
          helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
        />

        <Link href="" underline="none" align="left">
          Forgot email?
        </Link>

        <div className={styles.createAccountLogin}>
          <Button
            href="/"
            variant="text"
            disableRipple
            sx={{ textTransform: 'capitalize' }}
          >
            Sign in instead
          </Button>
          <Button
            variant="contained"
            disableRipple
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

export default Page