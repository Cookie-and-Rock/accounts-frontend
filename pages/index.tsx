import { ReactElement } from 'react'

import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'

import Typography from '@mui/material/Typography'

const Page: NextPageWithLayout = () => {

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <Typography variant="h4" gutterBottom>
        Cookie and Rock
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        accounts.cookieandrock.com
      </Typography>

      <Typography variant="body1" gutterBottom style={{
        paddingTop: "3rem",
      }}>
        Should redirect...
      </Typography>
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