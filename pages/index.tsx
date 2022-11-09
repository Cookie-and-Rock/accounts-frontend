import { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'

import styles from '../styles/styles.module.css'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Page: NextPageWithLayout = () => {

  return (
    <div>
      <div className={styles.login}>
        
        <Typography variant="h4" gutterBottom>
          Cookie and Rock
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Sign in
        </Typography>

        <TextField
          // inputRef={input => input &&  input.focus()}
          id="username-input"
          placeholder="Email"
          type="text"
          autoComplete="username"
          />
        <TextField
          id="password-input"
          placeholder="Password"
          type="text"
          autoComplete="current-password"
          />
        <Link href="" underline="none" align="left">
          Forgot email?
        </Link>

        <div className={styles.createAccountLogin}>
          <Button
            href="/signup"
            variant="text"
            disableRipple
            >
            Create account
          </Button>
          <Button
            variant="contained"
            disableRipple
            >
              Login
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