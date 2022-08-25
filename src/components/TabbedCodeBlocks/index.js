import React, {isValidElement} from 'react';

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const languageMeta = {
  go: {label: 'Go', ordinal: 3},
  javascript: {label: 'JavaScript', ordinal: 1},
  python: {label: 'Python', ordinal: 0},
  rust: {label: 'Rust', ordinal: 2}
}

export default function TabbedCodeBlocks({children}) {
  const codeBlocks = React.Children.map(children, (child) => {
    if (isValidElement(child)) {  // Should also verify CodeBlock element
      const language = child.props.language;
      const meta = languageMeta[language];
      return {
        code: child.props.children.trim(),
        label: meta.label,
        language: language,
        ordinal: meta.ordinal
      }
    }
  }).sort((a, b) => a.ordinal > b.ordinal ? 1 : -1);

  return (
    <Tabs groupId="tabbed-code-blocks">
      {codeBlocks.map((cb) => (
        <TabItem value={cb.language} label={cb.label}>
          <CodeBlock language={cb.language}>{cb.code}</CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  );
}
