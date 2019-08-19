/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import SocialMediaIcons, { SocialIcon, socialMediaData } from '../src/components/SocialMedia';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('SocialMediaIcons', module)
  .add('SocialMediaIcons', () => <SocialMediaIcons />)
  .add('Behance', () => <SocialIcon account={socialMediaData.behance} />);
