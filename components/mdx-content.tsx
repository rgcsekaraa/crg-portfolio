import { JSX, ReactNode } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

function Code({ children, ...props }: JSX.IntrinsicAttributes & { children?: ReactNode }) {
  // Ensure children is a string before highlighting
  const codeHTML = typeof children === 'string' ? highlight(children) : ''
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  code: Code
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }} // Merge custom components
    />
  )
}
