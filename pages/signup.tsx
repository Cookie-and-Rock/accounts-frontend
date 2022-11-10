import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'

import styles from '../styles/signup.module.css'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Alert from '@mui/material/Alert'
import Link from 'next/link'

const Page: NextPageWithLayout = () => {

  const router = useRouter();

  let initialRef = router.query?.ref;
  if (!initialRef) {
    initialRef = ""
  }

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

        <Alert severity="info">
          Your username can be changed later
        </Alert>

        <TextField
          inputRef={input => input && input.focus()}
          id="username-input"
          placeholder="Username"
          type="text"
          autoComplete="username"
          size="small"
          helperText="You can use letters, numbers, periods, and underscores"
        />

        {/* <TextField
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
        /> */}

        <TextField
          type="text"
          size="small"
          id="ref-input"
          placeholder="Reference"
          autoComplete="one-time-code"
          helperText="You need a reference to create an account"
          value={initialRef}
        />

        {/* <Link href="" underline="none" align="left">
          Reference?
        </Link> */}

        <div className={styles.createAccountLogin}>
          <Link href="/signin">
            <Button
              variant="text"
              disableRipple
              sx={{ textTransform: 'capitalize' }}
              >
              Sign in instead
            </Button>
          </Link>
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