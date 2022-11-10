import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'

import styles from '../styles/signin.module.css'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MUILink from '@mui/material/Link'

const Page: NextPageWithLayout = () => {

  const router = useRouter();

  let initalOTP = router.query?.otp;
  if (!initalOTP) {
    initalOTP = ""
  }

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
          inputRef={input => input && input.focus()}
          id="otp-input"
          placeholder="OTP"
          type="text"
          autoComplete="one-time-code"
          value={initalOTP}
          />
        {/* <Link href="/" passHref>
          <MUILink underline="none" align="left">
            OTP?
          </MUILink>
        </Link> */}

        <div className={styles.createAccountLogin}>
          <Link href="/signup">
            <Button
              variant="text"
              disableRipple
              >
              Create account
            </Button>
          </Link>
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