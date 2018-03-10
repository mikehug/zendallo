// @flow

'use strict';

const React = require('react');
const Parser = require('commonmark').Parser;
const Renderer = require('commonmark-react-renderer');

const PLACEHOLDER =
  'super-secret-react-markings-placeholder-if-you-are-seeing-this-then-there-is-a-bug-in-react-markings';

// Source: https://github.com/sindresorhus/strip-indent
function stripIndent(str) {
  const match = str.match(/^[ \t]*(?=\S)/gm);
  if (!match) {
    return str;
  }

  const indent = Math.min(...match.map(x => x.length));

  if (indent === 0) {
    return str;
  }

  const re = new RegExp('^[ \\t]{' + indent + '}', 'gm');
  return str.replace(re, '');
}

function validate(node) {
  let isValid = true;
  const walker = node.walker();
  let event;

  while ((event = walker.next())) {
    var node = event.node;

    if (!event.entering || !node.literal) {
      continue;
    }

    if (node.literal.indexOf(PLACEHOLDER) === -1) {
      continue;
    }

    if (
      node.type === 'text' &&
      node.parent.type === 'paragraph' &&
      node.literal === PLACEHOLDER
    ) {
      continue;
    }

    isValid = false;
    break;
  }

  return isValid;
}

/* ::
declare type ReactNode =
  | void
  | null
  | boolean
  | number
  | string
  | React.Element<any>
  | Iterable<ReactNode>;

type Options = {
  renderers?: {
    [key: string]: (props: Object) => ReactNode
  }
};
*/

function customize(opts /* : Options */) {
  const renderers = opts.renderers || {};

  return function markings(strings, /* : Array<string> */ /* ::, ...values: Array<ReactNode> */
  ) {
    const values = Array.prototype.slice.call(arguments, 1);
    const input = stripIndent(strings.join(PLACEHOLDER));
    const parser = new Parser();
    const ast = parser.parse(input);

    if (!validate(ast)) {
      throw new Error('react-markings cannot interpolate React elements non-block positions',);
    }

    let index = 0;
    const renderer = new Renderer({
      renderers: Object.assign({}, renderers, {
        Paragraph(props) {
          if (
            props.children.length === 1 &&
            props.children[0] === PLACEHOLDER
          ) {
            const value = values[index];
            index = index + 1 < values.length ? index + 1 : 0;
            return value;
          } else if (renderers.Paragraph) {
            return renderers.Paragraph(props);
          } else if (renderers.paragraph) {
            return renderers.paragraph(props);
          }
          return React.createElement('p', {}, props.children);
        },
      }),
    });

    return React.createElement('div', {}, renderer.render(ast));
  };
}

const md = customize({});
md.customize = customize;
module.exports = md;
