/* SystemJS module definition */
declare var module: NodeModule;
/* tslint:disable-next-line:interface-name */
interface NodeModule {
  id: string;
}

declare module "*.json" {
  const value: any;
  export default value;
}
