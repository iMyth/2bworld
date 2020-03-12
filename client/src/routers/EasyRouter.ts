import React from 'react';

export interface RouterConfig {
  path: string;
  component: React.Component;
  children?: RouterConfig[];
}

export class EasyRouter {

  constructor (config: RouterConfig) {
    // TODO
    console.log('easy')
  }

}
