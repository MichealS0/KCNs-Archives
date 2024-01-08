import React from 'react';
import ReactMarkdown from 'react-markdown';

export const MarkdownRenderer = ({ MarkdownText }) => {

  const StyledComponents = {
    h1: (props) => <h1 className=' text-lg'>{props.children}</h1>,
    h2: (props) => <h2 className='text-md'>{props.children}</h2>,
    p: (props) => <p className=' text-sm'>{props.children}</p>,
    code: (props) => <code className='px-2 bg-gray-300 w-fit rounded-md'>{props.children}</code>,
    lineBreak: () => <div className="my-4 border-t border-gray-300"></div>,
  };

  return (
    <div>
      <ReactMarkdown components={StyledComponents} children={MarkdownText} />
    </div>
  );
};