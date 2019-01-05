/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface FloatingHeader {
    /**
    * The trigger treshold to activate the floating header
    */
    'activeClass': string;
    /**
    * The trigger treshold to activate the floating header
    */
    'triggerTreshold': number;
  }
  interface FloatingHeaderAttributes extends StencilHTMLAttributes {
    /**
    * The trigger treshold to activate the floating header
    */
    'activeClass'?: string;
    /**
    * The trigger treshold to activate the floating header
    */
    'triggerTreshold'?: number;
  }

  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'FloatingHeader': Components.FloatingHeader;
    'MyComponent': Components.MyComponent;
  }

  interface StencilIntrinsicElements {
    'floating-header': Components.FloatingHeaderAttributes;
    'my-component': Components.MyComponentAttributes;
  }


  interface HTMLFloatingHeaderElement extends Components.FloatingHeader, HTMLStencilElement {}
  var HTMLFloatingHeaderElement: {
    prototype: HTMLFloatingHeaderElement;
    new (): HTMLFloatingHeaderElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLElementTagNameMap {
    'floating-header': HTMLFloatingHeaderElement
    'my-component': HTMLMyComponentElement
  }

  interface ElementTagNameMap {
    'floating-header': HTMLFloatingHeaderElement;
    'my-component': HTMLMyComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
