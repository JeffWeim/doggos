declare module '*.svg' {
  const content:
    | React.FunctionComponent<React.SVGAttributes<SVGElement>>
    | string
    | Interpolation<
        FastOmit<
          DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
          never
        >
      >;
  export default content;
}
