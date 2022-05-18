import styled from "styled-components";

export interface IFlexProps {
    className?: string;
    children?: React.ReactNode;

    //Flex Properties
    flex?: number;
    row?: boolean;
    column?: boolean;
    wrap?: boolean;
    justifyCenter?: boolean
    justifyAround?: boolean
    justifyBetween?: boolean
    justifyEvenly?: boolean
    alignCenter?: boolean
    alignAround?: boolean
    alignBetween?: boolean
    alignEvenly?: boolean

    //size Properties
    width?: string;
    height?: string;
    minWidth?: string;
    minHeight?: string;
    maxWidth?: string;
    maxHeight?: string;
    size?: string;

    //margin Properties
    m?: number;
    mt?: number;
    mr?: number;
    mb?: number;
    ml?: number;
    mx?: number;
    my?: number;

    //padding Properties
    p?: number;
    pt?: number;
    pr?: number;
    pb?: number;
    pl?: number;
    px?: number;
    py?: number;

    //border Properties
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRadius?: string;
    borderTopLeftRadius?: string;
    borderTopRightRadius?: string;
    borderBottomLeftRadius?: string;
    borderBottomRightRadius?: string;
    borderColor?: string;

    //background Properties
    background?: string;
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    backgroundPosition?: string;
    backgroundAttachment?: string;
    backgroundColor?: string;
}

export const Flex = styled.div`
    display: flex;
    ${(props: IFlexProps) => props.row && `flex-direction: row;`}
    ${(props: IFlexProps) => props.column && `flex-direction: column;`}
    ${(props: IFlexProps) => props.wrap && `flex-wrap: wrap;`}
    ${(props: IFlexProps) => props.justifyCenter && `justify-content: center;`}
    ${(props: IFlexProps) => props.justifyAround && `justify-content: space-around;`}
    ${(props: IFlexProps) => props.justifyBetween && `justify-content: space-between;`}
    ${(props: IFlexProps) => props.justifyEvenly && `justify-content: space-evenly;`}
    ${(props: IFlexProps) => props.alignCenter && `align-items: center;`}
    ${(props: IFlexProps) => props.alignAround && `align-items: space-around;`}
    ${(props: IFlexProps) => props.alignBetween && `align-items: space-between;`}
    ${(props: IFlexProps) => props.alignEvenly && `align-items: space-evenly;`}
    ${(props: IFlexProps) => props.flex && `flex: ${props.flex};`}

    ${(props: IFlexProps) => props.width && `width: ${props.width};`}
    ${(props: IFlexProps) => props.height && `height: ${props.height};`}
    ${(props: IFlexProps) => props.minWidth && `min-width: ${props.minWidth};`}
    ${(props: IFlexProps) => props.minHeight && `min-height: ${props.minHeight};`}
    ${(props: IFlexProps) => props.maxWidth && `max-width: ${props.maxWidth};`}
    ${(props: IFlexProps) => props.maxHeight && `max-height: ${props.maxHeight};`}
    ${(props: IFlexProps) => props.size && `width: ${props.size}; height: ${props.size};`}

    ${(props: IFlexProps) => props.m && `margin: ${props.m}px;`}
    ${(props: IFlexProps) => props.mt && `margin-top: ${props.mt}px;`}
    ${(props: IFlexProps) => props.mr && `margin-right: ${props.mr}px;`}
    ${(props: IFlexProps) => props.mb && `margin-bottom: ${props.mb}px;`}
    ${(props: IFlexProps) => props.ml && `margin-left: ${props.ml}px;`}
    ${(props: IFlexProps) => props.mx && `margin-left: ${props.mx}px; margin-right: ${props.mx}px;`}
    ${(props: IFlexProps) => props.my && `margin-top: ${props.my}px; margin-bottom: ${props.my}px;`}

    ${(props: IFlexProps) => props.p && `padding: ${props.p}px;`}
    ${(props: IFlexProps) => props.pt && `padding-top: ${props.pt}px;`}
    ${(props: IFlexProps) => props.pr && `padding-right: ${props.pr}px;`}
    ${(props: IFlexProps) => props.pb && `padding-bottom: ${props.pb}px;`}
    ${(props: IFlexProps) => props.pl && `padding-left: ${props.pl}px;`}
    ${(props: IFlexProps) => props.px && `padding-left: ${props.px}px; padding-right: ${props.px}px;`}
    ${(props: IFlexProps) => props.py && `padding-top: ${props.py}px; padding-bottom: ${props.py}px;`}    

    ${(props: IFlexProps) => props.border && `border: ${props.border};`}
    ${(props: IFlexProps) => props.borderTop && `border-top: ${props.borderTop};`}
    ${(props: IFlexProps) => props.borderRight && `border-right: ${props.borderRight};`}
    ${(props: IFlexProps) => props.borderBottom && `border-bottom: ${props.borderBottom};`}
    ${(props: IFlexProps) => props.borderLeft && `border-left: ${props.borderLeft};`}
    ${(props: IFlexProps) => props.borderRadius && `border-radius: ${props.borderRadius};`}
    ${(props: IFlexProps) => props.borderTopLeftRadius && `border-top-left-radius: ${props.borderTopLeftRadius};`}
    ${(props: IFlexProps) => props.borderTopRightRadius && `border-top-right-radius: ${props.borderTopRightRadius};`}
    ${(props: IFlexProps) => props.borderBottomLeftRadius && `border-bottom-left-radius: ${props.borderBottomLeftRadius};`}
    ${(props: IFlexProps) => props.borderBottomRightRadius && `border-bottom-right-radius: ${props.borderBottomRightRadius};`}
    ${(props: IFlexProps) => props.borderColor && `border-color: ${props.borderColor};`}

    ${(props: IFlexProps) => props.background && `background: ${props.background};`}
    ${(props: IFlexProps) => props.backgroundImage && `background-image: ${props.backgroundImage};`}
    ${(props: IFlexProps) => props.backgroundSize && `background-size: ${props.backgroundSize};`}
    ${(props: IFlexProps) => props.backgroundRepeat && `background-repeat: ${props.backgroundRepeat};`}
    ${(props: IFlexProps) => props.backgroundPosition && `background-position: ${props.backgroundPosition};`}
    ${(props: IFlexProps) => props.backgroundAttachment && `background-attachment: ${props.backgroundAttachment};`}
    ${(props: IFlexProps) => props.backgroundColor && `background-color: ${props.backgroundColor};`}

`