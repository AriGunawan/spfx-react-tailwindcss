import * as React from "react";
import { IHelloTailwindProps } from "./IHelloTailwindProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class HelloTailwind extends React.Component<
  IHelloTailwindProps,
  {}
> {
  public render(): React.ReactElement<IHelloTailwindProps> {
    return (
      <div>
        <div className="max-w-screen-md my-0 mx-auto">
          <div className="my-0 -mx-2 bg-blue-600 box-border text-white font-thin p-5">
            <div className="box-border relative px-2 max-w-xl mx-auto">
              <span className="text-2xl">Welcome to SharePoint!</span>
              <p className="text-lg font-light">
                Customize SharePoint experiences using Web Parts.
              </p>
              <p className="text-lg font-light">
                {escape(this.props.description)}
              </p>
              <a
                href="https://aka.ms/spfx"
                className="text-center no-underline w-20 text-white bg-blue-800 p-3 block hover:bg-blue-900"
              >
                <span className="font-semibold">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
