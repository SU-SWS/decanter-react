import React from 'react';
import { LocalFooter } from './LocalFooter';
import { Lockup } from '../Lockup/Lockup';
import { localFooterColors, localFooterLinkColors } from "./LocalFooter.levers";
import DOMPurify from 'dompurify';

const cellContent = [
  '<h2 class="su-font-serif su-text-20 su-tracking-none">Information for</h2><ul class="su-list-unstyled"><li><a class=" " href="/advisors/">Advisors</a></li><li><a class=" " href="/alumni/">Alumni</a></li><li><a class=" " href="/reunion/">Alumni in reunion</a></li><li><a href="https://cfr.stanford.edu/" class=" su-link--external">Institutional funders</a></li><li><a class=" " href="/how-to-make-a-gift/international/">International donors</a></li><li><a class=" " href="/parents-families/">Parents and families</a></li><li><a class=" " href="/students/">Students</a></li></ul>',
  '<h2 class="su-font-serif su-text-20 su-tracking-none">Information for</h2><ul class="su-list-unstyled"><li><a class=" " href="/advisors/">Advisors</a></li><li><a class=" " href="/alumni/">Alumni</a></li><li><a class=" " href="/reunion/">Alumni in reunion</a></li><li><a href="https://cfr.stanford.edu/" class=" su-link--external">Institutional funders</a></li><li><a class=" " href="/how-to-make-a-gift/international/">International donors</a></li><li><a class=" " href="/parents-families/">Parents and families</a></li><li><a class=" " href="/students/">Students</a></li></ul>',
  '<h2 class="su-font-serif su-text-20 su-tracking-none">Information for</h2><ul class="su-list-unstyled"><li><a class=" " href="/advisors/">Advisors</a></li><li><a class=" " href="/alumni/">Alumni</a></li><li><a class=" " href="/reunion/">Alumni in reunion</a></li><li><a href="https://cfr.stanford.edu/" class=" su-link--external">Institutional funders</a></li><li><a class=" " href="/how-to-make-a-gift/international/">International donors</a></li><li><a class=" " href="/parents-families/">Parents and families</a></li><li><a class=" " href="/students/">Students</a></li></ul>',
  '<h2 class="su-font-serif su-text-20 su-tracking-none">Information for</h2><ul class="su-list-unstyled"><li><a class=" " href="/advisors/">Advisors</a></li><li><a class=" " href="/alumni/">Alumni</a></li><li><a class=" " href="/reunion/">Alumni in reunion</a></li><li><a href="https://cfr.stanford.edu/" class=" su-link--external">Institutional funders</a></li><li><a class=" " href="/how-to-make-a-gift/international/">International donors</a></li><li><a class=" " href="/parents-families/">Parents and families</a></li><li><a class=" " href="/students/">Students</a></li></ul>',
];

export default {
  title: 'Stanford Identity/Local Footer',
  component: LocalFooter,
  subcomponents: { Lockup },
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
        options: localFooterColors
      }
    },
    link: {
      control: {
        type: 'inline-radio',
        options: localFooterLinkColors
      }
    },
    hasButton: {
      control: {
        type: 'boolean'
      }
    },
  }
};

const LocalFooterTemplate = ({ children, ...rest }) => {
  return (
    <LocalFooter {...rest}>
      {children.map((child, index) => (
        // We do this to mimic sending in CMS content or another React component.
        <div key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(child) }} />
      ))}
    </LocalFooter>
  );
};

export const Default = LocalFooterTemplate.bind({});
Default.args = {
  color: 'light grey',
  link: 'blue',
  children: cellContent,
  url: '/',
  line1: 'Make a Gift'
};
Default.storyName = 'Default';

export const White = LocalFooterTemplate.bind({});
White.args = {
  color: 'white',
  link: 'red',
  children: cellContent,
  url: '/',
  line1: 'Make a Gift'
};
White.storyName = 'White';

export const Black = LocalFooterTemplate.bind({});
Black.args = {
  color: 'black',
  link: 'white',
  children: cellContent,
  url: '/',
  line1: 'Make a Gift'
};
Black.storyName = 'Black';

export const Button = LocalFooterTemplate.bind({});
Button.args = {
  color: 'light grey',
  link: 'blue',
  children: cellContent,
  line1: 'Make a Gift',
  url: '/',
  hasButton: true,
  buttonText: 'Web Login',
  buttonUrl: '/'
};
Button.storyName = 'With Login Button';
