import React, {useEffect} from 'react';
import clsx from 'clsx';
import {blogPostContainerID} from '@docusaurus/utils-common';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import MDXContent from '@theme/MDXContent';
export default function BlogPostItemContent({children, className}) {
  const {isBlogPostPage} = useBlogPost();
  useEffect(() => {
    // Add lazy/decoding attributes to plain <img> tags in blog content for perf
    if (typeof document === 'undefined') return;
    const images = document.querySelectorAll('#__docusaurus .markdown img');
    images.forEach((img) => {
      if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
      if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
    });
  }, []);
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx('markdown', className)}
      itemProp="articleBody">
      {isBlogPostPage && <MDXContent>{children}</MDXContent> }
    </div>
  );
}
