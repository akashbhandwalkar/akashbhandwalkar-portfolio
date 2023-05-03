import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Head from 'next/head'
import ProgressBar from 'react-scroll-progress-bar'
import SyntaxHighlighter from 'react-syntax-highlighter';
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism'
// import Layout from '../../components/Layout'
import CodeBlock from '../../components/CodeBlock'

function Articles({ content, data }) {
  const frontmatter = data
  const { title, author } = frontmatter
  const avatar = `https://pbs.twimg.com/profile_images/1504514767712514048/DdmC_f3R_400x400.jpg`
  return (
    <>
      {/* <div className="writing-progress">
        <ProgressBar height="5px" />
      </div> */}
{/* 
      <Layout secondaryPage noHead> */}
        <div className='page-wrapper article-page' style={{ padding: '10px'}}>
          <Link href="/articles" as="/articles">
            <a className="back-button">
              back
            </a>
          </Link>
          <h1 className="writing-title-h1">{title}</h1>

          <div className="author">
            <a href={`https://twitter.com/${author.twitter}`} target="_blank" rel="noopener noreferrer nofollow">
              <img src={avatar} className='avatar'/>
              <p className='autor-name'> { author.name } </p>
            </a>
          </div>

          <div className="writing-container">
            
          <ReactMarkdown
          children={content}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={prism}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        />

            <div className="twitter-follow">
              If you liked this post I'm sure you'll love
              what I usually share on {' '}
              <a href="https://twitter.com/akash_webdev" rel="noopener noreferrer nofollow">Twitter</a>,
              I share a lot of coding tips there ✌️
            </div>
          </div>
        </div>
      {/* </Layout> */}
    </>
  )
}

Articles.getInitialProps = async (context) => {
  const { slug } = context.query
  const content = await import(`../../articles/${slug}.md`)
  const data = matter(content.default)

  return { ...data }
}

export default Articles;