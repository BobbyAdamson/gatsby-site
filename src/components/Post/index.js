import React from 'react'
import Helmet from 'react-helmet'

export default ({ data }) => {
    const post = data.markdownRemark

    return (
        <article className="post-container">
            <Helmet title={`Bobby Adamson - ${post.frontmatter.title}`} />
            <div className="post">
                <h1>{post.frontmatter.title}</h1>
                <div className="post-content" 
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </article>
    )
}

export const pageQuery = graphql`
    query PostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`