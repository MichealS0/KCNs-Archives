import React from 'react';
import {RichText} from '@graphcms/rich-text-react-renderer';

export const RichTextRenderer = ({ content }) => {

  const RenderComponents = {
    h1: (props) => <h1 className=' text-3xl'>{props.children}</h1>,
    h2: (props) => <h2 className='text-md'>{props.children}</h2>,
    h3: (props) => <h3 className='text-lg font-bold'>{props.children}</h3>,
    p: (props) => <p className=' text-sm'>{props.children}</p>,
    code: (props) => <code className='px-2 bg-white w-fit rounded-md'>{props.children}</code>,
    
  };

  return (
    <div>
      <RichText renderers={RenderComponents} content={content} />
    </div>
  );
};