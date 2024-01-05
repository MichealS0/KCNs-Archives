import ReactMarkdown from 'react-markdown';
import { components } from 'remark-react-renderer';

export const MarkdownRenderer = ({ markdownText }) => {

  const StyledComponents = {
    
    h1: (props) => <h1 className=' text-5xl'>{props.children}</h1>,
    h2: (props) => <h2 className=' text-yellow-300'>{props.children}</h2>,
    p: (props) => <p className=' text-yellow-400'>{props.children}</p>,
    
  };

  const data = markdownText;

  return (

    <div>
      <ReactMarkdown components={components} children={markdownText}/>
    </div>
  );
};