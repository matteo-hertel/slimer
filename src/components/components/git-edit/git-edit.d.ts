import '../../../../dist/types/stencil.core';
import '../../components.d.ts';
export declare class GitEdit {
  /**
   * The repo base url
   */
  repo: string;

  /**
   * The file path in the repo
   */
  filePath: string;

  /*
   * Wheter to render the large version or not
   */
  large: boolean;

  render(): JSX.Element;
}
