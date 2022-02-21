import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keyword }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keyword' content={keyword} />
      </Helmet>
    </>
  )
}

Meta.defaultProps = {
  title: 'Welcome To Clickart',
  description: 'All best products here !!',
  keyword: 'E-commerce',
}

export default Meta
