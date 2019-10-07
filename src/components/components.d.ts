/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface FloatingHeader {
    /**
    * The trigger treshold to activate the floating header
    */
    'activeClassName': string;
    /**
    * The trigger treshold to activate the floating header
    */
    'triggerTreshold': number;
  }
  interface GitEdit {
    /**
    * The file path in the repo
    */
    'filePath': string;
    'large': boolean;
    /**
    * The repo base url
    */
    'repo': string;
  }
}

declare global {


  interface HTMLFloatingHeaderElement extends Components.FloatingHeader, HTMLStencilElement {}
  var HTMLFloatingHeaderElement: {
    prototype: HTMLFloatingHeaderElement;
    new (): HTMLFloatingHeaderElement;
  };

  interface HTMLGitEditElement extends Components.GitEdit, HTMLStencilElement {}
  var HTMLGitEditElement: {
    prototype: HTMLGitEditElement;
    new (): HTMLGitEditElement;
  };
  interface HTMLElementTagNameMap {
    'floating-header': HTMLFloatingHeaderElement;
    'git-edit': HTMLGitEditElement;
  }
}

declare namespace LocalJSX {
  interface FloatingHeader {
    /**
    * The trigger treshold to activate the floating header
    */
    'activeClassName'?: string;
    /**
    * The trigger treshold to activate the floating header
    */
    'triggerTreshold'?: number;
  }
  interface GitEdit {
    /**
    * The file path in the repo
    */
    'filePath'?: string;
    'large'?: boolean;
    /**
    * The repo base url
    */
    'repo'?: string;
  }

  interface IntrinsicElements {
    'floating-header': FloatingHeader;
    'git-edit': GitEdit;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'floating-header': LocalJSX.FloatingHeader & JSXBase.HTMLAttributes<HTMLFloatingHeaderElement>;
      'git-edit': LocalJSX.GitEdit & JSXBase.HTMLAttributes<HTMLGitEditElement>;
    }
  }
}


